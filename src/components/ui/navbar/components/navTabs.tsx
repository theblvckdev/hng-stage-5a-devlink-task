import React from "react";
import { FaLink } from "react-icons/fa6";

const NavbTabs = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) => {
  return (
    <>
      {active && (
        <button className="py-[11px] px-[24px] rounded-[8px] outline-none flex items-center gap-[8px] bg-lightPurple text-primary duration-300 ease-in font-instrumentSans font-semibold text-base leading-[24px]">
          {children}
        </button>
      )}

      {!active && (
        <button className="py-[11px] px-[24px] rounded-[8px] outline-none flex items-center gap-[8px] text-customGray duration-300 ease-in font-instrumentSans font-semibold text-base leading-[24px] hover:text-primary">
          {children}
        </button>
      )}
    </>
  );
};

export default NavbTabs;
