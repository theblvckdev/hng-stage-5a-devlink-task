import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoComponent = ({ center }: { center?: boolean }) => {
  return (
    <>
      <Link href={"/"} className={`${center && "mx-auto"} outline-none w-fit`}>
        <Image
          src="/media/svgs/logo.svg"
          className="w-[182.5px] h-[40px]"
          width={182.5}
          height={40}
          alt="devlink logo"
        />
      </Link>
    </>
  );
};

export default LogoComponent;
