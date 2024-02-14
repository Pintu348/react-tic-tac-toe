import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Player({ intialName, symbol, isActive }) {
  const [updatedName, setUpdatedName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setUpdatedName(event.target.value);
  }

  let playName = <span className="player-name">{updatedName}</span>;
  let editCaption = "Edit";
  if (isEditing) {
    playName = <input type="text" value={updatedName} onChange={handleChange} required />
    editCaption = "Save"
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editCaption}</button>
    </li>
  );
}

Player.propTypes = {
  intialName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};