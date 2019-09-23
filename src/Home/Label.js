import React from "react";

function Label({ className, children, forr }) {
  return (
    <label className={className} htmlFor={forr}>
      {children}
    </label>
  );
}

export default Label;
