import { configureStore } from "@reduxjs/toolkit";




import cartRedcuer from "./slices/cartSlices";
import countreducer from './slices/counterSlice'
export const store = configureStore({

    reducer:{
       cart: cartRedcuer,
       counter:countreducer
    }
})



export default store;