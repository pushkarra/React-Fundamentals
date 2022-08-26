
// LECTURE - 12

// Q1 - getting familiar to the redux store and action along with reducer and diferent redux hooks

import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Pushkar Rajput ",
    "Jatin sharma",
    "Shubhi",
    "Ajjubhai"
  ];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;