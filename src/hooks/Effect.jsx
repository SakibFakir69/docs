







import React, { useEffect, useState } from 'react'

function App() {

  const [isActive , setIsActive ] = useState(false);


  useEffect(()=>{

    if(!isActive)
    {
      return "User are not Active"
    }

   
    const apiFetch = ()=>{
       const res = await fetch();
    const data = await res.json();
    // fetch data after user have 
    }
    apiFetch();
    // call api fetch


    const interValId = ()=> setInterval(apiFetch,5000);




    // clean up 
    /// clean up remove from dom 

    return ()=> clearInterval(interValId);




  },[isActive]);
  /// re-run if use isActive change 








  return (
    <div>
      
    </div>
  )
}

export default App
