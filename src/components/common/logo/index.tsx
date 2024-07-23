import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoComponent = ({
  center,
  width,
  height,
}: {
  center?: boolean;
  width: number;
  height: number;
}) => {
  return (
    <>
      <Link href={"/"} className={`${center && "mx-auto"} outline-none w-fit`}>
        <Image
          src="/media/svgs/logo.svg"
          width={!width ? 20 : width}
          height={!height ? 20 : height}
          alt="devlink logo"
        />
      </Link>
    </>
  );
};

export default LogoComponent;
