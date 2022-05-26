import React, { useState, useEffect } from "react";

const Counterla = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    

    // combining update useEffect with cleanup
    useEffect(() => {
        console.log(`the count has updated to ${count}`);

        return () => {
        console.log(`we are in the cleanup and the count is - ${count}`);
        };
    }, [count]);



    return (
        <div>
            <h6> Counter </h6>
            <p> current count: {count} </p>
            <button onClick={() => setCount(count + 1)}>increment the count</button>
            <button onClick={() => setCount2(count2 + 1)}>increment the count 2</button>


        </div>
    );
};

export default Counterla;