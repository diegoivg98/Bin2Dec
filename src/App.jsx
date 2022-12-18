import React, { useState } from "react";
import './App.css'

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  function handleChange(event) {
    setBinary(event.target.value);
  }

  function handleConversion() {
    /* Convertir el número binario en decimal. */
    setDecimal(parseInt(binary, 2));
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center p-2">Bin2Dec</h1>
      <div className="form-group">
        <input
          type="number"
          className="form-control w-100"
          id="binary-input"
          value={binary}
          onChange={handleChange}
          placeholder="Ingresa el número binario"
          required
        />
      </div>
      <button
        type="button"
        className="btn btn-outline-success d-flex m-auto mt-sm-3"
        onClick={handleConversion}
      >
        Convertir
      </button>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          id="decimal-output"
          value={decimal}
          readOnly
          placeholder="Resultado en decimal"
        />
      </div>
    </div>
  );
}

export default App;
