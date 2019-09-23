import React from "react";
import Input from "./Input";
import Label from "./Label";

function ComponentSearch({ inpSearch }) {
  return (
    <div className="search">
      <Input
        inpSearch={inpSearch}
        type="text"
        className="inp inp-left-icon inpSearch"
      />
      <Label>Поиск</Label>
    </div>
  );
}

export default ComponentSearch;
