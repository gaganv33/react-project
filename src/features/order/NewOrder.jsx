import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, useActionData } from "react-router-dom";
import { createOrder } from "../../Services/apiCalls";
import store from "../../Context/Store";
import { clearCart } from "../../Context/CartContext/CartSlice";
import { redirect } from "react-router-dom";

function NewOrder(){
   const [totalAmount, setTotalAmount] = useState(0);
   const [priority, setPriority] = useState(false);
   const [priorityPrice, setPriorityPrice] = useState(0);
   const [displayAmount, setDisplayAmount] = useState(0);

   const user = useSelector((store) => {
      return store.user;
   });

   const cart = useSelector((store) => {
      return store.cart;
   });

   useEffect(function() {
      let total = 0;
      cart.cart.map((item) => {
         total += item.totalPrice;
         return item;
      })
      setTotalAmount(total);
      setPriorityPrice(total * 0.2);
   }, [cart.cart]);

   useEffect(function() {
      if(priority){
         setDisplayAmount(totalAmount + priorityPrice);
      }
      else{
         setDisplayAmount(totalAmount);
      }
   }, [priorityPrice, priority, totalAmount]);

   function handlePriorityChange(e){
      setPriority(e.target.checked);
   }

   const actionData = useActionData();

   return (
      <div className="flex flex-col items-center justify-center sm:w-[70%] sm:mx-auto
        px-3 py-2 sm:px-4 sm:py-3 gap-5">
         <h1 className="text-lg font-semibold tracking-wide mt-2 sm:mt-4">Ready to order? Let&apos;s go!</h1>
         <Form method="POST" className="flex items-center justify-center gap-5 flex-col w-full">
            <div className="flex flex-col items-start justify-center w-full gap-2 sm:flex-row sm:items-center">
               <h2 className="tracking-wide font-semibold sm:w-[30%]">First Name</h2>
               <input type="text" className="w-full px-4 py-3 rounded-full text-sm sm:text-base
                  focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all
                  duration-300 bg-stone-200" name="customer" value={user.name !== "" ? user.name : ""}
                  readOnly
               />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2 sm:flex-row sm:items-center">
               <h2 className="tracking-wide font-semibold sm:w-[30%]">Phone Number</h2>
               <div className="w-full flex flex-col items-center justify-center gap-3">
                  <input type="text" className="w-full px-4 py-3 rounded-full text-sm sm:text-base
                     focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all
                     duration-300 bg-stone-200" name="phone"
                  />
                  {
                     actionData?.phone !== undefined && (
                        <span className="flex items-center justify-center w-full px-4 py-2 bg-red-100 text-red-800
                        rounded-md">{actionData?.phone}</span>
                     )
                  }
               </div>
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2 sm:flex-row sm:items-center">
               <h2 className="tracking-wide font-semibold sm:w-[30%]">Address</h2>
               <input type="text" className="w-full px-4 py-3 rounded-full text-sm sm:text-base
                  focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all
                  duration-300 bg-stone-200" name="address"
               />
            </div>

            <span className="flex items-center justify-center space-x-4">
               <input type="checkbox" className="h-5 w-5 focus:outline-none focus:ring focus:ring-yellow-400
                  focus:ring-offset-2 accent-yellow-400" name="priority" value={priority}
                  onChange={(e) => handlePriorityChange(e)}
               />
               <h2 className="font-semibold tracking-wide">Want to give your order priority?</h2>
            </span>

            <input name="cart" value={JSON.stringify(cart.cart)} readOnly hidden />

            <button className="font-semibold px-3 py-1 sm:px-4 sm:py-2 bg-yellow-400 
               rounded-full focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2
               transition-all duration-300 uppercase text-sm sm:text-base"> 
               Order now from ${displayAmount}
            </button>
         </Form>
      </div>
   );
}

export default NewOrder;

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export async function action({ request }){
   const formData = await request.formData();
   const data = Object.fromEntries(formData);

   const newOrder = {
      ...data, 
      priority: data.priority === "true" ? true : false,
      cart: JSON.parse(data.cart),
      position: "",
   }
   const errors = {};
   for(let i = 0; i < data.phone.length; i++){
      const value = data.phone[i] - '0';
      if(value >= 0 && value <= 9){
         continue;
      }
      else{
         errors.phone = "Invalid phone number.";
         break;
      }
   }

   if(Object.keys(errors).length > 0){
      return errors;
   }

   const order = await createOrder(newOrder);
   store.dispatch(clearCart());

  return redirect(`/order/${order.id}`);
}
