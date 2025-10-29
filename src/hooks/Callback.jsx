




import React, { useCallback, useRef, useState } from 'react'

function App() {

  // useCallback hook use to memorization function and prevent re-create function on each render

  const [ count , setCount ] = useState(0); ///  useCallback 
  const [ num , setNum ] = useState(0); /// not useCallback
  const prevFn = useRef(); /// use callback 
  const prevFn2 = useRef(); /// not use Callback

  const handelInc2 = ()=>{ /// not useCallback
    setNum((num)=> num+1);
  }
  const handelInc = useCallback(()=>{ /// use callback
   setCount((prev)=> prev+1);
  },[])

  console.log(prevFn.current===handelInc ,"prevent re-create function on each re-render");
  /// output => true 
  console.log(prevFn2.current===handelInc2  ," not prevent re-create function on each re-render")
  /// output => false

  prevFn2.current=handelInc2; /// gave function reference

  prevFn.current=handelInc; /// gave function reference

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





