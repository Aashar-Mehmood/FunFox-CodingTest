import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <main>
      <aside>
        <h2>Admin Dashboard Aside</h2>
      </aside>
      <Outlet />
    </main>
  );
}
