import React from "react";
import Checkbox from "./Checkbox";

function ManufactotALL({ liF }) {
  return (
    <div className="manufactotALL" id="swo">
      <Checkbox
        key={1}
        name="Intel"
        className="processor inp-check"
        onClick={liF}
      />
      <Checkbox
        key={2}
        name="AMD"
        className="processor inp-check"
        onClick={liF}
      />
    </div>
  );
}

export default ManufactotALL;
