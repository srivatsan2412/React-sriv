import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// comes from redux toolkit
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;