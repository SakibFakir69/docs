


import React from 'react'
import UserForm from './pages/UserForm'
import CartContainer from './components/cart/CartContainer'
import { useSelector } from 'react-redux'

function App() {


  const value = useSelector((store)=> { return store.counter});
  console.log(value)



  return (
    <div>

      <h1>Hello world</h1>
     <CartContainer/>
      
    </div>
  )
}

export default App
