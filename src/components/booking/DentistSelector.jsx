import React from 'react';
import { IMAGES } from '@/lib/images';

const DENTISTS = [
  { name: 'Dr. Abebe Tadesse', title: 'Lead Dentist', image: IMAGES.dentist1 },
  { name: 'Dr. Selam Bekele', title: 'Cosmetic Specialist', image: IMAGES.dentist2 },
];

export default function DentistSelector({ value, onChange }) {
  return (
    <div>
      <label className="block text-md xl:text-lg font-semibold text-[#0F1A20] mb-5">Choose Your Dentist</label>
      <div className="grid grid-cols-2 gap-3">
        {DENTISTS.map((d) => (
          <button
            key={d.name}
            type="button"
            onClick={() => onChange(d.name)}
            className={`p-3 md:p-6 rounded-md border transition-all text-center text-sm xl:text-[1.1rem] lg:p-12 ${
              value === d.name
                ? 'border-[#355097] bg-[#4f772d] text-[#fff]'
                : 'border-[#000] text-[#273138] hover:border-[#4f772d]'
            }`}
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto mb-2"
            />
            <p className="font-medium text-sm xl:text-[1.1rem]">{d.name}</p>
            <p className="text-xs md:text-sm">{d.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}