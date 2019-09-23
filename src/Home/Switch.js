import React from "react";
import Label from "./Label";
import Input from "./Input";
import ManufactotALL from "./ManufactotALL";
import ProcessorFamilyAll from "./ProcessorFamilyAll";
import NumberOfCoresAll from "./NumberOfCoresAll";

function Switch({ algorithm }) {
  return (
    <div className="switch" id="swi">
      <div className="switch-item">
        <Label className="manufactor" forr="check-manufactor">
          Производители
        </Label>
      </div>
      <Input type="checkbox" id="check-manufactor" />
      <ManufactotALL liF={algorithm} />
      <br />
      <div className="switch-item">
        <Label className="processorFamily" forr="check-processorFamily">
          Семейство процесора
        </Label>
      </div>
      <Input type="checkbox" id="check-processorFamily" />
      <ProcessorFamilyAll liF={algorithm} />
      <br />
      <div className="switch-item">
        <Label className="numberOfCores" forr="check-numberOfCores">
          Количество ядер
        </Label>
      </div>
      <Input type="checkbox" id="check-numberOfCores" />
      <NumberOfCoresAll liF={algorithm} />
    </div>
  );
}

export default Switch;
