import "./login.css";
import React from "react";
import { Row, Col, Typography, Button, Form, Input, Space } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
const { Title } = Typography;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function Login() {
  return (
    <section id="login-container">
      <Row className="form-container">
        <Col xs={22} sm={16} md={12} lg={8}>
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Title level={2}>Login</Title>
            <Form
              name="login"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Space
                direction="vertical"
                size="small"
                style={{ display: "flex" }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "Enter a valid email!",
                    },
                  ]}
                >
                  <Input size="large" prefix={<MailTwoTone />} />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" prefix={<LockTwoTone />} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large">
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
