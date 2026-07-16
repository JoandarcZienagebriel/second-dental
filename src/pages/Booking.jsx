import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, startOfWeek } from 'date-fns';
import { useBookingsForDate, useCreateBooking, getAvailableSlots } from '@/hooks/useBookings';
import ServiceSelector from '@/components/booking/ServiceSelector';
import DentistSelector from '@/components/booking/DentistSelector';
import CalendarPicker from '@/components/booking/CalendarPicker';
import TimeSlotGrid from '@/components/booking/TimeSlotGrid';
import ConfirmationModal from '@/components/booking/ConfirmationModal';
import SuccessView from '@/components/booking/SuccessView';
import { useToast } from '@/components/ui/use-toast';

const STEPS = ['service', 'dentist', 'datetime', 'details'];

export default function Booking() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [service, setService] = useState('');
  const [dentist, setDentist] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(null);

  const { data: bookings, isLoading: loadingSlots } = useBookingsForDate(selectedDate, dentist);
  const createBooking = useCreateBooking();
  const availableSlots = useMemo(() => getAvailableSlots(bookings), [bookings]);

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!dentist;
    if (step === 2) return !!selectedDate && !!selectedSlot;
    if (step === 3) return !!patientName.trim() && !!patientPhone.trim();
    return false;
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else setShowConfirm(true);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleConfirm = async () => {
    const data = {
      patient_name: patientName.trim(),
      patient_phone: patientPhone.trim(),
      patient_email: patientEmail.trim(),
      service,
      dentist,
      date: format(selectedDate, 'yyyy-MM-dd'),
      start_time: selectedSlot.start,
      end_time: selectedSlot.end,
      status: 'confirmed',
      notes: notes.trim(),
    };

    try {
      await createBooking.mutateAsync(data);
      setShowConfirm(false);
      setSuccess({
        ...data,
        timeLabel: selectedSlot.label,
      });
    } catch (err) {
      // Surface the real error instead of assuming a slot conflict
      const detail =
        err?.response?.data?.detail ||
        err?.data?.detail ||
        err?.message ||
        'Could not create the appointment. Please try again.';
      toast({
        title: 'Booking Failed',
        description: typeof detail === 'string' ? detail : JSON.stringify(detail),
        variant: 'destructive',
      });
      setShowConfirm(false);
    }
  };

  const handleReset = () => {
    setStep(0);
    setService('');
    setDentist('');
    setSelectedDate(null);
    setSelectedSlot(null);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setNotes('');
    setSuccess(null);
  };

  if (success) {
    return (
      <div className="py-12 md:py-20 bg-[#fff]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <SuccessView booking={success} onReset={handleReset} />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="py-10 md:py-16 bg-[#F5F5F4]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#4f772d] text-sm font-semibold tracking-widest uppercase mb-3">Appointments</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#132a13] mb-3">
              Book Your Visit
            </h1>
            <p className="text-[#273138] text-base md:text-md">
              Select a service, choose your dentist, and pick a time that works for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-[#FAF9F7] border-b border-[#DDD6CE]">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {['Service', 'Dentist', 'Date & Time', 'Your Info'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    i <= step
                      ? 'bg-[#4f772d] text-white'
                      : 'bg-[#DDD6CE] text-[#A89F97]'
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`hidden sm:inline text-xs font-medium ${
                  i <= step ? 'text-[#3A3430]' : 'text-[#A89F97]'
                }`}>
                  {label}
                </span>
                {i < 3 && <div className="hidden sm:block w-8 md:w-16 h-px bg-[#DDD6CE] ml-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <section className="py-10 md:py-16 bg-[#FAF9F7]">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <ServiceSelector value={service} onChange={setService} />
            )}

            {step === 1 && (
              <DentistSelector value={dentist} onChange={setDentist} />
            )}

            {step === 2 && (
              <div className="space-y-8">
                <CalendarPicker
                  value={selectedDate}
                  onChange={(d) => { setSelectedDate(d); setSelectedSlot(null); }}
                  weekStart={weekStart}
                  onWeekChange={(delta) => setWeekStart(addDays(weekStart, delta))}
                />
                {selectedDate && (
                  <TimeSlotGrid
                    slots={availableSlots}
                    value={selectedSlot}
                    onChange={setSelectedSlot}
                    isLoading={loadingSlots}
                  />
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5 max-w-md">
                <div>
                  <label className="block text-sm font-semibold text-[#0F1A20] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-[#DDD6CE] rounded-md bg-white text-[#273138] text-sm focus:outline-none focus:border-[#4f772d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F1A20] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="093 XXX XXXX"
                    className="w-full px-4 py-3 border border-[#DDD6CE] rounded-md bg-white text-[#273138] text-sm focus:outline-none focus:border-[#4f772d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F1A20] mb-1.5">Email (optional)</label>
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-[#DDD6CE] rounded-md bg-white text-[#273138] text-sm focus:outline-none focus:border-[#4f772d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F1A20] mb-1.5">Notes (optional)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific concerns or requests..."
                    rows={3}
                    className="w-full px-4 py-3 border border-[#DDD6CE] rounded-md bg-white text-[#273138] text-sm focus:outline-none focus:border-[#4f772d] transition-colors resize-none"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#DDD6CE]">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-colors ${
                step === 0
                  ? 'text-[#DDD6CE] cursor-not-allowed'
                  : 'text-[#3A3430] hover:bg-[#F1EEE9]'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext()}
              className="px-8 py-2.5 bg-[#4f772d] text-white text-sm font-semibold rounded-md hover:bg-[#132a13] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === 3 ? 'Review & Confirm' : 'Continue'}
            </button>
          </div>
        </div>
      </section>

      <ConfirmationModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirm}
        isSubmitting={createBooking.isPending}
        booking={
          showConfirm
            ? {
                service,
                dentist,
                date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
                timeLabel: selectedSlot?.label || '',
                patient_name: patientName,
              }
            : null
        }
      />
    </div>
  );
}