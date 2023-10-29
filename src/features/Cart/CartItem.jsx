import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, deleteItem } from "../../Context/CartContext/CartSlice";

/* eslint-disable react/prop-types */
function CartItem({item}){
   const dispatch = useDispatch();

   function handleIncrement(id){
      dispatch(incrementItem(id));
   }

   function handleDecrement(id){
      dispatch(decrementItem(id));
   }

   function handleDelete(id){
      dispatch(deleteItem(id));
   }

   return (
      <div className="flex flex-col items-start py-2 gap-1 sm:flex-row sm:items-center sm:justify-between sm:py-3">
         <div className="space-x-4 w-[50%] py-1 text-sm sm:text-base">
            <span className="italic font-extrabold text-stone-900">{item.quantity} &times;</span>
            <span className="tracking-wide italic font-medium text-stone-500">{item.name}</span>
         </div>

         <div className="flex items-center justify-between space-x-4 w-full sm:justify-end sm:w-[50%] text-sm sm:text-base">
            <span className="italics font-medium text-stone-500 tracking-wide">${item.totalPrice}.00</span>
            <span className="flex items-center justify-center space-x-2 sm:space-x-4">
               <button className="px-2 py-1 bg-yellow-400 rounded-full flex items-center justify-center
                  font-semibold sm:text-base text-sm focus:outline-none
                  focus:ring focus:ring-yellow-400 
                  focus:ring-offset-2 transition-all duration-300" onClick={() => handleDecrement(item.pizzaId)}>-</button>

               <span className="font-semibold text-sm sm:text-base">{item.quantity}</span>

               <button className="px-2 py-1 bg-yellow-400 rounded-full flex items-center justify-center
                  font-semibold sm:text-base text-sm focus:outline-none 
                  focus:ring focus:ring-yellow-400 
                  focus:ring-offset-2 transition-all duration-300" onClick={() => handleIncrement(item.pizzaId)}>+</button>
            </span>

            <button className="bg-yellow-500 rounded-full px-4 py-1 uppercase tracking-wider font-medium
             focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2
              transition-all duration-300 hover:bg-yellow-400" onClick={() => handleDelete(item.pizzaId)}>Delete</button>
         </div>
      </div>
   );
}

export default CartItem;
