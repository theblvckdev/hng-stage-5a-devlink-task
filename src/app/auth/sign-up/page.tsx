"use client";

import LogoComponent from "@/app/components/common/logo";
import React from "react";
import AuthFormLayout from "../components/authFormLayout";
import AuthForm from "../components/authForm";

const SignUpPage = () => {
  return (
    <>
      <main className="h-full w-screen flex flex-col items-center justify-center gap-y-8 bg-background py-16">
        <LogoComponent center={true} />

        <AuthFormLayout>
          <div>
            <h1 className="text-darkGray capitalize font-[700] text-[32px] leading-[48px] font-instrumentSans">
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
