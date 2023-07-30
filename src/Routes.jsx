import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "./App";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Tasks from "./pages/tasks/Tasks";
export default function Routes({ children }) {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              index: true,
              element: <Tasks />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}
