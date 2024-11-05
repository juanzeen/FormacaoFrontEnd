import React from "react";
import "./ImcCalc.css";
import Button from "./Button";

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>IMC Calculator</h2>
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="height">Height:</label>
          <input type="text" name="height" id="height" placeholder="Eg: 1.75" />
        </div>
        <div className="form-control">
          <label htmlFor="weight">Weight:</label>
          <input type="text" name="weight" id="weight" placeholder="60kg" />
        </div>
      </div>
      <div className="actions-control">
        <Button id="calc-btn" />
        <Button id="clear-btn"/>
      </div>
    </div>
  );
};

export default ImcCalc;
