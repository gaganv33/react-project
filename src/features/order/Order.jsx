import { useLoaderData } from "react-router";
import { getOrder } from "../../Services/apiCalls";
import OrderItem from "./OrderItem";

/* eslint-disable no-unused-vars */
function Order(){
   const order = useLoaderData();

   const date = new Date(order.estimatedDelivery);
   const modifiedDate = date.toUTCString();

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
               <span className="font-semibold text-xl tracking-wide">Order should have arrived</span>
               <span>(Estimated Delivery: {modifiedDate})</span>
         </div>
         <ul className="divide-y-2 divide-stone-300">
            {
               order.cart.map((item) => (
                  <OrderItem key={item.pizzaId} item={item} />
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
      </div>
   );
}

export default Order;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }){
   const order = getOrder(params.orderID);
   return order;
}
