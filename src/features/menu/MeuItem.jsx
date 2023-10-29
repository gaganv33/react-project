import { useEffect, useState } from "react";
import { addItem, incrementItem, decrementItem, deleteItem } from "../../Context/CartContext/CartSlice";
import { useDispatch, useSelector } from "react-redux";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

/* eslint-disable react/prop-types */
function MenuItem({ item }){
   const cartData = useSelector((store) => {
      return store.cart;
   })

   const [count, setCount] = useState(0);
   useEffect(function(){
      const data = cartData.cart.find((singleItem) => {
         return singleItem.pizzaId === item.id;
      })
      if(data !== undefined){
         setCount(data.quantity);
      }
   }, [cartData.cart, item.id]);

   const dispatch = useDispatch();

   function handleAddItem(item){
      const singleItem = {
         pizzaId: item.id,
         name: item.name,
         quantity: 1,
         unitPrice: item.unitPrice,
         totalPrice: item.unitPrice,
      }
      dispatch(addItem(singleItem));
      setCount((count) => count + 1);
   }

   function handleIncrement(id){
      setCount((count) => count + 1);
      dispatch(incrementItem(id));
   }

   function handleDecrement(id){
      setCount((count) => count - 1);
      dispatch(decrementItem(id));
   }

   function handleDelete(id){
      setCount(0);
      dispatch(deleteItem(id));
   }
   
   return (
      <div className={`flex pb-2 pt-2 gap-3 ${item.soldOut ? "grayscale" : ""}`}>
         <img src={item.imageUrl} className="h-28" />
         <div className="flex flex-col grow">
            <div>
               <p className="font-semibold italic pt-1">{item.name}</p>
               <span className="capitalize text-stone-500 italic font-medium text-xs sm:text-sm">
                  {item.ingredients.join(", ")}
               </span>
            </div>
            <div className="flex items-center justify-between mt-auto">
               <span className="text-stone-500 italic">
                  {item.soldOut ? "" : "$"}{item.soldOut ? "Sold Out" : item.unitPrice}
               </span>
               {
                  !item.soldOut && (
                     count === 0 ? (<button className="rounded-full px-2 py-1 bg-yellow-500 text-xs font-medium uppercase tracking-wide
                     focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 sm:px-4 sm:py-2
                     transition-all duration-300 hover:bg-yellow-400" onClick={() => handleAddItem(item)}>
                        Add to cart
                     </button>) : 
                     <div className="flex space-x-2 sm:space-x-5">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-5">
                           <button className="px-2.5 py-1 bg-yellow-400 rounded-full text-sm sm:text-lg
                              focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2
                               transition-all duration-300" onClick={() => handleDecrement(item.id)}>-</button>
                           <span className="font-semibold">{count}</span>
                           <button className="px-2.5 py-1 bg-yellow-400 rounded-full flex items-center text-sm 
                              sm:text-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2
                              transition-all duration-300" onClick={() => handleIncrement(item.id)}>+</button>
                        </div>
                        <button className="uppercase text-xs font-semibold tracking-wide bg-yellow-400
                           px-2 py-1 rounded-full sm:text-sm sm:px-3 transition-all duration-300
                            focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        onClick={() => handleDelete(item.id)}>delete</button>
                     </div>
                  )
               }
            </div>
         </div>
      </div>
   );
}

export default MenuItem;
