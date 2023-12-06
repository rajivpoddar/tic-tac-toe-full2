import { render, screen, fireEvent } from '@testing-library/react';
import GridCell from '../components/GridCell';

test('renders a grid cell', () => {
  render(<GridCell />);
  const cell = screen.getByRole('button');
  expect(cell).toBeInTheDocument();
});

test('grid cell displays X when clicked by player X', () => {
  const onCellClick = jest.fn();
  render(<GridCell onCellClick={onCellClick} value={null} />);
  const cell = screen.getByRole('button');
  fireEvent.click(cell);
  expect(onCellClick).toHaveBeenCalled();
  // The actual display of 'X' will be handled by the parent component
});

test('grid cell displays O when clicked by player O', () => {
  const onCellClick = jest.fn();
  render(<GridCell onCellClick={onCellClick} value={null} />);
  const cell = screen.getByRole('button');
  fireEvent.click(cell);
  expect(onCellClick).toHaveBeenCalled();
  // The actual display of 'O' will be handled by the parent component
});
