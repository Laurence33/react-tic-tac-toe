import { useState } from 'react';
import GameBoard from './components/Gameboard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('O');

  function handlePlayerSwitch() {
    setActivePlayer((activePlayer) => (activePlayer === 'O' ? 'X' : 'O'));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="O" isActive={activePlayer === 'O'} />
          <Player name="Player 2" symbol="X" isActive={activePlayer === 'X'} />
        </ol>
        <GameBoard
          switchPlayer={handlePlayerSwitch}
          activePlayer={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
