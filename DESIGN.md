# Design Document for Tic-Tac-Toe Game

## Architecture
- The application will be built using ReactJS.
- The app will be structured into functional components.

## Component Structure
- App: The main component that renders the game board and other UI elements.
- GameBoard: A component that displays the 3x3 grid.
- GridCell: A component for each cell in the game board.
- ScoreBoard: A component to display the players' scores.
- GameButton: A component for the 'Previous Step' and 'Reset Board' buttons.

## State Management
- The App component will maintain the state of the game, including the current board state, player turns, and scores.
- State will be managed using React's useState hook to ensure unidirectional data flow.
- The GameBoard component will receive the board state and player turn as props from the App component.
- The ScoreBoard component will receive the players' scores as props.
- The GameButton components will receive callback functions as props to handle undo and reset actions.