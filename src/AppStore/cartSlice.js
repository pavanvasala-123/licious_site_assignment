import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
    cart_products :localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    total_price : 0,
    cart_quantity:0
  }

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
     addItem: (state,action)=>{
        const itemIndex = state.cart_products.findIndex(eachItem => eachItem.id === action.payload.id)
        if(itemIndex >= 0){
            state.cart_products[itemIndex].quantity += 1
        }
        else{
            const tempProduct = {...action.payload , quantity:1}
            state.cart_products.push(tempProduct)
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cart_products))
       
     },
     removeItem :(state,action) =>{
        const remaingItems = state.cart_products.filter((eachItem) => eachItem.id !== action.payload.id)
        console.log(remaingItems)
        state.cart_products = remaingItems
        localStorage.setItem("cartItems",JSON.stringify(state.cart_products))
     },
     decreaseQuantity:(state,action)=>{
        const itemIndex = state.cart_products.findIndex(eachItem => eachItem.id === action.payload.id)
        if(state.cart_products[itemIndex].quantity > 1){
            state.cart_products[itemIndex].quantity -= 1
            localStorage.setItem("cartItems",JSON.stringify(state.cart_products))
        }else if(state.cart_products[itemIndex].quantity === 1) {
            const remaingItems = state.cart_products.filter((eachItem) => eachItem.id !== action.payload.id)
            state.cart_products = remaingItems
            localStorage.setItem("cartItems",JSON.stringify(state.cart_products))
        }
        
    },

    ItemTotal:(state)=>{
        let sum = 0;
        let cart_quantity = 0;
        state.cart_products.forEach((eachObj) => sum += eachObj.quantity * eachObj.basePrice )
        state.total_price = sum
        state.cart_quantity = cart_quantity
        localStorage.setItem("cartItems",JSON.stringify(state.cart_products))
    },
    TotalCartItems:(state) =>{
        let count = 0;
        count = state.cart_products.length
        state.cart_quantity = count

    }
   
    }
})

export const { addItem, removeItem ,decreaseQuantity,ItemTotal,TotalCartItems} = cartSlice.actions
export default cartSlice.reducer