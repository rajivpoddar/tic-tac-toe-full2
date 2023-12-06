import React from 'react';

function GameBoard() {
  const grid = Array(9).fill(null);

  return (
    <div className='game-grid' role='grid'>
      {grid.map((value, index) => (
        <div key={index} className='grid-cell' role='gridcell'>
          {value}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;