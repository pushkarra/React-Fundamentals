import React from "react";
import "./App.css";
import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: "21",
    employeeId: "1"
  },
  {
    firstName: "Stephanie",
    lastName: "A",
    age: "21",
    employeeId: "2"

  },
  {
    firstName: "George",
    lastName: "B",
    age: "21",
    employeeId: "3"

  },
  {
    firstName: "Anthony",
    lastName: "C",
    age: "21",
    employeeId: "4"

  },
];

function App() {
    return (
     <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        {employeeInfo.map((employee) => {
          const { firstName, lastName, age } = employee;
           return (
              <Employee firstName= {firstName} lastName = {lastName} age = { age } />
           );
        })}
      </header>
     </div>
    );
  }
  
  export default App;

