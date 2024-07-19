import { configureStore } from "@reduxjs/toolkit";

import toggleCartReducer from './showcart';
import CartReducer from './cartSlice'


const appStore = configureStore({
  reducer: {
    showCart: toggleCartReducer,
    cart : CartReducer
  },
});

export default appStore;

