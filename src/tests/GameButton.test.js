import { render, screen, fireEvent } from '@testing-library/react';
import GameButton from '../components/GameButton';

test('renders the previous step button', () => {
  render(<GameButton />);
  const previousStepButton = screen.getByRole('button', { name: /previous step/i });
  expect(previousStepButton).toBeInTheDocument();
});

test('renders the reset board button', () => {
  render(<GameButton />);
  const resetButton = screen.getByRole('button', { name: /reset board/i });
  expect(resetButton).toBeInTheDocument();
});

test('calls the appropriate function when previous step button is clicked', () => {
  const onPreviousStep = jest.fn();
  render(<GameButton onPreviousStep={onPreviousStep} />);
  const previousStepButton = screen.getByRole('button', { name: /previous step/i });
  fireEvent.click(previousStepButton);
  expect(onPreviousStep).toHaveBeenCalled();
});

test('calls the appropriate function when reset board button is clicked', () => {
  const onResetBoard = jest.fn();
  render(<GameButton onResetBoard={onResetBoard} />);
  const resetButton = screen.getByRole('button', { name: /reset board/i });
  fireEvent.click(resetButton);
  expect(onResetBoard).toHaveBeenCalled();
});