import React from "react";
import { Row, Col, Button, Form, Input, Space, message } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import "./login.css";
export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  function showMessage(type, msgText) {
    messageApi.open({
      type: type,
      content: msgText,
    });
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    if (!values.email && !values.password) {
      showMessage("error", "Enter email and password");
    } else if (!values.email) {
      showMessage("error", "Email is Required");
    } else if (!values.password) {
      showMessage("error", "Password is Required");
    } else if (
      !values.email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      showMessage("error", "Invalid Email");
    }
  };

  return (
    <section id="login-container">
      {contextHolder}
      <Row className="form-container">
        <Col xs={22} sm={16} md={12} lg={8}>
          <Space direction="vertical" size="large" className="flex">
            <h2 className="text-2xl text-center text-white">
              Login to Your Account
            </h2>
            <Form
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
                    size="large"
                    placeholder="example@gmail.com"
                    prefix={<MailTwoTone />}
                  />
                </Form.Item>

                <Form.Item label="Password" name="password">
                  <Input.Password size="large" prefix={<LockTwoTone />} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="block w-full mt-4"
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
