import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

export const cartSlice = createSlice({
    name: "cart",
    initialState:{ value: [],total: 0, sum: 0},
    reducers:{
        addItem: (state, action)=>{
            state.value= [
                ...state.value,
                {
                    cartId: ++lastId,
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: action.payload.quantity,
                    price: action.payload.price,
                    description: action.payload.description,
                    rating: action.payload.rating,
                    image: action.payload.image
                }
            ];
            state.total += 1;
            state.sum += action.payload.quantity * action.payload.price
        },
        setCart:(state,action)=>{
            state.value = action.payload;
            state.value.forEach((value)=>{
                state.total += value.quantity;
                state.sum += value.quantity * value.price
            })
        },
        removeItem: (state, action)=>{
            state.sum -= (action.payload.quantity * action.payload.price);
            state.total -= action.payload.quantity;
            state.value = state.value.filter( item => item.id !== action.payload.id)
        },
        decrementItemQuantity: (state, action)=>{
            state.value = state.value.map(item => item.id === action.payload.id ? {
                ...item, quantity: --item.quantity
            } : item );
            state.total -= 1;
            state.sum -= action.payload.price;
        },
        incrementItemQuantity: (state, action)=>{
            state.value = state.value.map(item => item.id===action.payload.id ? {
                ...item, quantity: ++item.quantity
            } : item);
            state.total += 1;
            state.sum += action.payload.price;
        }
    }
})

export const {addItem, removeItem, decrementItemQuantity, incrementItemQuantity, setCart} = cartSlice.actions;

export default cartSlice.reducer;