import { create } from 'zustand';

interface RecurrenceState {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek: number[];
  nthDayOfMonth: number;
  startDate: Date;
  endDate?: Date;
  setRecurrenceType: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setInterval: (interval: number) => void;
  setDaysOfWeek: (days: number[]) => void;
  setNthDayOfMonth: (day: number) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date?: Date) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  daysOfWeek: [],
  nthDayOfMonth: 1,
  startDate: new Date(),
  endDate: new Date(),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
  setNthDayOfMonth: (day) => set({ nthDayOfMonth: day }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
