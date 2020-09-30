import React, { useState } from "react";
// import Header from "../Components/Header/Header";
import LoginForm from "../Components/Login/LoginForm";
import AuthForm from "../Components/Login/AuthForm";
import { Row, Col } from "antd";
import logo from "../images/home-logo.svg";

export default function Login() {
  const [toggleForm, setToggleForm] = useState("AuthForm");

  function onToggleForm(val) {
    setToggleForm(val);
  }
  return (
    <>
      {/* <Header /> */}
      <Row className="h-100vh bg" justify="space-around" align="middle">
        <Col span={4}>
          <div className="HomeLogo">
            <img src={logo} />
          </div>
        </Col>
        {toggleForm === "AuthForm" ? (
          <AuthForm onToggleForm={onToggleForm} />
        ) : (
          <LoginForm onToggleForm={onToggleForm} />
        )}
      </Row>
    </>
  );
}
