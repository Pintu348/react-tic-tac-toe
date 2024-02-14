import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { derivedGameBoard, isActivePlayer, decideWinner } from "./components/common";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYER = {
  "X": "PLAYER 1",
  "O": "PLAYER 2"
}


function App() {
  function onSelectSquareBoard(rowIndex, colIndex) {
    setPlayerTurn((prevPlayerTurn) => {
      const currentPlayer = isActivePlayer(prevPlayerTurn);
      const newPlayerTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevPlayerTurn,
      ];
      return newPlayerTurn;
    });
  }

  function handleRestart() {
    setPlayerTurn(() => []);
  }

  function onChangePlayerName(changedPlayerName, playerSymbol) {
    setWinnerName((prevPlayerName) => {
      const newPlayerName = {
        ...prevPlayerName,
        [playerSymbol]: changedPlayerName,
      };
      return newPlayerName;
    });
  }
  const [winnerName, setWinnerName] = useState(PLAYER);
  const [playerTurn, setPlayerTurn] = useState([]);
  const boardValue = derivedGameBoard([...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])], playerTurn);
  const winner = decideWinner(boardValue, winnerName);
  const activePlayer = isActivePlayer(playerTurn);
  const hasDraw = playerTurn.length === 9;

  return (
    <main>
      <div id='game-container'>
        <ul id='players' className='highlight-player'>
          <Player
            intialName={PLAYER.X}
            symbol='X'
            isActive={activePlayer === "X"}
            onChangeName={onChangePlayerName}
          />
          <Player
            intialName={PLAYER.O}
            symbol='O'
            isActive={activePlayer === "O"}
            onChangeName={onChangePlayerName}
          />
        </ul>
        <GameBoard
          onSelectSquare={onSelectSquareBoard}
          gameBoard={boardValue}
        />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
      </div>
      <Log gameTurns={playerTurn} />
    </main>
  );
}

export default App;
