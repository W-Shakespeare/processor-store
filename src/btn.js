import React from "react";

function Btn(props) {
  return (
    <div className="Btn">
      <button
        name={props.name}
        onClick={props.onClick}
        className={props.className}
      >
        {props.children}
      </button>
    </div>
  );
}
export default Btn;
