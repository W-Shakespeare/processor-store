import React from "react";
//import { Link } from "react-router-dom";
import OneProcessor from "./OneProcessor";

function ComponentOneProcessorAll({ result, ShoppingСart, res }) {
  console.log(result);
  console.log(res);
  return (
    <div className="oneProcessor-all">
      {result.map((item, i) => {
        return <OneProcessor item={item} ShoppingСart={ShoppingСart} />;
      })}
    </div>
  );
}

export default ComponentOneProcessorAll;
