"use client";

import React, { useEffect, useState } from "react";
import AuthInputFields from "./authInputFields";
import CustomButton from "@/app/components/ui/button/button";
import Link from "next/link";

interface AuthFormProperties {
  isLogin: boolean;
}

interface FormState {
  [key: string]: string;
}

const AuthForm = ({ isLogin }: AuthFormProperties) => {
  const [formState, setFormState] = useState<FormState>({});
  const [emailRequired, setEmailRequired] = useState<boolean>(false);
  const [passwordRequired, setPasswordRequired] = useState<boolean>(false);
  const [confirmPasswordRequired, setConfirmPasswordRequired] =
    useState<boolean>(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const updataInputRequiredState = () => {
      if (formState.email) setEmailRequired(false);
      if (formState.password) setPasswordRequired(false);
      if (formState.confirmPassword) setConfirmPasswordRequired(false);
    };

    updataInputRequiredState();
  }, [formState]);

  //handle login logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // create accoutn login
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // check email is not empty
    if (!formState.email) {
      setEmailRequired(true);
      return;
    }

    // check password is not empty
    if (!formState.password) {
      setPasswordRequired(true);
      return;
    }

    // check confirm password is not empty
    if (!formState.confirmPassword) {
      setConfirmPasswordRequired(true);
      return;
    }

    // validate password - check that confirm password is same as password
    if (formState.confirmPassword !== formState.password)
      return setPasswordNotMatch(true);

    setPasswordNotMatch(false);

    console.log("Validation passed");
  };

  return (
    <>
      <form
        onSubmit={isLogin ? handleLogin : handleSignUp}
        className="flex flex-col space-y-5"
      >
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm leading-[18px] font-instrumentSans text-darkGray"
          >
            Email address
          </label>
          <AuthInputFields
            type="email"
            name="email"
            placeholder="e.g alex@example.com"
            required={emailRequired}
            errorMessage={emailRequired ? `Can't be empty` : undefined}
            value={formState.email || ""}
            onchange={handleChange}
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
            name="password"
            required={
              passwordRequired ? true : passwordNotMatch ? true : undefined
            }
            errorMessage={
              passwordRequired
                ? `Can't be empty`
                : passwordNotMatch
                ? "Please check again"
                : undefined
            }
            value={formState.password || ""}
            onchange={handleChange}
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
              name="confirmPassword"
              type="password"
              placeholder="At least 8 characters"
              required={confirmPasswordRequired}
              errorMessage={
                confirmPasswordRequired ? `Can't be empty` : undefined
              }
              value={formState.confirmPassword || ""}
              onchange={handleChange}
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
