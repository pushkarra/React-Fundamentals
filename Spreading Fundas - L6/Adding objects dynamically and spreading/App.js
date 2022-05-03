// Q3 - Adding the object dynamically-----

import React, { useState } from "react";
import Empl from "./Empl";
import "./App.css";

const employee = [
  {
    name: "Anthony",
    id: "ABC",
  },
];

function App() {
  const baseEmployeeObject = {
    role: 'employee',
    company: 'CodeSandbox',
  };

  const firstEmployee = {...baseEmployeeObject, ...employee[0]};
  console.log(firstEmployee);

  return (
    <div className="App">
      <Empl {...firstEmployee} />
    </div>
  );
}

export default App;