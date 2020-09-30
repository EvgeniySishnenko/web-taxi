import React from "react";
import Header from "../Components/Header/Header";
import ProfileForm from "../Components/ProfileForm/ProfileForm";
import { Row } from "antd";

export default function Profile() {
  return (
    <>
      <Header />
      <Row className="h-100vh bg" justify="space-around" align="middle">
        <ProfileForm />
      </Row>
    </>
  );
}
