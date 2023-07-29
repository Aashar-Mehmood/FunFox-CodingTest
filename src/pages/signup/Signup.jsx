import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Space, message } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import "./signup.css";
import funfox from "../../assets/funFoxRm.png";
import useAuth from "../../hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import { userSignup } from "../../services/auth";

export default function Signup() {
  const [messageApi, contextHolder] = message.useMessage();
  const { user, setUser } = useAuth();
  const [creatingUser, setCreatingUser] = useState(false);
  function showMessage(type, msgText, onclose = () => null) {
    messageApi.open({
      type: type,
      content: msgText,
      onClose: onclose,
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
      creatingUser(true);
      userSignup(email, password)
        .then((response) => {
          showMessage("success", "Registered Successfully", () => {
            setCreatingUser(false);
            setUser(response.user);
          });
        })
        .catch((err) => {
          showMessage("error", "Failed to create account");
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
              <h2
                className="text-2xl text-center text-white my-1"
                role="heading"
              >
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
                  <Form.Item label="Email" name="email">
                    <Input
                      data-testid="email"
                      placeholder="example@gmail.com"
                      prefix={<MailTwoTone />}
                      className="py-2"
                      autoComplete="false"
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
                      className="text-white underline underline-offset-4 text-lg"
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
