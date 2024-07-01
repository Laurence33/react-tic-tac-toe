const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  return (
    <ol id="game-board">
      {board.map((arr, i) => (
        <li key={i}>
          <ol>
            {arr.map((playerIcon, iconIndex) => (
              <li key={iconIndex}>
                <button>{playerIcon}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
