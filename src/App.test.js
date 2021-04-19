import { render, screen } from '@testing-library/react';
import TestApp from './App';

test('renders learn react link', () => {
  render(<TestApp />);
  const inputElement = screen.getByText(/Имя/i);
  expect(inputElement).toBeInTheDocument();
});
