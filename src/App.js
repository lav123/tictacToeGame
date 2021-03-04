import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import PlayerInfo from "./PlayerInfo";

function App() {
  const [state, setState] = useState({
    winner: {
      name: undefined,
      indexes: [],
    },
    turn: "cross",
    position: new Array(9).fill(null),
  });
  return (
    <React.Fragment>
      <div className="app">
        <Grid
          winnerIndex={state.winner.indexes}
          position={state.position}
          setPosition={(index) => {
            setState((prevData) => {
              if (!prevData.position[index] && !prevData.winner.name) {
                const data = { ...prevData };
                data.position[index] = state.turn;
                const lines = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6],
                ];
                lines.forEach((line) => {
                  const [a, b, c] = line;
                  if (
                    data.position[a] &&
                    data.position[a] === data.position[b] &&
                    data.position[b] === data.position[c]
                  ) {
                    data.winner.name = data.turn;
                    data.winner.indexes = line;
                  }
                });
                data.turn = data.turn === "cross" ? "circle" : "cross";
                return data;
              } else {
                return prevData;
              }
            });
          }}
        />
      </div>
      <PlayerInfo winner={state.winner.name} />
    </React.Fragment>
  );
}

export default App;
