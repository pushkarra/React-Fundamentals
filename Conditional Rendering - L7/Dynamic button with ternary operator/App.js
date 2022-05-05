
// Q-2 Maintaing a dynamic button with the helpof conditional rendering and useState && ternary operators

import React, { useState } from "react";
import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <h1> Welcome to the app! </h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
      </button>
      {loggedIn ? (
        <h1> Hello, Anthony! </h1>
      ) : (
        <div>
          <h2> Please log in to continue </h2>
        </div>
      )}
    </div>
  );
}

export default App;