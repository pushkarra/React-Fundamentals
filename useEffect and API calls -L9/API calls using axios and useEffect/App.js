// Q2- API calls using the useEffect hook
// we can make api calls by other good methods but this is just for knowledge

import React, { useState } from "react";
import "./App.css";
import Counterla from "./Counterla";
import TodoList from "./ToDoList";

function App() {

  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>
      <TodoList />
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counterla />}
    </div>

  );
}

export default App;