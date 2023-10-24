/* eslint-disable react/prop-types */
function MenuItem({ item }){
   console.log(item);
   return (
      <div className={`flex pb-2 pt-2 gap-3 ${item.soldOut ? "grayscale" : ""}`}>
         <img src={item.imageUrl} className="h-28" />
         <div className="flex flex-col grow">
            <div>
               <p className="font-semibold italic pt-1">{item.name}</p>
               <span className="capitalize text-stone-500 italic font-medium text-xs sm:text-sm">
                  {item.ingredients.join(", ")}
               </span>
            </div>
            <div className="flex items-center justify-between mt-auto">
               <span className="text-stone-500 italic">{item.soldOut ? "Sold Out" : item.unitPrice}</span>
               {
                  !item.soldOut && (
                     <button className="rounded-full px-4 py-2 bg-yellow-500 text-xs font-medium uppercase tracking-wide">
                        Add to cart
                     </button>
                  )
               }
            </div>
         </div>
      </div>
   )
}

export default MenuItem;
