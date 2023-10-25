import { useState } from "react";

function SearchOrder(){
   const [query, setQuery] = useState("");

   function handleChange(e){
      setQuery(e.target.value);
   }

   return (
      <div>
         <input className="w-20 px-4 py-2 focus:outline-none rounded-full transition-all duration-300 text-sm bg-yellow-100
          focus:ring focus:ring-yellow-200 focus:ring-offset-3 sm:focus:w-72 sm:w-64
          " type="text" placeholder="Search Order ID" value={query} onChange={(e) =>handleChange(e)} />
      </div>
   );
}

export default SearchOrder;
