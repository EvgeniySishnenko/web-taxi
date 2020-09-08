import React from "react";
import { Row, Col, Form, Input, Button, Typography, Card } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../images/home-logo.svg";
const { Title, Text } = Typography;

function Profile() {
  const onFinish = (values) => {
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <Row className="h-100vh bg" justify="space-around" align="middle">
      <Col className="bg-form" span={8}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ padding: 40 }}
        >
          <Title level={3}>Профиль</Title>
          <Text>Способ оплаты</Text>
          <Row justify="space-between">
            <Col span={11}>
              <Card>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Это обязательное поле",
                    },
                  ]}
                  style={{ marginTop: 20 }}
                >
                  <Input placeholder="Номер карты*" />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Это обязательное поле",
                    },
                  ]}
                  style={{ marginTop: 20 }}
                >
                  <Input placeholder="Срок действия*" />
                </Form.Item>
              </Card>
            </Col>
            <Col span={11}>
              <Card>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Это обязательное поле",
                    },
                  ]}
                  style={{ marginTop: 20 }}
                >
                  <Input placeholder="Имя владельца*" />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Это обязательное поле",
                    },
                  ]}
                  style={{ marginTop: 20 }}
                >
                  <Input placeholder="CVC*" />
                </Form.Item>
              </Card>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Созранить
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Profile;
