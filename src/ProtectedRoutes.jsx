import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoutes() {
  const [user, setUser] = useState(true);
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
