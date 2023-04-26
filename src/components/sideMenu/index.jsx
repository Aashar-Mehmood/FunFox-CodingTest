import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      items={[
        {
          label: "Dashbaord",
          icon: <AppstoreOutlined />,
          key: "/",
        },
        {
          label: "Workouts",
          key: "/workouts",
          icon: <ShopOutlined />,
        },
        {
          label: "Exercises",
          key: "/exercises",
          icon: <ShoppingCartOutlined />,
        },
        {
          label: "Customers",
          key: "/customers",
          icon: <UserOutlined />,
        },
      ]}
    ></Menu>
  );
}
