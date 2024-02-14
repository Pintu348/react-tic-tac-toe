import React from "react"
import PropTypes from "prop-types"

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner.toUpperCase()} is Won!</p> : <p> It&apos;s Draw</p>}
      <button onClick={onRestart}>REMATCH!</button>
    </div>
  )
}

GameOver.propTypes = {
  winner: PropTypes.string,
  onRestart: PropTypes.func.isRequired
}