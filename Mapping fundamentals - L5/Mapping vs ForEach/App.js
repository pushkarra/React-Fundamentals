// Lecture -05 ----- Using Maps and loops and understanding difference between mapping and foreach----

// --sample problem where we are using list

import React, { useState } from "react";
import "./App.css";

const employees = ["Anthony", "Kevin", "Stephanie", "George"];
// we are making a list here

function App() {
  return (
    <div className="App">
      {employees.map((employee) => (           // output generated
        <h1> {employee} </h1>
      ))}
        {/* {employees.forEach((employee) => (    //no output will be generated
          <h1> {employee} </h1>
        ))} */}
    </div>
  );
}

export default App;