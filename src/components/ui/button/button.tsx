import React from "react";

interface CustomButtonProperty {
  variant: "primary" | "secondary";
  disabled?: boolean;
  onclick?: () => void;
  width?: string;
  children: React.ReactNode;
}

const CustomButton = ({
  variant,
  width,
  disabled,
  onclick,
  children,
}: CustomButtonProperty) => {
  return (
    <>
      {variant === "primary" && (
        <button
          disabled={disabled}
          className={`${
            width ? width : "w-fit"
          } py-[11px] px-[27px] outline-none duration-300 ease-in rounded-[8px] ring-1 ring-primary hover:ring-primaryHover text-white text-base font-semibold leading-[24px] font-instrumentSans bg-primary hover:bg-primaryHover hover:shadow-customeShadow hover:shadow-primaryHover disabled:opacity-[25%]`}
        >
          {children}
        </button>
      )}

      {variant === "secondary" && (
        <button
          disabled={disabled}
          className={`${
            width ? width : "w-fit"
          } py-[11px] px-[27px] outline-none duration-300 ease-in rounded-[8px] ring-1 ring-primary text-primary text-base font-semibold leading-[24px] font-instrumentSans bg-transparent hover:bg-lightPurple disabled:opacity-[25%]`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CustomButton;
