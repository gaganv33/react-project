/* eslint-disable react/prop-types */
function CartItem({item}){
   return (
      <div className="flex flex-col items-start py-2 gap-1 sm:flex-row sm:items-center sm:justify-between sm:py-3">
         <div className="space-x-4 w-[50%] py-1 text-sm sm:text-base">
            <span className="italic font-medium text-stone-500">{item.quantity} X</span>
            <span className="tracking-wide italic font-medium text-stone-500">{item.name}</span>
         </div>
         <div className="flex items-center justify-between space-x-4 w-full sm:justify-end sm:w-[50%] text-sm sm:text-base">
            <span className="italics font-medium text-stone-500 tracking-wide">${item.totalPrice}.00</span>
            <button className="bg-yellow-500 rounded-full px-4 py-1 uppercase tracking-wider font-medium
             focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2
              transition-all duration-300 hover:bg-yellow-400">Delete</button>
         </div>
      </div>
   );
}

export default CartItem;
