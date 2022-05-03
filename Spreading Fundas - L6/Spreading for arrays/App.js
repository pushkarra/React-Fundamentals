// Lecture -06

// Q1 -  Learning How spreading works for Arrays

import React from "react";
import "./App.css";

function App() {

  const arr1 = [0, 1, 2];
  const arr2 = [3, 4, 5];
  const arr3 = [-1, ...arr1, ...arr2];
  const arr4 = [-1, arr1, arr2];

  console.log(arr3);                   //check console for the output and it will be printing the object atrributes
  console.log(arr4);                   //check console for the output and it will be printing the object instead of its attributes

  return (
    <div className="App">
      <h1> Hello again :) </h1>
    </div>

  );
}

export default App;