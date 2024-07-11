import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};
const cartSlice = createSlice({
    
    name:"cart",
    initialState,
    reducers:{
       addItem : (state,action)=>{
            state.cart.push(action.payload)
        },
       removeItem : (state,action) =>{
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        clearCart:()=>{
            cart = null
        }
    }
})

export const {addItem ,removeItem,clearCart } = cartSlice.actions
export default cartSlice.reducer