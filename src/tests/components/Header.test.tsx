import { render, screen } from '@testing-library/react';
import Header from '../../components/layout/Header';

test('renders header with navigation links', () => {
  render(<Header />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Profile/i)).toBeInTheDocument();
});
