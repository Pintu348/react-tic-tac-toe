import { WINNING_COMBINATIONS } from "../winningCombination";

export function isActivePlayer(gameBoardPlayer) {
  let activePlayer = "X";
  if (gameBoardPlayer.length && gameBoardPlayer[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

export function decideWinner(boardValue, winnerName) {
  let winner;
  for (let combination of WINNING_COMBINATIONS) {
    const firstCombination =
      boardValue[combination[0].row][combination[0].column];
    const secondCombination =
      boardValue[combination[1].row][combination[1].column];
    const thirdCombination =
      boardValue[combination[2].row][combination[2].column];
    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      winner = winnerName[firstCombination];
    }
  }
  return winner;
}

export function derivedGameBoard(boardValue, playerTurn) {
  for (let turn of playerTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    boardValue[row][col] = player;
  }
  return boardValue;
}