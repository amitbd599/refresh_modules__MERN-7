import React from "react";
import MenuBar from "../components/MenuBar";
import RegisterForm from "../components/RegisterForm";
import FooterBar from "../components/FooterBar";

const RegisterPage = () => {
  return (
    <>
      {/* MenuBar */}
      <MenuBar />

      {/* RegisterForm */}
      <RegisterForm />

      {/* FooterBar */}
      <FooterBar />
    </>
  );
};

export default RegisterPage;
