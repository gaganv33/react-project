import { useLoaderData } from "react-router";
import { getOrder } from "../../Services/apiCalls";
import OrderItem from "./OrderItem";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import UpdateOrder from "./UpdateOrder";

/* eslint-disable no-unused-vars */
function Order(){
   const order = useLoaderData();
   const [time, setTime] = useState();

   const date = new Date(order.estimatedDelivery);
   const modifiedDate = date.toUTCString();

   useEffect(function() {
      const presentDate = new Date();
      const deliveryDate = new Date(order.estimatedDelivery);

      setTime(deliveryDate.getTime() - presentDate.getTime());

   }, [setTime, order.estimatedDelivery]);

   const fetchData = useFetcher();

   useEffect(function() {
      if(!fetchData.data && fetchData.state === "idle"){
         fetchData.load("/menu");
      }
   }, [fetchData]);

   return (
      <div className="flex flex-col justify-center py-3 px-4 gap-4 sm:w-[80%] sm:mx-auto sm:py-5">
         <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <h1 className="font-semibold tracking-wide text-lg">Order # {order.id} status</h1>
            <div className="uppercase font-semibold tracking-wider text-stone-50 space-x-1">
               {
                  order.priority && (<span className="bg-red-500 py-1 px-3 rounded-full">priority</span>)
               }
               <span className="bg-green-500 py-1 px-3 rounded-full">preparing order</span>
            </div>
         </div>
         <div className="bg-stone-200 px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
               <span className="font-semibold text-xl tracking-wide">
                  {
                     time > 0 ? `Only ${Math.round(time / 60000)} minutes left` : "Order should have arrived"
                  }
               </span>
               <span>(Estimated Delivery: {modifiedDate})</span>
         </div>
         <ul className="divide-y-2 divide-stone-300">
            {
               order.cart.map((item) => (
                  <OrderItem key={item.pizzaId} item={item} 
                     itemIng={fetchData.data === undefined ? [] : fetchData.data.find((el) => {
                        return el.id === item.pizzaId;
                     }).ingredients
                  }
                   />
               ))
            }
         </ul>
         <div className="flex items-center justify-between bg-stone-200 px-4 py-3">
            <span className="text-lg tracking-wide font-semibold">Price Pizza</span>
            <span className="font-semibold">${order.orderPrice}</span>
         </div>
         <div className="flex items-center justify-between bg-stone-200 px-4 py-3">
            <span className="text-lg tracking-wide font-semibold">Price Priority</span>
            <span className="font-semibold">${order.priorityPrice}</span>
         </div>
         <div className="flex items-center justify-between bg-stone-200 px-4 py-3">
            <span className="text-lg tracking-wide font-semibold">Total order price</span>
            <span className="font-semibold">${order.orderPrice + order.priorityPrice}</span>
         </div>
         {
            !order.priority && (
               <div className="w-full text-right">
                  <UpdateOrder />
               </div>
            )
         }
      </div>
   );
}

export default Order;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }){
   const order = getOrder(params.orderID);
   return order;
}
