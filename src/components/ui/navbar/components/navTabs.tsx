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
        <button className="py-2.5 px-6 rounded-lg outline-none flex items-center gap-2 bg-lightPurple text-primary duration-300 ease-in font-instrumentSans font-semibold text-sm leading-6">
          {children}
        </button>
      )}

      {!active && (
        <button className="py-2.5 px-6 rounded-lg outline-none flex items-center gap-2 bg-transparent text-customGray hover:text-primary duration-300 ease-in font-instrumentSans font-semibold text-sm leading-6">
          {children}
        </button>
      )}
    </>
  );
};

export default NavbTabs;
