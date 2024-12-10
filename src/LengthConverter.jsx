import React, { useState } from "react";
import { calculateLength } from "./helpers";

const LengthConverter = () => {
  const [fromLength, setFromLength] = useState("cm");
  const [toLength, setToLength] = useState("inch");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  // const calculateLength = (from, to, ipValue) => {
  //   if (from == "cm" && to == "m") {
  //     return ipValue / 100;
  //   }

  //   if (from == "m" && to == "cm") {
  //     return ipValue * 100;
  //   }
  // };

  const handleLengthCalculation = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);

    // TAKE THE INPUT
    const value = e.target.value;
   
    let outputValue = calculateLength(fromLength, toLength, value);

    // CALCULATE THE OUTPUT BASED ON FROM AND TO
    setResult(outputValue);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Length Converter <span><i class="fa-solid fa-ruler"></i></span></h2>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <select
              onChange={(e) => {
                setFromLength(e.target.value);
                let outputValue = calculateLength(
                  e.target.value,
                  toLength,
                  inputValue
                );

                // CALCULATE THE OUTPUT BASED ON FROM AND TO
                setResult(outputValue);
              }}
              defaultValue={fromLength}
            >
              <option value={"km"}>KiloMeter</option>
              <option value={"m"}>Meter</option>
              <option value={"feet"}>Feet</option>
              <option value={"inch"}>inch</option>
              <option value={"cm"} selected>
                Centimeter
              </option>
              <option value={"mm"}>Milimeter</option>
              <option value={"nm"}>NanoMeter</option>

            </select>
            <input
              type="number"
              id="from"
              className="form-control"
              placeholder="Enter Value"
              value={inputValue}
              onChange={handleLengthCalculation}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <select
              onChange={(e) => {
                setToLength(e.target.value);
                let outputValue = calculateLength(
                  fromLength,
                  e.target.value,
                  inputValue
                );

                // CALCULATE THE OUTPUT BASED ON FROM AND TO
                setResult(outputValue);
              }}
              defaultValue={toLength}
            >
              <option value={"km"}>KiloMeter</option>
              <option value={"m"}>Meter</option>
              <option value={"feet"}>Feet</option>
              <option value={"inch"}>inch</option>
              <option value={"cm"} selected>
                Centimeter
              </option>
              <option value={"mm"}>Milimeter</option>
              <option value={"nm"}>NanoMeter</option>
            </select>
            <input
              type="number"
              id="to"
              className="form-control"
              placeholder="Enter value"
              readOnly
              value={result}
            />
          </div>
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              alert("HERE");
              setInputValue("");
              setResult("");
            }}
          >
            <i className="bi bi-x-circle me-2"></i>Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LengthConverter;
