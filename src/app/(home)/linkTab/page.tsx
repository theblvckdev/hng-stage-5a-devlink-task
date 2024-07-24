import CustomButton from "@/components/ui/button/button";
import Image from "next/image";
import React from "react";
import { IoIosAdd } from "react-icons/io";

const LinkTab = () => {
  return (
    <>
      <div className="gap-4 bg-white h-full rounded-xl">
        <div className="p-10">
          <h2 className="text-darkGray text-3xl font-bold leading-10">
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

            <div className="bg-lightGray p-10 rounded-xl h-full flex gap-8 items-center justify-center flex-col">
              <Image
                src="/media/svgs/illustration.svg"
                alt="tablet illustration"
                height={160}
                width={249.53}
              />

              <h2 className="text-darkGray text-3xl font-bold leading-10">
                Let’s get you started
              </h2>

              <p className="text-center text-base leading-6 font-normal text-customGray w-[488px]">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 py-5 border-t border-gray-300">
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
