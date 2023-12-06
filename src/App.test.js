import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the game board', () => {
  render(<App />);
  const gameBoard = screen.getByRole('grid');
  expect(gameBoard).toBeInTheDocument();
});

test('renders the score board', () => {
  render(<App />);
  const scoreBoard = screen.getByText(/player x/i);
  expect(scoreBoard).toBeInTheDocument();
});

test('renders the reset button', () => {
  render(<App />);
  const resetButton = screen.getByRole('button', { name: /reset board/i });
  expect(resetButton).toBeInTheDocument();
});

test('renders the previous step button', () => {
  render(<App />);
  const previousStepButton = screen.getByRole('button', { name: /previous step/i });
  expect(previousStepButton).toBeInTheDocument();
});