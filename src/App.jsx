import { useState } from 'react';
import GameBoard from './components/Gameboard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
