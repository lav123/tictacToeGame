import React from "react";
function Cross(props) {
  const size = props.size || 100;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 70 70 "
      overflow="visible"
      stroke="black"
      strokeWidth="5"
      strokeLinecap="round"
    >
      <line x2="50" y2="50" />
      <line x1="50" y2="50" />
    </svg>
  );
}

export default Cross;
