import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "./App";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Exercises from "./pages/exercises/Exercises";
import AddExercise from "./pages/exercises/AddExercise";
import EditExercise from "./pages/exercises/EditExercise";
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
              element: <Dashboard />,
            },

            {
              path: "/workouts/:id/addExercise",
              element: <AddExercise />,
            },
            {
              path: "/exercises",
              element: <Exercises />,
            },
            {
              path: "/exercises/:id/edit",
              element: <EditExercise />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}
