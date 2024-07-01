import { useState } from 'react';
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameVal, setNameVal] = useState(name);

  function editPlayer() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(e) {
    setNameVal(e.target.value);
  }

  let playerName = <span className="player-name">{nameVal}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" value={nameVal} onChange={handleNameChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
