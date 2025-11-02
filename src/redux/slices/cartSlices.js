import { createSlice } from "@reduxjs/toolkit"
import { cartData } from "../../data/data";


const initalState = {
    items:cartData,
    totalAmount:0,
    totalQuantity:0,
}


const cartSlics = createSlice({
    name:"cart",
    initialState:initalState,
    reducers:{}
})
console.log(cartSlics)
console.log(cartSlics.reducer);

export default cartSlics.reducer;