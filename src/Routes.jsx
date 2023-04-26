import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "./App";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Workouts from "./pages/workouts/Workouts";
import Settings from "./pages/settings/Settings";
import AddExercise from "./pages/exercises/AddExercise";
import Exercises from "./pages/exercises/Exercises";
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
              path: "/workouts",
              element: <Workouts />,
            },
            {
              path: "/exercises",
              element: <Exercises />,
            },
            {
              path: "/workouts/:id/addExercise",
              element: <AddExercise />,
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
