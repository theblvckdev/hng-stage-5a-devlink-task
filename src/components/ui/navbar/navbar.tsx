import React from "react";
import LogoComponent from "../../common/logo";
import NavbTabs from "./components/navTabs";
import { LuLink } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import CustomButton from "../button/button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="bg-white md:rounded-[12px] w-full p-[16px] flex justify-between items-center flex-row">
        <div className="md:block hidden">
          <LogoComponent height={32} width={146} />
        </div>

        <div className="md:hidden block">
          <Link href={"/"} className={`outline-none w-fit`}>
            <Image
              src="/media/svgs/logo-mobile.svg"
              width={32}
              height={32}
              alt="devlink logo"
            />
          </Link>
        </div>

        <div className="flex flex-row items-center lg:gap-[16px]">
          <NavbTabs active={true}>
            <LuLink className="text-base" />
            <div className="md:block hidden">Links</div>
          </NavbTabs>

          <NavbTabs active={false}>
            <FaRegCircleUser className="text-base" />
            <div className="md:block hidden">Profile Details</div>
          </NavbTabs>
        </div>

        <div className="md:block hidden">
          <Link href={"/preview"} className="outline-none no-underline">
            <CustomButton variant="secondary">Preview</CustomButton>
          </Link>
        </div>

        <div className="md:hidden block">
          <Link href={"/preview"} className="outline-none no-underline">
            <button
              className={`w-fit py-[11px] px-[16px] outline-none duration-300 ease-in rounded-[8px] ring-1 ring-primary text-primary text-base font-semibold leading-[24px] font-instrumentSans bg-transparent hover:bg-lightPurple disabled:opacity-[25%]`}
            >
              <MdOutlineRemoveRedEye className="h-[20px] w-[20px]" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
