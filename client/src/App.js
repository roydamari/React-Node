import React, { useState } from 'react';
import './App.css';
import Board from './Components/board'
import PrevButton from './Components/prevButton';
import Header from './Components/header';
import FormDialog from './Components/formDialog';

function App() {

  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [xo, setXO] = useState("X");
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState([]);


  function updateBoard(index) {
    if (win) return;
    if (board[index[0]][index[1]] !== "") return;
    let assignBoard = board.map(x => x);
    assignBoard[index[0]][index[1]] = xo;
    let prevMoves = moves.map(x => x);
    prevMoves.push([xo, index[0], index[1]]);
    setMoves(prevMoves);
    setBoard(assignBoard);
    setXO(xo === "X" ? "O" : "X");
    checkWin();
  }

  function checkWin() {
    board.forEach((row, i) => {
      if (row.every(cell => (cell === row[0] && cell !== ""))) {
        setWin(true);

      }
    })
    for (let index = 0; index < 3; index++) {
      const cell = board[0][index];
      if (cell === board[1][index] && cell === board[2][index] && cell !== "") {
        setWin(true);

      }
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== "") {
      setWin(true);

    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== "") {
      setWin(true);

    }
  }

  function revertBack(e) {
    let newBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
    for (let index = 0; index <= e.currentTarget.value; index++) {
      newBoard[moves[index][1]][moves[index][2]] = moves[index][0];
    }
    let newMoves = moves.filter((x, i) => {
      if (i <= e.currentTarget.value) return x;
    });
    setMoves(newMoves);
    setBoard(newBoard);
    setWin(false);
    setXO(newMoves[newMoves.length - 1][0] === "X" ? "O" : "X")
  }

  function resetBoard() {
    let cleanBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
    setBoard(cleanBoard);
    setXO("X");
    setWin(false);
    setMoves([]);
  }

  return (
    <React.Fragment>
      <div className="container">
        <Header turn={xo} win={win} onReset={resetBoard} />
      </div>
      <Board board={board} onUpdate={updateBoard} />
      {win && <FormDialog />}
      <PrevButton moves={moves} onRevert={revertBack} />
    </React.Fragment>
  );
}

export default App;
