/* eslint-disable react/prop-types */
function OrderItem({ item }){
   
   return (
      <div className="flex items-center justify-between py-3">
         <div className="space-x-1">
            <span className="font-bold">{item.quantity}&times;</span>
            <span>{item.name}</span>
         </div>
         <div className="font-bold">
            ${item.totalPrice}
         </div>
      </div>
   )
}

export default OrderItem;
