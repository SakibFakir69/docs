


import React from 'react'

import withName from './components/withName'
import withAuth from './components/withAuth'


// test: -> access User based on role 

function App() {


  const WithComponent2 = withAuth(Users2);
  // pass component as argument



  

  return (
    <div>

   
      <WithComponent2/>
      {/* show result and render component */}

     
      
    </div>
  )
}



export default App




const Users2 = ()=>{
  // this component just show the props 

  return (
    <div>
     
     <h1>Admin dashboard</h1>

    </div>
  )
}