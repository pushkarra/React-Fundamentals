// LECTURE - 14

// Q1 - Connect React to Express (useEffect and Redux Saga Examples)


import React from "react";
import "./App.css";
import {  useEffect } from "react";
import axios from "axios";

function App() {

  const [user, setUser] = React.useState(undefined);
  useEffect(() => {
    axios.get(`http://localhost:8081/user`).then((res) => {
      const responseUser = res.data;
      setUser(responseUser);
    });
  },[]);
  
  return (
    <div className="App">

      {user && <h1> Hello, {user.firstName} </h1>}
      {user && <h3> and we know your lastname is {user.lastName}</h3>}
      
      <h1>Come on, let's made Redux easy</h1>

    </div>
  );
}

export default App;