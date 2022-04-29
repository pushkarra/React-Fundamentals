// implementing simple destruction
import React from "react";
import "./App.css";
import Employee from "./Employee";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        <Employee firstName="Jack" lastName="Smith" age="21" />
        <Employee firstName="Stephanie" lastName="A" age="21" />
        <Employee firstName="George" lastName="B" age="21" />
        <Employee firstName="Anthony" lastName="C" age="21" />
      </header>
    </div>
  );
};
export default App;