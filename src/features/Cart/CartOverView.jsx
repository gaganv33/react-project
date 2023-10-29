import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverView(){
   const [data, setData] = useState({
      count : 0,
      totalPrice: 0,
   });

   const cart = useSelector((store) => {
      return store.cart;
   })

   useEffect(function() {
      let totalCount = 0;
      let totalAmount = 0;
      cart.cart.map((item) => {
         totalCount += item.quantity;
         totalAmount += item.totalPrice;
         return item;
      });
      setData({
         count: totalCount,
         totalPrice: totalAmount,
      });
   }, [cart.cart]);

   return (
      <div className="flex items-center justify-between px-4 py-4 bg-black text-slate-100 uppercase font-semibold">
         <div className="space-x-4">
            <span>{data.count} pizzas</span>
            <span>${data.totalPrice.toFixed(2)}</span>
         </div>
         <div className="uppercase">
            <Link to="/cart">open cart &rarr;</Link>
         </div>
      </div>
   )
}

export default CartOverView;
