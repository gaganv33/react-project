import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { useNavigate } from "react-router";

function Home(){
   const navigate = useNavigate();
   const user = useSelector((store) => {
      return store.user;
   });

   function handleOnClick(){
      navigate("/menu");
   }

   return (
      <div className="py-6 text-center px-6 sm:pt-10 sm:gap-4 sm:pb-8">
         <h1 className="text-xl font-semibold pb-6">
            The best pizza 
            <br />
            <span className="text-yellow-500">
               Straight out of the oven, straight to you.
            </span>
         </h1>
         {
            user.name !== "" ? (
               <button className="uppercase font-semibold px-2 py-1 sm:px-4 sm:py-2 focus:outline-none
                focus:ring focus:ring-yellow-400 focus:ring-offset-2 bg-yellow-500 rounded-full
                transition-all duration-300 hover:bg-yellow-400" onClick={handleOnClick}>
                  Continue ordering, {user.name}
               </button>
            ) : (
               <CreateUser />
            )
         }
      </div>
   )
}

export default Home;