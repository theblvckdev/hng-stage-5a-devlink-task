"use client";

import React, { useEffect, useState } from "react";
import AuthInputFields from "./authInputFields";
import CustomButton from "@/app/components/ui/button/button";
import Link from "next/link";

interface AuthFormProperties {
  isLogin: boolean;
}

interface FormState {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const AuthForm = ({ isLogin }: AuthFormProperties) => {
  const [formState, setFormState] = useState<FormState>({});
  const [validationErrors, setValidationErrors] = useState<FormState>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValidationErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormState = {};
    if (!formState.email) errors.email = "Can't be empty";
    if (!formState.password) errors.password = "Can't be empty";
    if (!isLogin && !formState.confirmPassword)
      errors.confirmPassword = "Can't be empty";
    if (formState.password !== formState.confirmPassword)
      errors.confirmPassword = "Please check again";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLogin) {
        handleLogin();
      } else {
        handleSignUp();
      }
    }
  };

  const handleLogin = () => {
    // Implement login logic
  };

  const handleSignUp = () => {
    // Implement signup logic
    console.log("Validation passed");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
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
          required={validationErrors.email ? true : false}
          errorMessage={validationErrors.email}
          value={formState.email || ""}
          onchange={handleChange}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label
          htmlFor="password"
          className="text-sm leading-[18px] font-instrumentSans text-darkGray"
        >
          {isLogin ? "Enter your password" : "Create password"}
        </label>
        <AuthInputFields
          type="password"
          name="password"
          placeholder={
            isLogin ? "Enter your password" : "At least 8 characters"
          }
          required={validationErrors.password ? true : false}
          errorMessage={validationErrors.password}
          value={formState.password || ""}
          onchange={handleChange}
        />
      </div>

      {!isLogin && (
        <>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm leading-[18px] font-instrumentSans text-darkGray"
            >
              Confirm password
            </label>
            <AuthInputFields
              type="password"
              name="confirmPassword"
              placeholder="At least 8 characters"
              required={validationErrors.confirmPassword ? true : false}
              errorMessage={validationErrors.confirmPassword}
              value={formState.confirmPassword || ""}
              onchange={handleChange}
            />
          </div>
          <div className="text-sm text-customGray leading-[18px] font-instrumentSans">
            Password must contain at least 8 characters
          </div>
        </>
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
            <Link href="/auth/sign-up" className="no-underline text-primary">
              Create account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/auth/login" className="no-underline text-primary">
              Login
            </Link>
          </>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
