import { createSlice } from "@reduxjs/toolkit"
import { cartData } from "../../data/data";


const initalState = {
    items:cartData,
    addToCart:[],
    totalAmount:0,
    totalQuantity:0,
}


const cartSlics = createSlice({
    name:"cart",
    initialState:initalState,
    reducers:{

        clearCart:(state)=>{

            state.addToCart=[];
            /// clear item
            
        } ,
        addToCart:(state,action)=>{

            state.addToCart.push(action.payload);
            // push cart items

        }
    }
})
console.log(cartSlics)
console.log(cartSlics.reducer);

export const {clearCart , addToCart} = cartSlics.actions;

export default cartSlics.reducer;