


import React, {  createContext, useEffect, useRef, useState } from 'react'
export const myContext = createContext();

function App({children}) {


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
     <myContext.Provider value={{count}}>
      {Children}
      {/* all children component render here
       */}

     </myContext.Provider>
      
    </div>
  )
}

export default App
