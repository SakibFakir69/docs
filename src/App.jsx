import React, { useRef, useState } from "react";

function App() {
  console.log("re-render")

  // useState react functional hook use for store data and manage state in component
  let initialValue = 0;

  const [state, setState] = useState(initialValue);
  // state => get inital value 
  // setState => we can setValue 
  /// useState (initialValue)

  console.log(state, " get initial value ");

  const handleReset = ()=>{
    setState(0);
    // setState value 0
  }

  return (
    <div>
      <p>{state}</p>
      {/* get update state value on ui  */}

      <button onClick={() => setState(state+1)}>Submit</button>
      {/* update state on button call , ui update and render component */}
      {state%2==0 ? <button onClick={handleReset}>Rest</button> : null}

    </div>
  );
}

export default App;
