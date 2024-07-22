"use client";

import React, { useState } from "react";
import AuthInputFields from "./authInputFields";
import CustomButton from "@/app/components/ui/button/button";
import Link from "next/link";

interface AuthFormProperties {
  onsubmit?: () => void;
  isLogin: boolean;
}

const AuthForm = ({ onsubmit, isLogin }: AuthFormProperties) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <>
      <form onSubmit={onsubmit} className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm leading-[18px] font-instrumentSans text-darkGray"
          >
            Email address
          </label>
          <AuthInputFields
            type="email"
            placeholder="e.g alex@example.com"
            required={false}
            errorMessage="Can't be empty"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm leading-[18px] font-instrumentSans text-darkGray"
          >
            Create password
          </label>
          <AuthInputFields
            type="password"
            placeholder={
              isLogin ? "Enter your password" : "At least 8 characters"
            }
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isLogin && (
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm leading-[18px] font-instrumentSans text-darkGray"
            >
              Confirm password
            </label>
            <AuthInputFields
              type="password"
              required={false}
              errorMessage=""
              placeholder="At least 8 characters"
              value={confirmPassword}
              onchange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        {!isLogin && (
          <div className="text-sm text-customGray leading-[18px] font-instrumentSans">
            Password must contail at least 8 characters
          </div>
        )}

        <div>
          <CustomButton variant="primary" disabled={false} width="w-full">
            {isLogin ? "Login" : "Create new account"}
          </CustomButton>
        </div>

        <div className="w-fit mx-auto text-base text-center leading-[24px] text-customGray font-instrumentSans">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href={"/auth/sign-up"}
                className="no-underline text-primary"
              >
                Create account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href={"/auth/login"} className="no-underline text-primary">
                Login
              </Link>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default AuthForm;
