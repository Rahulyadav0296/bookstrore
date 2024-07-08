import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { AuthProvider } from "./utils/AuthContext";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Books />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
