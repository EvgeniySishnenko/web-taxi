import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Button, Typography, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authUserRequest } from "../../modules/auth/actions";

const { Title, Text } = Typography;
function LoginForm(props) {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(authUserRequest(values, "register"));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onToggleForm = (e) => {
    e.preventDefault();
    props.onToggleForm("AuthForm");
  };
  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);
  return (
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
        <Title level={3}>Регистрация</Title>
        <Text>
          Уже зарегистрированы?{" "}
          <a onClick={onToggleForm} href="#">
            Войти
          </a>
        </Text>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your Email!",
            },
          ]}
          style={{ marginTop: 20 }}
        >
          <Input placeholder="Email*" required />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              min: 3,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input placeholder="Name*" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              min: 3,
              message: "Please input your surname!",
            },
          ]}
        >
          <Input placeholder="Surname*" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 3,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password*" />
        </Form.Item>

        {loading ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            Вход
          </Button>
        )}
      </Form>
    </Col>
  );
}
LoginForm.propTypes = {
  onToggleForm: PropTypes.func,
};
export default LoginForm;
