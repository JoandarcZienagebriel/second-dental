import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, Clock, User, Stethoscope } from 'lucide-react';
import { format } from 'date-fns';

export default function ConfirmationModal({ open, onClose, onConfirm, booking, isSubmitting }) {
  if (!booking) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#FAF9F7] rounded-lg p-6 md:p-8 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-semibold text-[#0F1A20]">Confirm Booking</h3>
              <button onClick={onClose} className="text-[#273138] hover:text-[#273138]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Stethoscope className="w-4 h-4 text-[#4f772d] shrink-0" />
                <span className="text-[#0F1A20]">Service:</span>
                <span className="text-[#273138] font-medium">{booking.service}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-[#4f772d] shrink-0" />
                <span className="text-[#0F1A20]">Dentist:</span>
                <span className="text-[#273138] font-medium">{booking.dentist}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-[#4f772d] shrink-0" />
                <span className="text-[#0F1A20]">Date:</span>
                <span className="text-[#273138] font-medium">
                  {booking.date ? format(new Date(booking.date), 'EEEE, MMMM d, yyyy') : ''}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#4f772d] shrink-0" />
                <span className="text-[#0F1A20]">Time:</span>
                <span className="text-[#273138] font-medium">{booking.timeLabel}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-[#4f772d] shrink-0" />
                <span className="text-[#0F1A20]">Patient:</span>
                <span className="text-[#273138] font-medium">{booking.patient_name}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-[#4f772d] text-[#0F1A20] font-semibold text-sm rounded-md hover:bg-[#F1EEE9] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                disabled={isSubmitting}
                className="flex-1 py-3 bg-[#4f772d] text-white font-semibold text-sm rounded-md hover:bg-[#132a13] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Confirm Booking
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}