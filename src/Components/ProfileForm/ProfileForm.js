import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { cardUserRequest } from "../../modules/profile/actions";

import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Card,
  Spin,
  message,
  InputNumber,
} from "antd";
const { Title, Text } = Typography;

function ProfileForm() {
  const [input, setInput] = useState();
  const { loading, error, cardNumber, expiryDate, cardName, CVC } = useSelector(
    (state) => state.card
  );
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(cardUserRequest(values, "card"));
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  function onChange(e) {
    let value = e.target.value;
    let newState = {
      mask: "9999-9999-9999-9999",
      value: value,
    };
    if (/^3[47]/.test(value)) {
      newState.mask = "9999-999999-99999";
    }
    setInput(newState);
  }

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);
  return (
    <Col className="bg-form" span={12}>
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
                name="cardNumber"
                rules={[
                  {
                    required: true,
                    message: "Это обязательное поле",
                  },
                ]}
                style={{ marginTop: 20 }}
              >
                <InputMask
                  {...input}
                  onChange={onChange}
                  className="ant-input"
                  placeholder="Введите номер карты*"
                  defaultValue={cardNumber}
                />
              </Form.Item>
              <Form.Item
                name="expiryDate"
                rules={[
                  {
                    required: true,
                    message: "Это обязательное поле",
                  },
                ]}
                style={{ marginTop: 20 }}
              >
                <InputMask
                  mask="99/99"
                  className="ant-input"
                  placeholder="Срок действия*"
                  defaultValue={expiryDate}
                />
              </Form.Item>
            </Card>
          </Col>
          <Col span={11}>
            <Card>
              <Form.Item
                name="cardName"
                rules={[
                  {
                    required: true,
                    message: "Это обязательное поле",
                  },
                ]}
                style={{ marginTop: 20 }}
              >
                <InputMask
                  placeholder="Имя владельца*"
                  className="ant-input"
                  defaultValue={cardName}
                />
              </Form.Item>
              <Form.Item
                name="CVC"
                rules={[
                  {
                    required: true,
                    message: "Это обязательное поле",
                  },
                ]}
                style={{ marginTop: 20 }}
              >
                <InputMask
                  mask="999"
                  className="ant-input card-inp-mask"
                  placeholder="CVC"
                  defaultValue={CVC}
                />
              </Form.Item>
            </Card>
          </Col>
        </Row>
        {loading ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        )}
      </Form>
    </Col>
  );
}

export default ProfileForm;
