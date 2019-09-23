import React from "react";

function Input({ type, className, id, inpSearch }) {
  return (
    <input type={type} className={className} id={id} onChange={inpSearch} />
  );
}

export default Input;
