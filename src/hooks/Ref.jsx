import React, { useRef, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
//   react can track useState 

  const num = useRef(); // declare useRef for access dom value
  const num2 = useRef(); // declare useRef for access dom value

  // useRef for access dom in react
  // in js we access dom use document.getElementById

  //   inside useRef use can access current and value
  // current,=> current element
  // value => value gave current elment value

  const handleSum = () => {
    const result = num.current.value + num2.current.value;
    setValue(result);
  };

  return (
    <div>
      <input ref={num} type="number" placeholder="Enter your number" />

      {/* gave reference of dom / ref use for access element */}

      <input type="number" ref={num2} placeholder="Enter your number" />

      <p>{value}</p>
      <button onClick={handleSum}>Sum</button>
    </div>
  );
}

export default App;
