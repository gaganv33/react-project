import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart, { loader as OrderLoader } from "./features/Cart/Cart";
import Order, { loader as GetOrderLoader } from "./features/order/Order";
import ErrorPage from "./ui/ErrorPage";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

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
        loader: OrderLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: GetOrderLoader,
        errorElement: <ErrorPage />,
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