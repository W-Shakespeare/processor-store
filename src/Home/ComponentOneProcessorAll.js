import React from "react";
import OneProcessor from "./OneProcessor";

function ComponentOneProcessorAll({ result, res }) {
  return (
    <div className="oneProcessor-all">
      {result.map((item, i) => {
        return <OneProcessor item={item} />;
      })}
    </div>
  );
}

export default ComponentOneProcessorAll;
