import React, { useState } from "react";
import "./App.css";
import dollar from "../src/img/dollar.jpg";
import aust from "./img/aust dollar.png";
// import moneyTime from "./img/MoneyTime.png";
// import uah from "./img/uah.png";
import Header from "../src/components/Header";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );
    const data = await response.json();
    setConvertedAmount(data.rates[toCurrency] * amount);
  };

  return (
    <div className="App">
      <Header />

      {/* <img src={moneyTime} id="nameBand" /> */}

      <img src={dollar} id="dollar" />
      <img src={aust} id="aust" />
      <img src={dollar} id="dollar" />
      <div id="uah"></div>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br />
        <label>From:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <br />
        <label>To:</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <br />

        <button type="submit">Convert</button>
      </form>
      {convertedAmount && (
        <div>
          <p>
            Converted amount: {convertedAmount} {toCurrency}
          </p>
        </div>
      )}

      {/* <img src={uah} id="uah" /> */}
    </div>
  );
}
