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
      className="SideMenuVertical"
      mode="vertical"
      onClick={(item) => {
        //item.key
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
          label: "Inventory",
          key: "/inventory",
          icon: <ShopOutlined />,
        },
        {
          label: "Orders",
          key: "/orders",
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
