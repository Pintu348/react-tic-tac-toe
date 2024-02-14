import React from "react";
import PropTypes from "prop-types";
export default function GameBoard({ onSelectSquare, gameBoard }) {
  // const [boardvalue, setBoardValue] = useState(intialGameBoard)
  // function handleBtnClick(rowIndex, colIndex) {
  //   setBoardValue((preGameBoard) => {
  //     const newBoardValue = [...preGameBoard.map((innerArray) => [...innerArray])];
  //     newBoardValue[rowIndex][colIndex] = playerSymbol;
  //     return newBoardValue;
  //   })
  //   onSelectSquare();
  // }


  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol id='pre-game'>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  gameBoard: PropTypes.array.isRequired,
};
