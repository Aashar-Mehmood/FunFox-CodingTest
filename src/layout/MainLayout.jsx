import { Layout, theme } from "antd";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
const { Header, Content, Footer } = Layout;
export default function MainLayout() {
  return (
    <Layout>
      <Header className="flex items-center">
        <AppHeader />
      </Header>
      <Layout>
        <Layout className="p-6 bg-slate-100">
          <Content className="px-6 m-0 min-h-screen lg:w-3/4 lg:mx-auto">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer className="mt-2 shadow py-4 bg-slate-700">
        <AppFooter />
      </Footer>
    </Layout>
  );
}
