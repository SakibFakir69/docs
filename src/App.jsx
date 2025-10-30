


import React, { useEffect, useRef, useState } from 'react'

function App() {


  const myRef = useRef();
  const prevRef = useRef();
  const [ count , setCount ] = useState(0);


  useEffect(()=>{
    myRef.current.focus();
    prevRef.current=count;


  },[count])
  console.log(myRef.current)
  console.log(prevRef.current , ' store previous estate')


  return (
    <div>
      <input type='text' ref={myRef} placeholder='Enter your text'/>
      <p>Update counter: {count}</p>
      <button ref={prevRef} onClick={()=> setCount(count+1)}>Click counter</button>
      
    </div>
  )
}

export default App
