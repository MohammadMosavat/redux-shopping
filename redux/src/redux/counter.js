import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProduct = [action.payload, ...state.cartProduct];
    },

    removeFromCart: (state, action) => {
      console.log(state.cartProduct)
      const indexOfId = state.cartProduct.indexOf(action.payload);
      state.cartProduct.splice(indexOfId, 1);
    },

    clearAllItems: (state) => {
      state.cartProduct = [];
    },
  },
});

export default cartSlice;
