import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import CartOverView from "../features/Cart/CartOverView";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function AppLayout(){
   const navigation = useNavigation();
   const isLoading = navigation.state === "loading";
   const cart = useSelector((store) => {
      return store.cart;
   })

   return (
      <>
         {
            isLoading && <Loader />
         }
         <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="mx-auto overflow-y-scroll w-screen">
               <Outlet />
            </main>
            {
               cart.cart.length !== 0 && <CartOverView />
            }
         </div>
      </>
   );
}

export default AppLayout;