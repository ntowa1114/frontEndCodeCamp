const { useState } = React;
const lines=[[0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
  [0, 4, 8], [2, 4, 6]];

export function Board() {
  const [squares, setSquares] =useState();
  const [xIsNext, setxIsNext] = useState(true);

  const clickButton=()=>{
    setxIsNext(!xIsNext)
  }
  return(
    <div>
      <div>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div>
        <label>next player: {xIsNext?"X":"O"}</label>
      </div>
      <div className="board">
        <div className="line1">
          <button className="square" >　</button>
          <button className="square">　</button>
          <button className="square">　</button>
        </div>
        <div className="line2">
          <button className="square">　</button>
          <button className="square">　</button>
          <button className="square">　</button>
        </div>
        <div className="line3">
        <button className="square">　</button>
          <button className="square">　</button>
          <button className="square">　</button>
        </div>
      </div>
      <button>Reset Game</button>
    </div>
  );
}