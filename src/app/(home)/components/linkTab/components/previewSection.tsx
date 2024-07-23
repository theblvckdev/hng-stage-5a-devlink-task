import Image from "next/image";
import React from "react";

const DefaulLinkBlock = () => {
  return (
    <>
      <div className="w-[237px] h-[44px] rounded-[8px] bg-defaultGray"></div>
      <div className="w-[237px] h-[44px] rounded-[8px] bg-defaultGray"></div>
      <div className="w-[237px] h-[44px] rounded-[8px] bg-defaultGray"></div>
      <div className="w-[237px] h-[44px] rounded-[8px] bg-defaultGray"></div>
      <div className="w-[237px] h-[44px] rounded-[8px] bg-defaultGray"></div>
    </>
  );
};

const PreviewSection = () => {
  return (
    <>
      <div className="w-[560px] h-full p-[100px] flex items-center justify-center bg-white rounded-[12px]">
        <div className="w-[307px] h-[631px] relative">
          <Image
            src="/media/svgs/mobile-preview.svg"
            width={307}
            height={631}
            alt="mobile previewer"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col gap-[56px] py-[70px] px-[30px]">
            {/* profile detais preview */}
            <div className="flex flex-col items-center justify-center gap-[25px]">
              <div className="h-[96px] w-[96px] bg-defaultGray rounded-full overflow-hidden"></div>
              <div className="flex flex-col gap-[13px] justify-center items-center">
                <div className="w-[160px] h-[16px] rounded-full bg-defaultGray"></div>
                <div className="w-[72px] h-[8px] rounded-full bg-defaultGray"></div>
              </div>
            </div>

            {/* link blocks */}
            <div className="flex flex-col gap-[20px]">
              <DefaulLinkBlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSection;
