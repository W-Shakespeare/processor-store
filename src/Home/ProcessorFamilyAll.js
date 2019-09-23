import React from "react";
import Checkbox from "./Checkbox";

function ProcessorFamilyAll({ liF }) {
  return (
    <div className="processorFamilyAll">
      <Checkbox
        key={3}
        name="Intel Core i3"
        className="processorFamily inp-check"
        onClick={liF}
      />
      <Checkbox
        key={4}
        name="Intel Core i5"
        className="processorFamily inp-check"
        onClick={liF}
      />
      <Checkbox
        key={5}
        name="Intel Core i7"
        className="processorFamily inp-check"
        onClick={liF}
      />
      <Checkbox
        key={6}
        name="Intel Core i9"
        className="processorFamily inp-check"
        onClick={liF}
      />
    </div>
  );
}

export default ProcessorFamilyAll;
