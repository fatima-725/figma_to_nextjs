import React from "react";
import Image from "next/image";
import Hero from "../../public/assets/Hero.svg";
import RightArrow from "../../public/assets/RightArrow.svg";
import AfterPayLogo from "../../public/assets/AfterPayLogo.svg";

const HeroSection = () => {
  return (
    <div className="container mx-auto justify-between lg:flex lg:flex-row w-full flex-col  gap-8 ">
      <div className="flex flec-col ">
        <div className="gap-4">
          <p className="font-[600px] lg:text-[72px] font-jakarta text-[24px]">
            Stay ahead of the curve with our forward-thinking{" "}
          </p>
          <p className="font-jakarta font-[600px] text-[16px] text-[#878C91]">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development. focused on understanding you.
          </p>
          <br></br>
          <div className="flex gap-8 items-center ">
            <button className="bg-black text-white flex rounded-[70px] gap-8 py-[16px] px-[32px]">
              Schedule call <Image src={RightArrow} alt="right arrow" />
            </button>
            <div className="text-[16px] font-medium font-jakarta underline">
              View case study
            </div>
          </div>
          <br></br>
          <div className="flex gap-[64px] items-center">
            <div className="font-jakarta font-medium text-[14px]">
              Trusted by the worlds biggest brands
            </div>
            <div className="flex gap-[27px]">
              <Image src={AfterPayLogo} alt="logo" />
              <Image src={AfterPayLogo} alt="logo" />
              <Image src={AfterPayLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <Image src={Hero} alt="Hero" className="" />
    </div>
  );
};

export default HeroSection;
