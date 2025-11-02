import { configureStore } from "@reduxjs/toolkit";

import baseApi from './baseApi'


import cartRedcuer from "./slices/cartSlices";
import countreducer from './slices/counterSlice'
export const store = configureStore({

    reducer:{
       cart: cartRedcuer,
       counter:countreducer,
       [baseApi.reducerPath]:baseApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(baseApi.middleware)
    
})



export default store;