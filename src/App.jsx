import { useState } from 'react';
import GameBoard from './components/Gameboard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';
const PLAYERS = {
  O: 'Player 1',
  X: 'Player 2',
};
const INITIAL_BOARD = [
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

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // there is a winner
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function deriveGameBoard(gameTurns) {
  let gBoard = [...INITIAL_BOARD.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const player = turn.player;
    const { col, row } = turn.square;
    gBoard[row][col] = player;
  }
  return gBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);

  const gBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
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

  function handlePlayerSave(symbol, name) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onPlayerSave={handlePlayerSave}
          />
          <Player
            name={players.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onPlayerSave={handlePlayerSave}
          />
        </ol>
        {winner || hasDraw ? (
          <GameOver winner={winner} restart={handleRestart} />
        ) : (
          ''
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gBoard} />)
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
