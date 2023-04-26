import { Layout, theme } from "antd";
import AppHeader from "../components/appHeader";
import SideMenu from "../components/sideMenu";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/appFooter";
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
        <Sider
          width={250}
          style={{
            background: colorBgContainer,
          }}
          className="self-start px-2 py-6"
        >
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
      <Footer className="mt-2 shadow" style={{ background: colorBgContainer }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}
