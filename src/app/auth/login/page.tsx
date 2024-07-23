import React from "react";
import AuthFormLayout from "../components/authFormLayout";
import AuthForm from "../components/authForm";
import LogoComponent from "@/components/common/logo";

const LoginPage = () => {
  return (
    <>
      <div className="md:block hidden">
        <LogoComponent width={182.5} height={40} center={true} />
      </div>

      <div className="md:hidden block px-[32px]">
        <LogoComponent width={182.5} height={40} center={false} />
      </div>

      <AuthFormLayout>
        <div>
          <h1 className="text-darkGray capitalize font-[700] md:text-[32px] text-[24px] md:leading-[48px] leading-[36px] font-instrumentSans">
            Login
          </h1>
          <p className="text-[16px] leading-[24px] font-instrumentSans text-customGray">
            Add your details below to get back into the app
          </p>
        </div>

        <div className="mt-10">
          <AuthForm isLogin={true} />
        </div>
      </AuthFormLayout>
    </>
  );
};

export default LoginPage;
