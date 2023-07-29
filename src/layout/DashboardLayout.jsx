import { Layout, theme } from "antd";
import AppHeader from "../components/appHeader/AppHeader";
import SideMenu from "../components/sideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/appFooter/AppFooter";
const { Header, Sider, Content, Footer } = Layout;
export default function DashboardLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="flex items-center">
        <AppHeader />
      </Header>
      <Layout>
        <Sider width={250} className="px-2 py-6 shadow rounded bg-white">
          <SideMenu />
        </Sider>
        <Layout className="p-6">
          <Content
            style={{
              margin: 0,
              minHeight: 280,
            }}
            className="px-6"
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer
        className="mt-2 shadow py-4"
        style={{ background: colorBgContainer }}
      >
        <AppFooter />
      </Footer>
    </Layout>
  );
}
