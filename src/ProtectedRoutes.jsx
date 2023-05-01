import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useLocation } from "react-router-dom";
export default function ProtectedRoutes() {
  const location = useLocation();
  const { user } = useAuth();
  return !user ? (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  ) : (
    <Outlet />
  );
}
