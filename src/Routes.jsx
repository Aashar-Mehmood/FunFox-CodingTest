import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "./App";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
export default function Routes({ children }) {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
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
              element: <Dashboard />,
            },
            {
              path: "/settings",
              index: true,
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}
