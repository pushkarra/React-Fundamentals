// Q2- using the array objects in displaying over screen instead of console

import React, { useState } from "react";
import Empl from "./Empl";
import "./App.css";

const employee =[
  {
    name: "Anthony",
    id: "ABC"
  }
];

function App() {

  const firstEmployee = employee[0];
  return (
    <div className="App">
      <Empl {...firstEmployee} />   // passing the objects attributes
      <Empl firstEmployee />        // passing the actual object instead of attributes
    </div>

  );
}

export default App;