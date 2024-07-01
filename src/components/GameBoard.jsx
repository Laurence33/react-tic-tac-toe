import { useState } from 'react';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleBtnClick(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] === null) {
      setGameBoard((prevGameBoard) => {
        const newGameBoard = Object.assign([], prevGameBoard);
        newGameBoard[rowIndex][colIndex] = 'X';
        console.log(newGameBoard);
        return newGameBoard;
      });
    }
  }
  return (
    <ol id="game-board">
      {gameBoard.map((arr, i) => (
        <li key={i}>
          <ol>
            {arr.map((playerIcon, iconIndex) => (
              <li key={iconIndex}>
                <button onClick={() => handleBtnClick(i, iconIndex)}>
                  {playerIcon}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
