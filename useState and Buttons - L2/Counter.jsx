import React , {useState} from "react";


const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <React.Fragment>
            
            <p>THE COUNT IS :- {count} </p>

            {/* <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button> */}

            <button onClick={ () => setCount(count+1) }>Increment</button>
            <button onClick={ () => setCount(count-1) }>Decrement</button>
        
        </React.Fragment>
    );

};

export default Counter;