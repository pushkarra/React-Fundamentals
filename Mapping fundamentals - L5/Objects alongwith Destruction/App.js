// sample problem where we are using objects but with destructuring

import React, { useState } from "react";
import "./App.css";
import Empl from "./Empl";

const employees = [
    {
      name: "Jack",
      id: "1",
    },
    {
      name: "Stephanie",
      id: "2",
    },
    {
      name: "George",
      id: "3",
    },
  ];

function App() {
  return (
    <div className="App">

      {employees.map ((empl) =>(
         <Empl key={empl.id} name={empl.name} id={empl.id} />
      ))}
    </div>

    );
}

export default App;
