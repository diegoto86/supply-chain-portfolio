import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Projects link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
