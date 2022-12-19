import React, { useState } from "react";
import './App.css'

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  const handleChange = (event) => {
    setBinary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input
    if (!binary) {
      alert('Debes ingresar un numero binario');
      return;
    }

    const regex = /^[01]+$/;
    if (!regex.test(binary)) {
      alert('Un numero binario esta compuesto de 1 y 0');
      return;
    }

    // Convert binary to decimal
    const result = parseInt(binary, 2);
    setDecimal(result);
  };
  return (
    <div className="container mt-3">
      <h1 className="text-center p-2">Bin2Dec</h1>
      <div className="form-group mt-3 col-4">
      <form>
        <input
          type="text"
          className="form-control w-100"
          id="binary-input"
          value={binary}
          onChange={handleChange}
          placeholder="Ingresa el número binario"
          required
          minLength={1} 
          maxLength={8}
          pattern="/[^01]/"
        />
        </form>
      </div>
      <button
        type="button"
        className="d-flex m-auto mt-sm-3"
        onClick={handleSubmit}
      >
        Convertir
      </button>
      <div className="form-group mt-3 col-4">
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
