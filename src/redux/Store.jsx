import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productReducer from "./ProductSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productReducer,
  },
});
export default store;
