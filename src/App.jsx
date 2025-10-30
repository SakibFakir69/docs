import React from "react";
import useWindowSize from "./hooks/custom/useWindowSize";

function App() {

  const {postion} = useWindowSize();
  const {height,width} = postion;

  console.log(postion)

  

  return <div>

    <p>height: {height} - width: {width}</p>
    <div style={{height:height-100 , width:width-100, border:"2px solid red"}} >

    </div>


  </div>;
}

export default App;
