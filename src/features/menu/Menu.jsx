import { useLoaderData } from "react-router";
import { getMenu } from "../../Services/apiCalls";
import MenuItem from "./MeuItem";

function Menu(){
   const data = useLoaderData();
   console.log(data);

   return (
         <div className="mx-auto my-auto">
            <ul className="divide-y divide-stone-500 px-3 w-screen">
               {
                  data.map((item) => (<MenuItem key={item.id} item={item} />))
               }
            </ul>
         </div>
   )
}

export async function loader(){
   const data = await getMenu();
   return data;
}

export default Menu;
