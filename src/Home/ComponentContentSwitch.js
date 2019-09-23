import React from "react";
import Switch from "./Switch";
import DivSelect from "./DivSelect";

function ComponentContentSwitch({ algorithm, selectCheck }) {
  return (
    <div className="content-switch">
      <Switch algorithm={algorithm} />
      <DivSelect selectCheck={selectCheck} />
    </div>
  );
}

export default ComponentContentSwitch;
