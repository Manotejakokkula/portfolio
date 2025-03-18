import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects Component', () => {
  test('renders project cards', () => {
    render(<Projects />);
    expect(screen.getByText(/e-commerce platform/i)).toBeInTheDocument();
    expect(screen.getByText(/task management app/i)).toBeInTheDocument();
    expect(screen.getByText(/weather dashboard/i)).toBeInTheDocument();
  });

  test('renders project links', () => {
    render(<Projects />);
    const codeLinks = screen.getAllByText(/code/i);
    const demoLinks = screen.getAllByText(/live demo/i);
    
    expect(codeLinks).toHaveLength(3);
    expect(demoLinks).toHaveLength(3);
  });
});