


import React from 'react'
import UserForm from './pages/UserForm'
import CartContainer from './components/cart/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/slices/counterSlice';
import User from './components/User';

function App() {


  const value = useSelector((store)=> { return store.counter});
  const dispatch = useDispatch();
  console.log(dispatch({type:"increment"}))
  console.log(value)



  return (
    <div>
      
     <CartContainer/>
     <User/>

    




      
    </div>
  )
}

export default App
