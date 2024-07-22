"use client";

import LogoComponent from "@/app/components/common/logo";
import React from "react";
import AuthFormLayout from "../components/authFormLayout";
import AuthForm from "../components/authForm";

const SignUpPage = () => {
  return (
    <>
      <main className="h-full w-screen flex flex-col md:items-center justify-center md:space-y-8 space-y-3 md:bg-background bg-transparent md:py-16 py-10">
        <div className="md:block hidden">
          <LogoComponent center={true} />
        </div>

        <div className="md:hidden block px-[32px]">
          <LogoComponent center={false} />
        </div>

        <AuthFormLayout>
          <div>
            <h1 className="text-darkGray capitalize font-[700] md:text-[32px] text-[24px] md:leading-[48px] leading-[36px] font-instrumentSans">
              Create account
            </h1>
            <p className="text-[16px] leading-[24px] font-instrumentSans text-customGray">
              Let’s get you started sharing your links!
            </p>
          </div>

          <div className="mt-10">
            <AuthForm isLogin={false} />
          </div>
        </AuthFormLayout>
      </main>
    </>
  );
};

export default SignUpPage;
