import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './counter'

export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})
