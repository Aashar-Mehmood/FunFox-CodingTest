import React from "react";
import { Row, Col, Button, Form, Input, Space, message } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import "./login.css";
import cmpnd from "../../assets/cmpnd.png";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const { user, setUser } = useAuth();
  const location = useLocation();
  const { from } = location.state || { from: "/" };
  function showMessage(type, msgText) {
    messageApi.open({
      type: type,
      content: msgText,
    });
  }

  const onFinish = (values) => {
    const { email, password } = values;
    if (!email && !password) {
      showMessage("error", "Enter email and password");
    } else if (!email) {
      showMessage("error", "Email is Required");
    } else if (!password) {
      showMessage("error", "Password is Required");
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      showMessage("error", "Invalid Email");
    } else {
      handleLogin(email, password);
    }
  };

  function handleLogin(email, password) {
    // here login with firebase sdk
    setUser(true);
  }

  if (user) {
    return <Navigate to={from} />;
  } else {
    return (
      <section id="login-container">
        {contextHolder}
        <Row className="form-container" data-testid="container">
          <Col xs={22} sm={16} md={12} lg={8}>
            <div className="flex justify-center">
              <img src={cmpnd} alt="CMPND" role="img" />
            </div>
            <Space direction="vertical" size="large" className="flex">
              <h2
                className="text-2xl text-center text-white my-1"
                role="heading"
              >
                Admin Login
              </h2>
              <Form
                role="form"
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Form.Item label="Email" name="email">
                    <Input
                      placeholder="example@gmail.com"
                      prefix={<MailTwoTone />}
                      className="py-2"
                    />
                  </Form.Item>

                  <Form.Item label="Password" name="password">
                    <Input.Password prefix={<LockTwoTone />} className="py-2" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      role="button"
                      name="login"
                      type="primary"
                      htmlType="submit"
                      className="block w-full mt-4 py-2 h-auto"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </Space>
          </Col>
        </Row>
      </section>
    );
  }
}
