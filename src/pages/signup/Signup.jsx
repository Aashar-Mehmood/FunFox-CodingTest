import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form, Input, Space, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import funfox from "../../assets/funFoxRm.png";
import useAuth from "../../hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import { userSignup } from "../../services/auth";
import useFireStore from "../../hooks/useFireStore";
export default function Signup() {
  const [messageApi, contextHolder] = message.useMessage();
  const { user, setUser, setIsSigningUp, setUserName } = useAuth();
  const [creatingUser, setCreatingUser] = useState(false);
  function showMessage(type, msgText, onclose = () => null) {
    messageApi.open({
      type: type,
      content: msgText,
      onClose: onclose,
    });
  }

  const onFinish = (values) => {
    const { name, email, password } = values;
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      showMessage("error", "Invalid Email");
    } else if (password.length < 6) {
      showMessage("error", "Password should have atleast 6 characters");
    } else {
      setCreatingUser(true);
      setIsSigningUp(true);
      setUserName(name);
      userSignup(email, password)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          setCreatingUser(false);
          showMessage(
            "error",
            err?.message
              ? err?.message.split(":")[1]
              : "Failed to create account"
          );
        });
    }
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <section id="signup-container" data-testid="login container">
        {contextHolder}
        <Row className="form-container" data-testid="container">
          <Col xs={22} sm={16} md={12} lg={8}>
            <div className="flex justify-center">
              <img src={funfox} alt="CMPND" role="img" />
            </div>
            <Space direction="vertical" size="large" className="flex">
              <h2 className="text-2xl text-center my-1" role="heading">
                Create a New Account
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
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Name is required" }]}
                  >
                    <Input prefix={<UserOutlined />} className="py-2" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Email is required" }]}
                  >
                    <Input
                      placeholder="example@gmail.com"
                      prefix={<MailOutlined />}
                      className="py-2"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Password is required" },
                    ]}
                  >
                    <Input.Password
                      data-testid="password"
                      prefix={<LockOutlined />}
                      className="py-2"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      loading={creatingUser}
                      data-testid="login btn"
                      name="login"
                      type="primary"
                      htmlType="submit"
                      className="block w-full mt-4 py-2 h-auto text-lg"
                    >
                      Signup
                    </Button>
                  </Form.Item>

                  <div className="flex justify-center">
                    <Link
                      className=" underline underline-offset-4 text-lg"
                      to={"/login"}
                    >
                      Already have Account ? Login
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
