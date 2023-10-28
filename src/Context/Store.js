import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserContext/UserSlice";

const store = configureStore({
    reducer: {
      user: UserSlice,
    }
})

export default store;
