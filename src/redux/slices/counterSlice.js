import { createSlice } from "@reduxjs/toolkit"




const initalState={
    count:0
}


const counterSlice = createSlice({
    name:"counter",
    initialState:initalState,
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count=state.count-1;
        },
        incrementByAmount:(state, action)=>{
            state.count=state.count+action.payload;
        },
        decrementByAmount:(state,action)=>{
            state.count=state.count-action.payload;
        }
    }
})

export const {increment, decrement , incrementByAmount, decrementByAmount} = counterSlice.actions

console.log(counterSlice.actions, counterSlice.reducer)
export default counterSlice.reducer;