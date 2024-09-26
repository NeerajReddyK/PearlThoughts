import { useRecurrenceStore } from '../store/recurrenceStore';

export const MiniCalendar = () => {
  const { startDate, endDate, recurrenceType, interval } = useRecurrenceStore();

  const generateRecurringDates = () => {
    const dates = [];
    let currentDate = new Date(startDate);
    while (!endDate || currentDate <= endDate) {
      dates.push(new Date(currentDate));
      switch (recurrenceType) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + interval);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + 7 * interval);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + interval);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + interval);
          break;
      }
    }
    return dates;
  };

  const dates = generateRecurringDates();

  return (
    <div className="mt-4 p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-2">Recurring Dates Preview</h3>
      <ul className="list-disc list-inside">
        {dates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};
