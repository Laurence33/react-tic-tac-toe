import { useState } from 'react';
import GameBoard from './components/Gameboard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function getActivePlayer(gameTurns) {
  let activePlayer = 'O';
  if (gameTurns.length && gameTurns[0].player === 'O') {
    activePlayer = 'X';
  }
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);

  let gBoard = initialBoard;
  for (const turn of gameTurns) {
    const player = turn.player;
    const { col, row } = turn.square;
    gBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // there is a winner
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let currentPlayer = getActivePlayer(prevGameTurns);

      const newGameTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevGameTurns,
      ];

      return newGameTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="O" isActive={activePlayer === 'O'} />
          <Player name="Player 2" symbol="X" isActive={activePlayer === 'X'} />
        </ol>
        {winner ? <h2>Player {winner} wins!</h2> : ''}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gBoard} />)
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
