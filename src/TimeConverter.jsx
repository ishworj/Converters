import React, { useState } from "react";
import { calculateTime } from "./helpers";

const TimeConverter = () => {
  const [fromTime, setFromTime] = useState("hr");
  const [toTime, setToTime] = useState("min");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const outputValue = calculateTime(fromTime, toTime, value);
      setResult(outputValue);
    } else {
      setResult("");
    }
  };

  const handleFromTimeChange = (e) => {
    const newFromTime = e.target.value;
    setFromTime(newFromTime);
    if (inputValue) {
      const outputValue = calculateTime(newFromTime, toTime, inputValue);
      setResult(outputValue);
    }
  };

  const handleToTimeChange = (e) => {
    const newToTime = e.target.value;
    setToTime(newToTime);
    if (inputValue) {
      const outputValue = calculateTime(fromTime, newToTime, inputValue);
      setResult(outputValue);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Time Converter <span><i class="fa-solid fa-clock"></i></span></h2>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <select
              className="form-control"
              value={fromTime}
              onChange={handleFromTimeChange}
            >
              <option value="week">Week</option>
              <option value="day">Day</option>
              <option value="hr">Hour</option>
              <option value="min">Minute</option>
              <option value="s">Seconds</option>
              <option value="ms">MiliSeconds</option>

            </select>
            <input
              type="number"
              id="from"
              className="form-control mt-2"
              placeholder="Enter Value"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <select
              className="form-control"
              value={toTime}ds
              onChange={handleToTimeChange}
            >
              <option value="week">Week</option>
              <option value="day">Day</option>
              <option value="hr">Hour</option>
              <option value="min">Minute</option>
              <option value="s">Seconds</option>
              <option value="ms">MiliSeconds</option>
            </select>
            <input
              type="text"
              id="to"
              className="form-control mt-2"
              placeholder="Result"
              readOnly
              value={result}
            />
          </div>
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              setInputValue("");
              setResult("");
              setFromTime("hr");
              setToTime("min");
            }}
          >
            <i className="bi bi-x-circle me-2"></i>Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeConverter;
