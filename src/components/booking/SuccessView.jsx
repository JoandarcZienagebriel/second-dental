import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, User, Phone } from 'lucide-react';
import { format } from 'date-fns';

export default function SuccessView({ booking, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-lg mx-auto text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.1 }}
      >
        <CheckCircle className="w-16 h-16 text-[#273138] mx-auto mb-4" />
      </motion.div>

      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#0F1A20] mb-2">
        Booking Confirmed!
      </h2>
      <p className="text-[#273138] mb-8">
        Your appointment has been successfully booked. We look forward to seeing you!
      </p>

      <div className="bg-[#F1EEE9] rounded-lg p-6 text-left space-y-3 mb-8">
        <div className="flex items-center gap-3 text-sm">
          <Calendar className="w-4 h-4 text-[#1E3A8A]" />
          <span className="text-[#273138] font-medium">
            {booking.date ? format(new Date(booking.date), 'EEEE, MMMM d, yyyy') : ''}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Clock className="w-4 h-4 text-[#273138]" />
          <span className="text-[#0F1A20] font-medium">{booking.timeLabel}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <User className="w-4 h-4 text-[#273138]" />
          <span className="text-[#0F1A20] font-medium">{booking.dentist}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#24a89a] transition-colors rounded-md"
        >
          Book Another Appointment
        </button>
        <Link
          to="/"
          className="px-6 py-3 border border-[#DDD6CE] text-[#0F1A20] font-semibold text-sm hover:bg-[#F1EEE9] transition-colors rounded-md"
        >
          Return Home
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-[#DDD6CE]">
        <p className="text-xs text-[#A89F97]">
          Need to change your appointment? Call us at{' '}
          <a href="tel:0936495034" className="text-[#1E3A8A] font-medium">093 649 5034</a>
        </p>
      </div>
    </motion.div>
  );
}