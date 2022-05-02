// Q3 - Nested destructing alongwith aliasing and simple destructing
import React from "react";
import "./App.css";

const employee = {
  id: "ABC",
  name: "Anthony",
  salary: "$10",
  address: {
    salary: "$100",
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
 
  const{
    name,
    id,
    address:{
      street,
      country,
      province,
      zones:{plantZone:myPlantZone, alienZone}
   }
  }=employee;
  return(
    <div className="App">
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{street}</h2>
      <h2>{country}</h2>
      <h2>{province}</h2>
      <h2>{myPlantZone}</h2>
      <h2>{alienZone}</h2>
    </div>
  );
}

export default App;