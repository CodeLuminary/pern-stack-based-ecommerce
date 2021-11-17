import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

export const cartSlice = createSlice({
    name: "cart",
    initialState:{ value: []},
    reducers:{
        addItem: (state, action)=>{
            state.value = [
                ...state.value,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    quantity: action.payload.quantity,
                    amount: action.payload.amount,
                    description: action.payload.description
                }
            ]
        },
        removeItem: (state, action)=>{
            state.value = state.value.filter( item => item.id !== action.payload.id)
        },
        decrementItemQuantity: (state, action)=>{
            state.value = state.value.map(item => item.id === action.payload.id ? {
                ...item, quantity: --quantity
            } : item )
        },
        incrementItemQuantity: (state, action)=>{
            state.value = state.value.map(item => item===action.payload.id ? {
                ...item, quantity: ++quantity
            } : item)
        }
    }
})