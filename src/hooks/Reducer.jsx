


import React, { useReducer } from "react";

function App() {
  // useReducer
  // useReducer is a react functional component hook it same like useState but
  /// useReducer us to handel complex state in component

  const reducerFn = (state, action) => {
    console.log(action, "action");
    switch (action?.type) {
      case "inc":
        return { count: state.count + 1 }; /// add plus on to current state
      case "dec":
        return { count: state.count - 1 }; /// minius -1 to current state

      default:
        return state;
    }
  };
  const initalState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducerFn, initalState);

  /// state > gave present value of state
  // initalState > we can set inital value on state
  // dispatch > perfrom state change based on reducer function
  /// reducerFn -> take current state and action and return new state


  console.log(state); /// get present value

  return (
    <div>
      <p>{state?.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      {/* perform inc opration */}
      <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
      {/* perfrom dec opration */}

      <h1>Learning useReducer</h1>
    </div>
  );
}

export default App;
