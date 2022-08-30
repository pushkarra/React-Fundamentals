import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import {getUser} from "./redux/ducks/user";
import {  useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count);

  const voters = [
    "Pushkar Rajput ",
    "Jatin sharma",
    "Shubhi",
    "Ajjubhai"
  ];
  return (
    <div className="App">

      {user && <h1> Hello, {user.lastName} </h1>}
      
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;

