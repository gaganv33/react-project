import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../ui/Message";
import { clearCart } from "../../Context/CartContext/CartSlice";

function Cart(){
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const data = useSelector((store) => {
      return store.cart;
   });

   const user = useSelector((store) => {
      return store.user;
   });

   function handleClearCart(){
      dispatch(clearCart());
   }

   function handleOrder(){
      navigate("/order/new");
   }
   
   return (
      <div className="px-4 py-3 flex flex-col items-start sm:mx-auto sm:w-[70%]">
         <Link to="/menu" className="text-blue-500 hover:text-blue-700 hover:underline pb-3">
            &larr; Back to menu
         </Link>
         {
            data.cart.length === 0 ? (
               <Message />
            ) : (
               <>
                  <h1 className="font-semibold tracking-wide text-xl mb-3">
                     Your Cart, {user.name === "" ? "User" : user.name}
                  </h1>
                  <ul className="divide-y divide-stone-300 w-full mb-3">
                     {
                        data.cart.map((item) => (
                           <CartItem item={item} key={item.pizzaId} />
                        ))
                     }
                  </ul>
                  <div className="flex items-center justify-between w-full gap-3">
                     <button className="uppercase bg-yellow-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full font-semibold
                     focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 hover:bg-yellow-300 
                     transition-all duration-300" onClick={() => handleOrder()}>order pizzas</button>
                     <button className="uppercase bg-stone-200 px-2 py-1 sm:px-3 sm:py-2 hover:bg-stone-300 transition-all 
                     duration-300 rounded-full focus:outline-none focus:ring focus:ring-stone-500 
                     focus:ring-offset-2 font-semibold" onClick={() => handleClearCart()}>clear cart</button>
                  </div>
               </>
            )
         }
      </div>
   )
}

export default Cart;
