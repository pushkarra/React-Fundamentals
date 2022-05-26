// Q1- use of useEffect alongwith componentDidMount, componentDidUpdate, componentWillUnmount
import React, { useState } from "react";
import "./App.css";
import Counterla from "./Counterla";

function App() {
  const [showCounters, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>
      <button onClick={() => setShowCounter(!showCounters)}>
        {showCounters ? "Hide Counter" : "Show Counter"}
      </button>
      {/* <Counterla /> */}
      {showCounters && <Counterla />}
    </div>
  );
}

export default App;
