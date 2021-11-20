import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});