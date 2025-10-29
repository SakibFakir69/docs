




import React, { useCallback, useMemo, useRef, useState } from 'react'

function App() {

  // useMemeo -> useMemo use to memorize value and improve perfomence



  const [ count , setCount ] = useState(0); 
  
  const handelInc = useCallback(()=>{

    setCount((prev)=> prev+1);


  },[])
  


  return (
    <div>
      <MemorizedChild  count={count}/>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(10)}>Same value</button>
      
      <button onClick={handelInc}>update Count</button>
    </div>
  )
}

export default App


const MemorizedChild =  ({count})=>{
    console.log("Rendering child");
    let ans=0;
      
    const memo = useMemo(()=>{
      
      console.log("inside usememeo")
      

      const num = 100000000;
       for(let i=0; i<num; i++)
      {
        if(i===1999+count)
        {
          ans=i+count;
          break;

        }
        console.log(i)
      }
      return ans; /// rembember this value 
    
    },[count]); 
    ///when count change  run useMemo
    // care about dependecy

    return (
        <div>
          ans:{memo}
            <h1>Iam child {count}</h1>
        </div>
    )
}
// useMemo prevent from have calcluate


 




const Child= React.memo(MemorizedChild);