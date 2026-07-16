import React from 'react';
import { format, addDays, isSameDay, isAfter, startOfToday, isSunday } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPicker({ value, onChange, weekStart, onWeekChange }) {
  const today = startOfToday();
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <div>
      <label className="block text-md xl:text-lg font-semibold text-[#0F1A20] mb-5">Select a Date</label>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => onWeekChange(-7)}
          className="p-1.5 rounded-md hover:bg-[#1E3A8A] text-[#273138]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-[#273138]">
          {format(days[0], 'MMM d')} – {format(days[6], 'MMM d, yyyy')}
        </span>
        <button
          type="button"
          onClick={() => onWeekChange(7)}
          className="p-1.5 rounded-md hover:bg-[#F1EEE9] text-[#273138]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day) => {
          const past = !isAfter(day, today) && !isSameDay(day, today);
          const sunday = isSunday(day);
          const disabled = past || sunday;
          const selected = value && isSameDay(day, value);
          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onChange(day)}
              className={`flex flex-col items-center py-2 px-1 rounded-md text-center transition-all ${
                selected
                  ? 'bg-[#4f772d] text-white'
                  : disabled
                  ? 'text-[#273138] cursor-not-allowed'
                  : 'text-[#273138] hover:bg-[#F1EEE9]'
              }`}
            >
              <span className="text-[10px] font-medium uppercase">{format(day, 'EEE')}</span>
              <span className="text-lg font-semibold">{format(day, 'd')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}