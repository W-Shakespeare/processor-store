import React from "react";
import Checkbox from "./Checkbox";

function NumberOfCoresAll({ liF }) {
  return (
    <div className="numberOfCoresAll">
      <Checkbox key={7} name="2" className="yadro inp-check" onClick={liF} />
      <Checkbox key={8} name="4" className="yadro inp-check" onClick={liF} />
      <Checkbox key={9} name="6" className="yadro inp-check" onClick={liF} />
      <Checkbox key={10} name="8" className="yadro inp-check" onClick={liF} />
    </div>
  );
}

export default NumberOfCoresAll;
