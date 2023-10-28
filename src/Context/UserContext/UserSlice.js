import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name: "",
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setName(state, action){
         console.log(action.payload);
         state.name = action.payload;
      },
   }
})

export const { setName } = userSlice.actions;

export default userSlice.reducer;
