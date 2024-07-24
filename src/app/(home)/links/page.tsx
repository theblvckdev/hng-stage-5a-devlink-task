import CustomButton from "@/components/ui/button/button";
import Image from "next/image";
import React from "react";
import { IoIosAdd } from "react-icons/io";

const LinkTab = () => {
  return (
    <>
      <div className="gap-4 bg-white h-full rounded-xl w-full">
        <div className="md:p-10 p-6">
          <h2 className="text-darkGray md:text-3xl text-[24px] font-bold leading-10">
            Customize your links
          </h2>
          <h5 className="text-base text-customGray leading-6 font-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </h5>

          <div className="mt-10 flex flex-col gap-6">
            <CustomButton variant="secondary" disabled={false} width="w-full">
              <div className="flex items-center justify-center">
                <IoIosAdd />
                <div>Add new link</div>
              </div>
            </CustomButton>

            <div className="bg-lightGray md:p-10 p-5 rounded-xl h-full flex md:gap-8 gap-6 items-center justify-center flex-col">
              <div className="md:block hidden">
                <Image
                  src="/media/svgs/illustration.svg"
                  alt="tablet illustration"
                  // className="md:w-40 md:h-[249.53px] h-[80px] w-[124.77px]"
                  height={160}
                  width={249.53}
                />
              </div>

              <div className="md:hidden block">
                <Image
                  src="/media/svgs/illustration.svg"
                  alt="tablet illustration"
                  // className="md:w-40 md:h-[249.53px] h-[80px] w-[124.77px]"
                  height={100}
                  width={200}
                />
              </div>

              <h2 className="text-darkGray md:text-3xl text-[24px] font-bold leading-10">
                Let’s get you started
              </h2>

              <p className="text-center text-base leading-6 font-normal text-customGray md:w-[488px]">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-10 p-6 py-6 border-t border-gray-300">
          <div className="w-fit ml-auto">
            <CustomButton variant="primary" disabled={false}>
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTab;
