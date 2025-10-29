




import React, { useCallback, useMemo,  useState } from 'react'

function App() {

  // memo -> memo is a react built in hook and high order component to memorization component
  /// memo -> memorization component and improve perfomence



  const [ count , setCount ] = useState(0); 
  
  const handelInc = useCallback(()=>{

    setCount((prev)=> prev+1);


  },[])
  


  return (
    <div>
      <Child />
      <h1>Count : {count}</h1>
      
      <button onClick={handelInc}>update Count</button>
    </div>
  )
}

export default App


const MemorizedChild =  ({count})=>{
    console.log("Rendering child");

    

    return (
        <div>
          
            <h1>Iam child {count}</h1>
        </div>
    )
}

const Child= React.memo(MemorizedChild);