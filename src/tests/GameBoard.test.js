import { render, screen } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

test('renders the game board with 3x3 grid', () => {
  render(<GameBoard />);
  const grid = screen.getAllByRole('gridcell');
  expect(grid.length).toBe(9);
});

test('game board grid cells are empty initially', () => {
  render(<GameBoard />);
  const gridCells = screen.getAllByRole('gridcell');
  gridCells.forEach(cell => {
    expect(cell).toHaveTextContent('');
  });
});
