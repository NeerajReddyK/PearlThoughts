import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DatePicker } from '@/components/DatePicker';
import { useRecurrenceStore } from '@/store/recurrenceStore';

// Mock Zustand store using setState
const mockZustandStore = (newState: Partial<ReturnType<typeof useRecurrenceStore.getState>>) => {
  useRecurrenceStore.setState(newState);
};

describe('DatePicker Component', () => {
  beforeEach(() => {
    // Mock initial state for Zustand store
    mockZustandStore({
      startDate: new Date('2023-09-01'),
      endDate: new Date('2023-09-30'),
      setStartDate: jest.fn(),
      setEndDate: jest.fn(),
    });
  });

  it('should render correctly', () => {
    render(<DatePicker />);

    // Check if the title renders
    expect(screen.getByText('Select Recurrence')).toBeInTheDocument();

    // Check if the start date and end date input fields render correctly
    expect(screen.getByLabelText('Start Date:')).toHaveValue('2023-09-01');
    expect(screen.getByLabelText('End Date (optional):')).toHaveValue('2023-09-30');
  });

  it('should call setStartDate when the start date is changed', () => {
    const setStartDateMock = useRecurrenceStore.getState().setStartDate;
    render(<DatePicker />);

    // Simulate changing the start date
    const startDateInput = screen.getByLabelText('Start Date:');
    fireEvent.change(startDateInput, { target: { value: '2023-09-10' } });

    // Expect setStartDate to be called with the new date
    expect(setStartDateMock).toHaveBeenCalledWith(new Date('2023-09-10'));
  });

  it('should call setEndDate when the end date is changed', () => {
    const setEndDateMock = useRecurrenceStore.getState().setEndDate;
    render(<DatePicker />);

    // Simulate changing the end date
    const endDateInput = screen.getByLabelText("End Date (optional):");
    fireEvent.change(endDateInput, { target: { value: '2023-10-01' } });

    // Expect setEndDate to be called with the new date
    expect(setEndDateMock).toHaveBeenCalledWith(new Date('2023-10-01'));
  });

});
