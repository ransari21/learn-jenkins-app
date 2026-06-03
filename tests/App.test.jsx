import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

test('renders CI/CD dashboard heading', () => {
  render(<App />);
  expect(screen.getByText(/CI\/CD Pipeline Automation Dashboard/i)).toBeInTheDocument();
});

test('renders Jenkins workflow stage', () => {
  render(<App />);
  expect(screen.getByText('Dockerize')).toBeInTheDocument();
});
