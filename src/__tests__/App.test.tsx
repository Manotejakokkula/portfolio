import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders main navigation elements', () => {
  render(<App />);
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
  expect(screen.getByText(/skills/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});