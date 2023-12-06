import React from 'react';

function GameButton({ onPreviousStep, onResetBoard }) {
  return (
    <div className='buttons'>
      <button className='btn' onClick={onPreviousStep}>Previous Step</button>
      <button className='btn' onClick={onResetBoard}>Reset Board</button>
    </div>
  );
}

export default GameButton;
