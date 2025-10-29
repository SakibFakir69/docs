



import React, { useEffect, useState } from 'react'

function App() {

  // useEffect is a react functional component.  in react use to handel side effect in react app
  /// use case => api fetch -> setItem on local stroage -> event subcription -> dom manipulation
  // useEffect first mount on when component add to dom 
  /// update -> when state or props change on ui 
  //// unmount -> when component remove from dom
  //// we can set depedency [] -> depdency change component update or render
  const [count , setCount ] = useState(0);


  useEffect(()=>{
    console.log("every render run useEffect if not gave depedency")
  })

  useEffect(()=>{
    console.log("component mount")
    /// run only first time when component mount or component add to dom
  },[])

  useEffect(()=>{

    console.log("component re-render",count);
    console.log(count);

    // clean up function => run when component remove from dom 

    return ()=>{
      console.log("clean up run",count);
      // show pre value like (count-1);
    }

  },[count]) /// if count state change useEffect run again 




  return (
    <div>
      <h1>Learning use effect</h1>
      {
        count!==5 ? <Child/> : null
      }
      <button onClick={()=> setCount(count+1)}>update {count}</button>
      <button onClick={()=> setCount(5)} >Remove Component</button>
      
    </div>
  )
}

export default App



function Child(){

  console.log("child");


  useEffect(()=>{
    console.log("mounted");

    return ()=>{
      console.log("child removed")
    }
  },[])

  return(
    <div>
      <h1>child</h1>
    </div>
  )

}