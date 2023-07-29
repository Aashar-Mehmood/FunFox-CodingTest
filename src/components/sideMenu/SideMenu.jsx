import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dashboard from "../../assets/menu_icons/dashboard.png";
import workout from "../../assets/menu_icons/workout.png";
import exercise from "../../assets/menu_icons/fitness.png";
import logout from "../../assets/menu_icons/logout.png";
import useAuth from "../../hooks/useAuth";
import { userLogout } from "../../services/auth";
const items = [
  {
    label: "Dashboard",
    key: "/",
    icon: <img src={dashboard} />,
  },
  {
    label: "Workouts",
    key: "/workouts",
    icon: <img src={workout} />,
  },
  {
    label: "Exercises",
    key: "/exercises",
    icon: <img src={exercise} />,
  },
  {
    label: "Logout",
    key: "/logout",
    icon: <img src={logout} />,
  },
];
export default function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const { user, setUser } = useAuth();
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
  }
  return (
    <Menu
      mode="vertical"
      onClick={(item) => {
        if (item.key === "/logout") {
          handleLogout();
        } else {
          navigate(item.key);
        }
      }}
      selectedKeys={[selectedKeys]}
      items={items}
    ></Menu>
  );
}
