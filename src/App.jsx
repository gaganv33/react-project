import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/Cart/Cart";
import Order, { loader as GetOrderLoader } from "./features/order/Order";
import ErrorPage from "./ui/ErrorPage";
import NewOrder, { action as NewOrderAction } from "./features/order/NewOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: GetOrderLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/new",
        element: <NewOrder />,
        action: NewOrderAction,
      }
    ]
  }
])

// createOrder({
//   customer: "Lewis",
//   phone: "95814555",
//   address: "India",
//   priority: true,
//   cart: fakeCart,
// });

function App(){
  return (
    <RouterProvider router={router} />
  );

}

export default App;