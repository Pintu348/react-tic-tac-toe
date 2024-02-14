import React from "react";
import PropTypes from 'prop-types';
const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]



export default function GameBoard({ onSelectSquare, gameTurns }) {
  // const [boardvalue, setBoardValue] = useState(intialGameBoard)
  // function handleBtnClick(rowIndex, colIndex) {
  //   setBoardValue((preGameBoard) => {
  //     const newBoardValue = [...preGameBoard.map((innerArray) => [...innerArray])];
  //     newBoardValue[rowIndex][colIndex] = playerSymbol;
  //     return newBoardValue;
  //   })
  //   onSelectSquare();
  // }
  const boardValue = intialGameBoard;
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    boardValue[row][col] = player;
  }

  return (
    <ol id="game-board">
      {boardValue.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ol id="pre-game">
            {row.map((col, colIndex) =>
              <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{col}</button></li>
            )}
          </ol>
        </li>
      )}
    </ol>
  );
}

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  turn: PropTypes.array.isRequired
}