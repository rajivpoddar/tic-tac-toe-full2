import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import GameButton from './components/GameButton';
import './index.css';

function App() {
  const [scores, setScores] = useState({ playerX: 0, playerO: 0 });
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);

  const handleCellClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setHistory([...history, { board: newBoard, currentPlayer }]);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleResetBoard = () => {
    setBoard(Array(9).fill(null));
    setHistory([]);
    setCurrentPlayer('X');
  };

  const handlePreviousStep = () => {
    if (history.length === 0) return;
    const previous = history.pop();
    setBoard(previous.board);
    setCurrentPlayer(previous.currentPlayer);
    setHistory(history);
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className='App'>
      <ScoreBoard scores={scores} />
      <GameBoard board={board} onCellClick={handleCellClick} />
      <GameButton onPreviousStep={handlePreviousStep} onResetBoard={handleResetBoard} />
    </div>
  );
}

export default App;
