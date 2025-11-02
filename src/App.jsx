


import React from 'react'
import UserForm from './pages/UserForm'
import CartContainer from './components/cart/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/slices/counterSlice';

function App() {


  const value = useSelector((store)=> { return store.counter});
  const dispatch = useDispatch();
  console.log(dispatch({type:"increment"}))
  console.log(value)



  return (
    <div>

      <h1>Hello world</h1>

      <p className='text-3xl'>count: {value.count}</p>

     <div className='flex'>
       <button onClick={()=> dispatch(increment())} className='p-3 bg-red-600 w-40 text-4xl text-white'>Inc</button>
      <button onClick={()=> dispatch(decrement())} className='p-3 bg-yellow-500 w-40 text-4xl'>Dec</button>

       <button onClick={()=> dispatch(incrementByAmount(10))} className='p-3 bg-green-500 w-40 text-4xl'> - 10</button>
        <button onClick={()=> dispatch(decrementByAmount(10))} className='p-3 bg-black w-40 text-4xl text-white inline'> + 10</button>
     </div>




     <CartContainer/>
      
    </div>
  )
}

export default App
