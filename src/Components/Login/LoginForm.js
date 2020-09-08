import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../images/home-logo.svg";
const { Title, Text } = Typography;
function LoginForm() {
  const onFinish = (values) => {
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <Row className="h-100vh bg" justify="space-around" align="middle">
      <Col span={4}>
        <div className="HomeLogo">
          <img src={logo} />
        </div>
      </Col>
      <Col className="bg-form" span={7}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ padding: 40 }}
        >
          <Title level={3}>Вход</Title>
          <Text>
            Новый пользователь? <NavLink to="/auth">Зарегистрируйтесь</NavLink>
          </Text>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
            style={{ marginTop: 20 }}
          >
            <Input placeholder="Name*" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password*" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Вход
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginForm;
