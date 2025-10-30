




import React, { useEffect, useLayoutEffect, useState } from 'react'

function App() {

  const [count, setCount ] = useState(0);

  const [ marginTop , setMarginTop ] = useState(10);




  useLayoutEffect(()=>{

    for(let i=0; i<1000; i++)
    {
      ;
    }
    
    setMarginTop(marginTop+10);


  },[count])




  return (
    <div>

      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}  >Submit</button>

      <div style={{height:"400px" , width:"500px", border:"2px solid red",marginTop:marginTop}}>

        <h1>Use layoutEffect</h1>

      </div>
      
    </div>
  )
}

export default App
