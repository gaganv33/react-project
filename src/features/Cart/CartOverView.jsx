function CartOverView(){
   return (
      <div className="flex items-center justify-between px-4 py-4 bg-black text-slate-100 uppercase font-semibold">
         <div className="space-x-4">
            <span>23 pizzas</span>
            <span>$23.45</span>
         </div>
         <div>
            open cart
         </div>
      </div>
   )
}

export default CartOverView;