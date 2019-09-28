import React from "react";
import Input from "./Input";
import Label from "./Label";

function Search() {
  return (
    <div className="search">
      <Input type="text" className="inp inp-left-icon inpSearch" />
      <Label>Поиск</Label>
    </div>
  );
}

export default Search;
