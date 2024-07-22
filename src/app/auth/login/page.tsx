import LogoComponent from "@/app/components/common/logo";
import React from "react";
import AuthFormLayout from "../components/authFormLayout";
import AuthForm from "../components/authForm";

const LoginPage = () => {
  return (
    <>
      <main className="h-screen w-screen flex flex-col items-center justify-center gap-y-8 bg-background">
        <LogoComponent center={true} />

        <AuthFormLayout>
          <div>
            <h1 className="text-darkGray capitalize font-[700] text-[32px] leading-[48px] font-instrumentSans">
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
      </main>
    </>
  );
};

export default LoginPage;
