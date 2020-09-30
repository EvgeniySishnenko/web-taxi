import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { authUserRequest } from "../../modules/auth/actions";
import { Col, Form, Input, Button, Typography, Spin, message } from "antd";
const { Title, Text } = Typography;
function AuthForm(props) {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onToggleForm = (e) => {
    e.preventDefault();
    props.onToggleForm("LoginhForm");
  };
  const onFinish = (values) => {
    dispatch(authUserRequest(values, "auth"));
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
        // onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        style={{ padding: 40 }}
      >
        <Title level={3}>Вход</Title>
        <Text>
          Новый пользователь?{" "}
          <a onClick={onToggleForm} href="#">
            Зарегистрируйтесь
          </a>
        </Text>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{ marginTop: 20 }}
        >
          <Input placeholder="Email*" name="email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              min: 3,
            },
          ]}
        >
          <Input.Password placeholder="Password*" name="password" />
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
AuthForm.propTypes = {
  onToggleForm: PropTypes.func,
};
export default AuthForm;
