import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dashboard from "../../assets/menu_icons/dashboard.png";
import workout from "../../assets/menu_icons/workout.png";
import exercise from "../../assets/menu_icons/fitness.png";
import logout from "../../assets/menu_icons/logout.png";
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
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <Menu
      mode="vertical"
      onClick={(item) => {
        navigate(item.key);
      }}
      selectedKeys={[selectedKeys]}
      items={items}
    ></Menu>
  );
}
