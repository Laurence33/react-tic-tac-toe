export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => {
        return (
          <li
            key={`${turn.square.row},${turn.square.col}`}
            className={index === 0 ? 'highlighted' : undefined}
          >
            Player {turn.player}, selected {turn.square.row},{turn.square.col}.
          </li>
        );
      })}
    </ol>
  );
}
