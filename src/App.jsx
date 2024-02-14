import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function isActivePlayer(gameBoardPlayer) {
  let activePlayer = "X";
  if (gameBoardPlayer.length && gameBoardPlayer[0].player === "X") {
    activePlayer = "O"
  }
  return activePlayer;
}


function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [playerTurn, setPlayerturn] = useState([]);
  function onSelectSquareBoard(rowIndex, colIndex) {
    // setActivePlayer((initialActivePlayer) => initialActivePlayer === "X" ? "O" : "X");
    setPlayerturn((prevPlayerTurn) => {
      // let currentPlayer = "X";
      // if (prevPlayerTurn.length && prevPlayerTurn[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const currentPlayer = isActivePlayer(prevPlayerTurn);
      const newPlayerTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevPlayerTurn]
      return newPlayerTurn;
    })
  }

  const activePlayer = isActivePlayer(playerTurn);

  return (
    <main>
      <div id="game-container">
        <ul id="players" className="highlight-player">
          <Player intialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player intialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ul>
        <GameBoard onSelectSquare={onSelectSquareBoard} gameTurns={playerTurn} />
      </div>
      <Log gameTurns={playerTurn} />
    </main>
  )
}

export default App
