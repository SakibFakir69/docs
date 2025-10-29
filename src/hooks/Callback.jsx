




import React, { useCallback, useRef, useState } from 'react'

function App() {

  // useCallback hook use to memorization function and prevent re-create function on each 
  /// re-render 
  // in every render react create new function based on state change , then come use Callback hook
  /// that help use to not re -created on every re render 

  const [ count , setCount ] = useState(0); /// this state useCallback 
  const [ num , setNum ] = useState(0); /// not useCallback

  const prevFn = useRef(); /// use callback 
  const prevFn2 = useRef(); /// not use Callback

  const handelInc2 = ()=>{ /// not useCallback
    setNum((num)=> num+1);
  }

  const handelInc = useCallback(()=>{ /// use callback

    setCount((prev)=> prev+1);


  },[])
  console.log(prevFn.current===handelInc ,"prevent re-create on each re - render" );

  console.log(prevFn2.current===handelInc2  ," not prevent re-create function on each re-render")

  prevFn2.current=handelInc2; /// gave reference or function 

  prevFn.current=handelInc; /// gave reference of function




  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>num: {num}</h1>
      <button onClick={handelInc2 }>Num update</button>
      <button onClick={handelInc}>update Count</button>
    </div>
  )
}

export default App
