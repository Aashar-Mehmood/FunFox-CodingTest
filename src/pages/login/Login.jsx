import React from "react";
import { Row, Col, Button, Form, Input, Space, message } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import funfox from "../../assets/funFoxRm.png";
import { Navigate, useLocation, Link } from "react-router-dom";
import { userLogin } from "../../services/auth";
export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const { user, setUser } = useAuth();
  const location = useLocation();
  const { from } = location.state || { from: "/" };

  function showMessage(type, msgText, onclose = () => null) {
    messageApi.open({
      type: type,
      content: msgText,
      onClose: onclose,
    });
  }

  // if updating error and success msg in onFinish functions
  // remember to also update in Login.test.js
  // we can't use data-testid in message component of antd

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
      userLogin(email, password)
        .then((response) => {
          showMessage("success", "Logged in Successfully", () => {
            setLoading(false);
            setUser(response.user);
          });
        })
        .catch((err) => {
          showMessage("error", "Invalid Credentials");
        });
    }
  };

  if (user) {
    return <Navigate to={from} />;
  } else {
    return (
      <section id="login-container" data-testid="login container">
        {contextHolder}
        <Row className="form-container" data-testid="container">
          <Col xs={22} sm={16} md={12} lg={8}>
            <div className="flex justify-center">
              <img src={funfox} alt="funfox" role="img" />
            </div>
            <Space direction="vertical" size="large" className="flex">
              <h2 className="text-2xl text-center my-1" role="heading">
                Login
              </h2>
              <Form
                data-testid="login form"
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
                      data-testid="email"
                      placeholder="example@gmail.com"
                      prefix={<MailTwoTone />}
                      className="py-2"
                    />
                  </Form.Item>

                  <Form.Item label="Password" name="password">
                    <Input.Password
                      data-testid="password"
                      prefix={<LockTwoTone />}
                      className="py-2"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      data-testid="login btn"
                      name="login"
                      type="primary"
                      htmlType="submit"
                      className="block w-full mt-4 py-2 h-auto text-lg"
                    >
                      Login
                    </Button>
                  </Form.Item>
                  <div className="flex justify-center">
                    <Link
                      className=" underline underline-offset-4 text-lg"
                      to={"/signup"}
                    >
                      Don't have an Account ? Signup
                    </Link>
                  </div>
                </Space>
              </Form>
            </Space>
          </Col>
        </Row>
      </section>
    );
  }
}
