import React from "react";

function DivSelect({ selectCheck }) {
  return (
    <div className="right-div-column-select">
      <p className="p-select">Сортировка</p>
      <select className="select-1" onClick={selectCheck}>
        <option className="select-option" value="0">
          --
        </option>
        <option className="select-option" value="1">
          от дешевых к дорогим
        </option>
        <option className="select-option" value="2">
          от дорогих к дешевым
        </option>
      </select>
    </div>
  );
}

export default DivSelect;
