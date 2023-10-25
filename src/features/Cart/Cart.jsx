import { Link, useLoaderData } from "react-router-dom";
import { getOrder } from "../../Services/apiCalls";
import CartItem from "./CartItem";

function Cart(){
   const data = useLoaderData();
   console.log(data);

   return (
      <div className="px-4 py-3 flex flex-col items-start">
         <Link to="/menu" className="text-blue-500 hover:text-blue-700 hover:underline pb-3 sm:mx-auto sm:w-[70%]">&larr; Back to menu</Link>
         <h1 className="font-semibold tracking-wide text-xl sm:mx-auto sm:w-[70%] mb-3">Your Cart, %Name%</h1>
         <ul className="divide-y divide-stone-300 w-full">
            {
               data.cart.map((item) => (
                  <CartItem item={item} key={item.pizzaId} />
               ))
            }
         </ul>
      </div>
   )
}

export default Cart;

export async function loader(){
   const data = await getOrder("IIDSAT");
   return data;
}
