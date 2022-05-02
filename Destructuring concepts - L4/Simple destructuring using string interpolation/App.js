// Q1:- Simple destructuring using string interpolation

import React from "react";
import "./App.css";

const employee = {
  id: "ABC",
  name: "Anthony",
  salary: "$10",
  address: {
    street: "210 Washington Street",
    country: "Canada",
    province: "Ontario",
    zones: {
      plantZone: "7B",
      alienZone: "41"
    }
  }
};

function App() {

  const { name, id, address } = employee;
  const { street, country, province, zones } = address;
  const { plantZone, alienZone } = zones;
  return (
    <div className="App">
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{`The employees address:${street},${country},${province}`}</h2>
      <h2> {`Plantzone : ${plantZone} With Alienzone : ${alienZone}`}</h2>
      </div>
      );
}

export default App;