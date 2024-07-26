import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slices.js";
import cartSlice from "./cart-slice.js";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;