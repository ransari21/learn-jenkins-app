import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          buildNumber: 24,
          status: 'SUCCESS',
          duration: 7500,
          artifact: 'deployment-package.zip',
          url: 'http://localhost:8081/job/learn-jenkins-app/24/',
        }),
    })
  );
});

test('renders CI/CD dashboard heading', () => {
  render(<App />);
  expect(screen.getByText(/CI\/CD Pipeline Automation/i)).toBeInTheDocument();
});

test('renders Jenkins workflow stage', () => {
  render(<App />);
  expect(screen.getByText('Checkout')).toBeInTheDocument();
});