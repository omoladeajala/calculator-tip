import React from "react";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return <div>
    <BillInput />
    <SelectPercentage />
    <SelectPercentage />
    <Output />
    <Reset />
  </div>
}

function BillInput() {
  return (
    <div>
      <label>How mu</label>
    </div>
  );
}

function SelectPercentage() {}

function Output() {}

function Reset() {}
