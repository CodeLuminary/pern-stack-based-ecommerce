import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState:{ value: []},
    reducers: {
        setProducts:(state,action)=>{
            state.value = action.payload
        }     
    }
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;