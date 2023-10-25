import { Outlet } from "react-router";
import Header from "./Header";
import CartOverView from "../features/Cart/CartOverView";

function AppLayout(){
   return (
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
         <Header />
         <main className="mx-auto overflow-y-scroll w-screen">
            <Outlet />
         </main>
         <CartOverView />
      </div>
   );
}

export default AppLayout;