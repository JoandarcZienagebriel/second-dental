import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { format } from 'date-fns';

const SLOT_DURATION = 30; // minutes
const DAY_START = 8.5; // 8:30 AM
const DAY_END = 18; // 6:00 PM

function generateTimeSlots() {
  const slots = [];
  let current = DAY_START;

  while (current + SLOT_DURATION / 60 <= DAY_END) {
    const startH = Math.floor(current);
    const startM = (current % 1) * 60;

    const endTime = current + SLOT_DURATION / 60;
    const endH = Math.floor(endTime);
    const endM = (endTime % 1) * 60;

    slots.push({
      start: `${String(startH).padStart(2, '0')}:${String(startM).padStart(2, '0')}`,
      end: `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`,
      label: `${startH > 12 ? startH - 12 : startH}:${String(startM).padStart(2, '0')} ${startH >= 12 ? 'PM' : 'AM'}`,
    });

    current = endTime;
  }

  return slots;
}

export const ALL_TIME_SLOTS = generateTimeSlots();

/* -----------------------------
   GET BOOKINGS
------------------------------ */
export function useBookingsForDate(date, dentist) {
  const dateStr = date ? format(date, 'yyyy-MM-dd') : null;

  return useQuery({
    queryKey: ['bookings', dateStr, dentist],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('date', dateStr)
        .eq('dentist', dentist);

      if (error) throw error;
      return data;
    },
    enabled: !!dateStr && !!dentist,
    staleTime: 10000,
  });
}

/* -----------------------------
   CREATE BOOKING
------------------------------ */
export function useCreateBooking() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase
        .from('bookings')
        .insert([data]);

      if (error) throw error;
    },

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}

/* -----------------------------
   AVAILABLE SLOTS
------------------------------ */
export function getAvailableSlots(bookings) {
  if (!bookings) return ALL_TIME_SLOTS;

  const active = bookings.filter((b) => b.status !== 'cancelled');
  const booked = new Set(active.map((b) => b.start_time));

  return ALL_TIME_SLOTS.filter((slot) => !booked.has(slot.start));
}