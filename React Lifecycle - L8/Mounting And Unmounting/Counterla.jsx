
// Q2 - React lifecycle with the help of useEffect and showing working of Mounting and Unmounting

import React,{useState, useEffect} from "react";

const Counterla = () =>{
  const [count, setCount] = useState(0); 
  useEffect(() => {
      console.log("we have run the useEffect");
      return() => {
        console.log("The component has been unmounted");
      };
  } , []);

  return(
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>

    </div>
  );
};

export default Counterla;