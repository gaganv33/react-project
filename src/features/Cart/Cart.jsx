import { Link, useLoaderData } from "react-router-dom";
import { getOrder } from "../../Services/apiCalls";
import CartItem from "./CartItem";

function Cart(){
   const data = useLoaderData();
   
   return (
      <div className="px-4 py-3 flex flex-col items-start sm:mx-auto sm:w-[70%]">
         <Link to="/menu" className="text-blue-500 hover:text-blue-700 hover:underline pb-3">&larr; Back to menu</Link>
         <h1 className="font-semibold tracking-wide text-xl mb-3">Your Cart, %Name%</h1>
         <ul className="divide-y divide-stone-300 w-full">
            {
               data.cart.map((item) => (
                  <CartItem item={item} key={item.pizzaId} />
               ))
            }
         </ul>
         <div className="flex items-center justify-between w-full">
            <button className="uppercase bg-yellow-500 px-3 py-2 rounded-full font-semibold
             focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 hover:bg-yellow-300 
             transition-all duration-300">order pizzas</button>
            <button className="uppercase bg-stone-200 px-3 py-2 hover:bg-stone-300 transition-all 
             duration-300 rounded-full focus:outline-none focus:ring focus:ring-stone-500 
             focus:ring-offset-2 font-semibold">clear cart</button>
         </div>
      </div>
   )
}

export default Cart;

export async function loader(){
   const data = await getOrder("IIDSAT");
   return data;
}
