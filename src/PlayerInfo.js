import React from "react";
import "./PlayerInfo.css";
function PlayerInfo(props) {
  return (
    <div className="playerInfo">
      {props.winner && <h1>Winner : {props.winner}</h1>}
    </div>
  );
}

export default PlayerInfo;
