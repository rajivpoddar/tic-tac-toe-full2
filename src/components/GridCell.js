import React from 'react';

function GridCell({ onCellClick, value }) {
  const handleClick = () => {
    if (value === null) {
      onCellClick();
    }
  };

  return (
    <button className='grid-cell' onClick={handleClick} role='button'>
      {value}
    </button>
  );
}

export default GridCell;
