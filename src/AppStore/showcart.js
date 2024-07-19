import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
  name: 'Showcart',
  initialState: {
    toggleCart: false 
  },
  reducers: {
    showCart: (state,action) => {
      state.toggleCart = action.payload; 
    }
  }
});

export const { showCart } = toggleCart.actions;
export default toggleCart.reducer;
