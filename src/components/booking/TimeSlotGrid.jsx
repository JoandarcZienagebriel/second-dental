import React from 'react';
import { Clock } from 'lucide-react';

export default function TimeSlotGrid({ slots, value, onChange, isLoading }) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-6 h-6 border-2 border-[#DDD6CE] border-t-[#1E3A8A] rounded-full animate-spin" />
      </div>
    );
  }

  if (!slots || slots.length === 0) {
    return (
      <div className="text-center py-10">
        <Clock className="w-8 h-8 text-[#DDD6CE] mx-auto mb-2" />
        <p className="text-sm text-[#A89F97]">No available slots for this date</p>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-[#0F1A20] mb-3">
        Available Times ({slots.length} slots)
      </label>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-64 overflow-y-auto hide-scrollbar">
        {slots.map((slot) => (
          <button
            key={slot.start}
            type="button"
            onClick={() => onChange(slot)}
            className={`py-2.5 px-2 rounded-md border text-sm font-medium transition-all ${
              value?.start === slot.start
                ? 'border-[#4f772d] bg-[#4f772d] text-white'
                : 'border-[#000] text-[#273138] hover:border-[#4f772d]'
            }`}
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
}