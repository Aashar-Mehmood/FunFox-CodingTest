import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "./App";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Workouts from "./pages/workouts/Workouts";
import Settings from "./pages/settings/Settings";
import AddExercise from "./pages/exercises/AddExercise";
import Exercises from "./pages/exercises/Exercises";
import EditWorkout from "./pages/workouts/EditWorkout";
import EditExercise from "./pages/exercises/EditExercise";
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
              path: "/workouts/:id/edit",
              element: <EditWorkout />,
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
            {
              path: "/settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}
