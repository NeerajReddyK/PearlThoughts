"use client"

import { RecurrenceOptions } from './RecurrenceOptions';
import { MiniCalendar } from './MiniCalendar';
import { useRecurrenceStore } from '../store/recurrenceStore';
import Label  from './miniComponents/Label';
import Input from './miniComponents/Input';

export const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="flex justify-center items-center">
      <div className="p-10 bg-white shadow-md rounded-lg w-full md:w-2/3 lg:w-1/2 h-full items-center">
        <h2 className="text-xl font-bold mb-4">Select Recurrence</h2>

        <RecurrenceOptions />

        <div className="mt-4">
          <Label label = "Start Date: " htmlFor="startDate"/>
          <Input 
            type="date"
            value={startDate.toISOString().substring(0, 10)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            id="startDate"
          />
        </div>

        <div className="mt-4">
          <Label label="End Date (optional): " htmlFor="endDate" />
          <Input
            type="date"
            value={endDate ? endDate.toISOString().substring(0, 10) : ''}
            onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : undefined)}
            id="endDate"
          />
        </div>

        <MiniCalendar />

      </div>
    </div>
    
  );
};
