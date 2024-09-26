import { useRecurrenceStore } from '../store/recurrenceStore';
import Label from './miniComponents/Label';

export const RecurrenceOptions = () => {
  const { recurrenceType, interval, setRecurrenceType, setInterval } = useRecurrenceStore();

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Label label = "Recurrence Type: " htmlFor="recurrence"/>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value as any)}
          className="border p-2 rounded-md w-full"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        {/* <label className="block mb-2">Interval (Every X {recurrenceType}):</label> */}
        <Label label={`Interval (Every X ${recurrenceType}):`} htmlFor="intervalRecurrence" />
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value, 10))}
          className="border p-2 rounded-md w-full"
        />
      </div>
    </div>
  );
};
