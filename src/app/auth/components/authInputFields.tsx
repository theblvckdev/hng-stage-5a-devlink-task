import Image from "next/image";
import React from "react";

interface AuthInputFieldsProperties {
  type: string;
  value?: string;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// mail icon component
const MailIcon = () => {
  return (
    <Image
      src="/media/svgs/mail-icon.svg"
      className="w-[16px] h-[16px]"
      height={16}
      width={16}
      alt="svg mail icon"
    />
  );
};

// lock icon component
const LockIcon = () => {
  return (
    <Image
      src="/media/svgs/lock-icon.svg"
      className="w-[16px] h-[16px]"
      height={16}
      width={16}
      alt="svg lock icon"
    />
  );
};

const AuthInputFields = ({
  onchange,
  placeholder,
  type,
  value,
  required,
  errorMessage,
}: AuthInputFieldsProperties) => {
  return (
    <>
      <div
        className={`flex gap-[12px] relative flex-row duration-300 ease-in items-center py-3 px-4 rounded-lg bg-transparent ring-1 font-instrumentSans ${
          required ? "ring-error" : "ring-border"
        } text-base leading-6 text-darkGray w-full`}
      >
        {type === "email" && <MailIcon />}
        {type === "password" && <LockIcon />}

        <input
          type={type}
          value={value}
          onChange={onchange}
          placeholder={placeholder}
          className="outline-none box-border w-full"
        />

        {required && (
          <div className="text-sm leading-[18px] text-error absolute right-0 top-[50%] mr-4 -translate-y-[50%]">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthInputFields;
