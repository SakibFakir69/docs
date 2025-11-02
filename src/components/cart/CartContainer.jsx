


import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'


function CartContainer() {


    const {items}=useSelector((store)=>{ return store.cart} );
    console.log(items)



  return (
    <div>
        <Navbar/>
      
    </div>
  )
}

export default CartContainer
