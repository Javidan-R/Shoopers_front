import { render, screen } from '@testing-library/react';
import Login from '../../pages/auth/Login';

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
});
