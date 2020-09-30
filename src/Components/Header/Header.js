import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../modules/auth/actions";

import { Layout, Menu, Row } from "antd";
import logo from "../../images/home-logo.svg";

const { Header, Content } = Layout;

function HeaderComponent() {
  const [currentItem, setCurrentItem] = useState({
    current: "1",
  });
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logoutUser());
  };

  // const handleClick = (e) => {
  //   setCurrentItem({
  //     current: e.key,
  //   });
  // };
  return (
    <Header className="header">
      <Row className="flex-end">
        <div className="logo" style={{ width: 100 }}>
          <img src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          // onClick={handleClick}
          // selectedKeys={[currentItem.current]}
        >
          <Menu.Item key="1">
            {/* Карта */}
            <NavLink to="/map">Карта</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/profile">Профиль</NavLink>
          </Menu.Item>
          <Menu.Item onClick={userLogout} key="3">
            Выйти
          </Menu.Item>
        </Menu>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
