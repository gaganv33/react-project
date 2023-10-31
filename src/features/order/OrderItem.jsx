/* eslint-disable react/prop-types */
function OrderItem({ item, itemIng }){
   
   return (
      <div className="flex items-center justify-between py-3">
         <div className="space-x-1">
            <div className="space-x-3">
               <span className="font-bold">{item.quantity}&times;</span>
               <span>{item.name}</span>
            </div>
            <span className="text-sm font-medium text-stone-500 capitalize tracking-wide italic">
               {
                  itemIng.length === 0 ? "Loading..." : itemIng.join(", ")
               }
            </span>
         </div>
         <div className="font-bold">
            ${item.totalPrice}
         </div>
      </div>
   )
}

export default OrderItem;
