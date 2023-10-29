import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cart: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState, 
   reducers: {
      addItem(state, action){
         state.cart = [...state.cart, action.payload];
      },
      incrementItem(state, action){
         state.cart.map((item) => {
            if(item.pizzaId === action.payload){
               item.quantity += 1;
               item.totalPrice += item.unitPrice;
            }
            return item;
         })
      },
      decrementItem(state, action){
         const item = state.cart.find((item) => {
            return item.pizzaId === action.payload;
         })

         if(item.quantity === 1){
            state.cart = state.cart.filter((item) => {
               return item.pizzaId !== action.payload;
            })
            
         }
         else{
            state.cart = state.cart.map((item) => {
               if(item.pizzaId === action.payload){
                  item.quantity -= 1;
                  item.totalPrice -= item.unitPrice;
               }
               return item;
            })
         }
      },
      deleteItem(state, action){
         state.cart = state.cart.filter((item) => {
            return item.pizzaId !== action.payload;
         });
      },
      clearCart(state){
         state.cart = [];
      }
   }
})

export const { addItem, incrementItem, decrementItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
