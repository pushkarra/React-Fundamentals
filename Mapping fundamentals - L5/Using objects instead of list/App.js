// --sample problem where we are using objects

import React, { useState } from "react";
import "./App.css";

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
      {employees.map((employee) => (
         <div>
             <h6> {`Name: ${employee.name} ID: ${employee.id}`} </h6>
         </div>
        // <div>    //2nd method 
        //   <h6> {employee.name} </h6>
        //   <h6> {employee.id} </h6>
        // </div>
      ))}
    </div>
  );
}

export default App;