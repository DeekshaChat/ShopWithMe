import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import uiReducer from "./UISlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;