import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  routeRequest,
  getRouteRequest,
  isToggleRoute,
} from "../../modules/route/actions";
import { Form, Input, Select, Button, Spin } from "antd";
const { Option } = Select;
function MapForm() {
  const { loading, addresses } = useSelector((state) => state.route);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const address = `route?address1=${values.address1}&address2=${values.address2}`;
    dispatch(getRouteRequest(address));
    dispatch(isToggleRoute(true));
  };

  useEffect(() => {
    dispatch(routeRequest("addressList"));
  }, []);

  return (
    <div className="map-form">
      <Form
        onFinish={onFinish}
        name="validate_other"
        initialValues={{
          remember: true,
        }}
        style={{ padding: 40 }}
      >
        {" "}
        <Form.Item
          name="address1"
          rules={[
            {
              required: true,
              message: "Please select your from!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a from"
            optionFilterProp="children"
          >
            {addresses &&
              addresses.map((item) => (
                <Option key={nanoid()} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="address2"
          rules={[
            {
              required: true,
              message: "Please select your to!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a to"
            optionFilterProp="children"
          >
            {addresses &&
              addresses.map((item) => (
                <Option key={nanoid()} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </Form.Item>
        {loading ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            Заказать такси
          </Button>
        )}
      </Form>
    </div>
  );
}
export default MapForm;
