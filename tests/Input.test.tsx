import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/miniComponents/Input';
import '@testing-library/jest-dom';

describe('Input Component', () => {
  it('renders the input with the correct type and value', () => {
    // Render the Input component with type="text" and a specific value
    render(<Input type="text" value="Test Value" onChange={() => {}} id="test-input"/>);
    
    // Find the input field
    const inputElement = screen.getByDisplayValue('Test Value');
    
    // Check if the input is in the document and has the correct type
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });
  it('calls onChange when the input value changes', () => {
    // Mock the onChange function
    const handleChange = jest.fn();

    // Render the Input component
    render(<Input type="text" value="" onChange={handleChange} id="test-input"/>);

    // Find the input field
    const inputElement = screen.getByRole('textbox');

    // Simulate a change event (user typing)
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    // Ensure the onChange handler was called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});