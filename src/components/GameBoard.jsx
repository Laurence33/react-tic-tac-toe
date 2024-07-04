export default function GameBoard({ onSelectSquare, gameBoard }) {
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
