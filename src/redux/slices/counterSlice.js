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
        }
    }
})

export default counterSlice.reducer;