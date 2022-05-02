// Q2- using aliasing concept to resolve the name conflict-----
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
  const { name, id,salary : employeeSalary ,address } = employee;
  const {salary: addressSalary} = address;

  return (
    <div className="App">
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{employeeSalary}</h2>
      <h2>{addressSalary}</h2>
      </div>
  );
}

export default App;