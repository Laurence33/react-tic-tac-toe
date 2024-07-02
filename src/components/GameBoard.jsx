const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialBoard;
  for (const turn of turns) {
    const player = turn.player;
    const { col, row } = turn.square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((arr, i) => (
        <li key={i}>
          <ol>
            {arr.map((playerIcon, iconIndex) => (
              <li key={iconIndex}>
                <button
                  onClick={() => onSelectSquare(i, iconIndex)}
                  disabled={playerIcon !== null}
                >
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
