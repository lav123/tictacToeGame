import React from "react";
import Cross from "./Cross";
import "./Grid.css";
import Circle from "./Circle";
const renderSVG = (svg) => {
  if (svg === "cross") {
    return <Cross size={40} />;
  } else if (svg === "circle") {
    return <Circle size={40} />;
  }
};
function Grid(props) {
  const division = props.position.map((val, index) => {
    const iswinnerIndex = props.winnerIndex.includes(index);
    return (
      <div
        className={iswinnerIndex ? "winner" : null}
        key={index}
        onClick={() => {
          props.setPosition(index);
        }}
      >
        {renderSVG(val)}
      </div>
    );
  });
  return <div className="gridContainer">{division}</div>;
}

export default Grid;
