import { useState } from 'react';
import GameBoard from './components/Gameboard';
import Player from './components/Player';
import Log from './components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('O');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => (activePlayer === 'O' ? 'X' : 'O'));

    setGameTurns((prevGameTurns) => {
      let currentPlayer = 'O';
      if (gameTurns.length && gameTurns[0].player === 'O') {
        currentPlayer = 'X';
      }

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
