import React from "react";

function Checkbox({ className, name, onClick }) {
  return (
    <div className="column-div-inp-chk div-oth">
      <h3 className="title-input">{name}</h3>
      <label value={name} className="label-check label-all">
        <input
          className="inp-check"
          type="checkbox"
          className={className}
          type="checkbox"
          id={name}
          onClick={onClick}
          value={name}
        />
        <svg
          className="icon-check"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49373 0.758435C8.83831 0.413855 9.39698 0.413855 9.74156 0.758435C10.0861 1.10302 10.0861 1.66169 9.74156 2.00627L4.44745 7.30039C4.10287 7.64497 3.54419 7.64497 3.19961 7.30039L0.258435 4.35921C-0.0861451 4.01463 -0.0861451 3.45596 0.258435 3.11138C0.603015 2.7668 1.16169 2.7668 1.50627 3.11138L3.82353 5.42863L8.49373 0.758435Z"
            fill="#298552"
          />
        </svg>
        <span className="span-check" />
      </label>
    </div>
  );
}
export default Checkbox;
