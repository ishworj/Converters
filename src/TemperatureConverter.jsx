import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? (value * 9) / 5 + 32 : "");
    setKelvin(value !== "" ? parseInt(value)+273.15:"")
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? ((value - 32) * 5) / 9 : "");
    setKelvin(value !== "" ?((parseFloat(value)-32)*5)/9+273.15:"")
  };

  const handleKelvinChange = (e)=>{
    const {value }= e.target;

    setKelvin(value);
    setCelsius(value !== "" ? parseFloat(value)-273.15 :"");
    setFahrenheit(value !== "" ? (parseFloat(value) - 273.15) * 9/5 + 32:"");

  }

  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Temperature Converter <span><i class="fa-solid fa-temperature-three-quarters"></i></span></h2>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="celsius" className="form-label">
              Celsius (°C)
            </label>
            <input
              type="number"
              id="celsius"
              className="form-control"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="Enter Celsius"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fahrenheit" className="form-label">
              Fahrenheit (°F)
            </label>
            <input
              type="number"
              id="fahrenheit"
              className="form-control"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="Enter Fahrenheit"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fahrenheit" className="form-label">
              Kelvin (°K)
            </label>
            <input
              type="number"
              id="kelvin"
              className="form-control"
              value={kelvin}
              onChange={handleKelvinChange}
              placeholder="Enter Kelvin"
            />
          </div>
          <button className="btn btn-danger w-100" onClick={resetFields}>
            <i className="bi bi-x-circle me-2"></i>Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
