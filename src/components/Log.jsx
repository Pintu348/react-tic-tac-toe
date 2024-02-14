import React from "react";
import PropTypes from "prop-types"
export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
      ))}
    </ol>
  )
}

Log.propTypes = {
  gameTurns: PropTypes.array.isRequired
}