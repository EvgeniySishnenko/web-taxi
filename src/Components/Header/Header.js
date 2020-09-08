import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Row } from "antd";
import logo from "../../images/home-logo.svg";

const { Header, Content } = Layout;

function HeaderComponent() {
  return (
    <Header>
      <Row className="flex-end">
        <div className="logo" style={{ width: 100 }}>
          <img src={logo} alt="" />
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/map">Карта</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/profile">Профиль</NavLink>
          </Menu.Item>
          <Menu.Item key="3">Выйти</Menu.Item>
        </Menu>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
