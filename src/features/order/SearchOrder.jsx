import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder(){
   const [query, setQuery] = useState("");
   const navigate = useNavigate();

   function handleChange(e){
      setQuery(e.target.value);
   }

   function handleKeyDown(){
      if(query !== ""){
         const search = query;
         const upperCaseSearch = search.toUpperCase();
         setQuery("");
         navigate(`/order/${upperCaseSearch}`);
      }
   }

   return (
      <div>
         <input className="w-20 px-4 py-2 focus:outline-none rounded-full transition-all duration-300 text-sm bg-yellow-100
          focus:ring focus:ring-yellow-200 focus:ring-offset-3 sm:focus:w-72 sm:w-64
          " type="text" placeholder="Search Order ID" value={query} onChange={(e) =>handleChange(e)} onKeyDown={(e) => {
            if(e.key === "Enter"){
               handleKeyDown()
            }
          }} />
      </div>
   );
}

export default SearchOrder;
