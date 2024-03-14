import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array to store the items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(action.payload);
   
      state.items.push({ ...newItem });
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove.id);
    },
  },
});



export const { addItemToCart,removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
