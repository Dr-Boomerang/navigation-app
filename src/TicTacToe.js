import React from 'react';
import { useGlobal } from 'reactn';

import './game.css';

// Questions to Itai:
// not sure if it makes sense to do a function outside the function

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board (props) {
  function renderSquare(i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}


// Why did itai say we don't need render props?
// do a quick experiment with this and see where does it lead you to



function Game ()  {  

  // does the change in the history naming makes sense.
  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
    setHistory(newHistory.concat([
      {
        squares: squares
      }
    ])); 
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  
  // Those are the variables that I want to turn global
  const [history, setHistory] = useGlobal('history');  
  const [stepNumber, setStepNumber] = useGlobal('stepNumber');
  const [xIsNext, setXIsNext] = useGlobal('xIsNext');

  // Why is it being printed twice?
  // Figure out how the next bug was introduced.
  
  // The current refers to the current board:
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

export default Game;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
