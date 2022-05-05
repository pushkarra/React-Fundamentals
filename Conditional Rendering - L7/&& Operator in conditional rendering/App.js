// Lecture - 07

// Q1- Use of conditional rendering and && operator

import React, { useState } from "react";
import "./App.css";


function App() {

  const employees1 = [];
  const employees2 = undefined;
  //both employees1 and employees2 will not generate any output because both are acting as undefined.
  // but if we assign a third variable with proper array then it will generate results

  const employees = ["Anthony" , " martha"];
  // as you can see this will generate the result and output on the screen because here array is defined with proper values.

  const firstEmployee = employees && employees[0];
  return (
    <div className="App">
      {employees && employees.length > 0 && (
        <div>
          <h1> Employee List: </h1>
          {employees.map((employee) => (
            <h4> {employee} </h4>
          ))}
        </div>
        )}
    </div>

  );
}

export default App;
