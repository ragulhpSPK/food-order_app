import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
