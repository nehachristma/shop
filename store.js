import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import cartReducer from './addToCart';

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  
  },
});
export default store;