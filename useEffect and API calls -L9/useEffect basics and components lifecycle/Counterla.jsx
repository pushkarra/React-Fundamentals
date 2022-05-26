import React, { useState, useEffect } from "react";

const Counterla = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


    // componentDidMount
    //   useEffect(() => {
    //       console.log("we have run the useEffect");
    //   } , []);


    // componentDidUpdate
    // useEffect(() => {
    //     console.log("we have run the useEffect");
    // }, [count]);


    // componentDidUpdate for two counters but second counter will not affect the value
    // useEffect(() => {
    //     console.log("we have run the useEffect");
    // }, [count , count2]);


    // componentWillUnmount or you can say cleanup
    // useEffect(() => {
    //     console.log("we have run the useEffect");

    //     return () => {
    //     console.log("the return is being ran");
    //     };
    // }, []);


    // no array useEffect
    // useEffect(() => {
    //     console.log("we have run the useEffect");
    // });


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