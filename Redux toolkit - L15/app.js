// LECTURE - 15


import React from "react";
import "./App.css";
import {  useSelector } from "react-redux";
import { decrement, increment, test } from "./toolkit/CounterSlice";
import { useDispatch } from "react-redux";

function App() {
const count = useSelector((state) => state.counter);
const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>The count is:  {count}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <button onClick={() => dispatch(test({ testValue: 33 }))}> Test </button>



    </div>
  );
}

export default App;