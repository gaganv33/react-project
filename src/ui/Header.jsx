import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";

function Header(){
   const user = useSelector((store) => {
      return store.user;
   });

   return (
      <div className="bg-yellow-500 flex px-4 py-4 items-center justify-between">
         <h1 className="uppercase text-sm tracking-wider font-semibold">
            <Link to="/">Fast React Pizza Co.</Link>
         </h1>
         <SearchOrder />
         {
            user.name !== "" && <Username />
         }
      </div>
   );
}

export default Header;
