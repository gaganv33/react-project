import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserContext/UserSlice";
import CartSlice from "./CartContext/CartSlice";

const store = configureStore({
    reducer: {
      user: UserSlice,
      cart: CartSlice,
    }
})

export default store;
