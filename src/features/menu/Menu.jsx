import { useLoaderData } from "react-router";
import { getMenu } from "../../Services/apiCalls";
import MenuItem from "./MeuItem";

function Menu(){
   const data = useLoaderData();
   console.log(data);

   return (
         <ul className="divide-y divide-stone-500 px-2 w-screen">
            {
               data.map((item) => (<MenuItem key={item.id} item={item} />))
            }
         </ul>
   )
}

export async function loader(){
   const data = await getMenu();
   return data;
}

export default Menu;
