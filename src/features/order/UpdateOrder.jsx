import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../Services/apiCalls";

function UpdateOrder(){
   const fetcher = useFetcher();

   const isLoading = fetcher.state === "loading";

   return (
      <fetcher.Form method="PATCH">
         <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-400 rounded-full focus:outline-none
            focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed"
            disabled={isLoading}
         >
            {
               isLoading ? "Updating Order..." : "Make Priority"
            }
         </button>
      </fetcher.Form>
   );
}

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }){
   const data = { priority: true };
   await updateOrder(params.orderID, data);
   return null;
}
