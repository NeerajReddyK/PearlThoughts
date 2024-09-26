import { render, screen } from '@testing-library/react';
import Label from '@/components/miniComponents/Label';
import '@testing-library/jest-dom';

describe('Label Component', () => {
  it('renders the correct label text', () => {
    render(<Label label="Start Date: " htmlFor="startDate"/>);

    // Debug the DOM to inspect what is being rendered
    screen.debug();

    expect(screen.getByText("Start Date:")).toBeInTheDocument();
  });
});
