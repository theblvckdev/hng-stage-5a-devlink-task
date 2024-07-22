import React from "react";

const AuthFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-[476px] w-full bg-white h-fit md:p-[40px] p-[32px] rounded-[12px]">
        {children}
      </div>
    </>
  );
};

export default AuthFormLayout;
