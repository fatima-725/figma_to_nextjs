import React from "react";
import Image from "next/image";
import footerImg from "../../public/assets/footerImg.svg";
import Logo from "../../public/assets/Logo.svg";
import facebook from "../../public/assets/facebook.svg";

const Section5 = () => {
  return (
    <div className="container mx-auto ">
      <Image src={footerImg} alt="footer img" />
      <div className="flex flex-row gap-2 mt-[74px]">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <Image src={Logo} alt="logo" />
            <p className="font-medium font-manrope text-[37px]">MAC</p>
          </div>
          <div className="font-roboto font-[400px] text-[#9B9B9C] text-[14px]">
            We offers a comprehensive suite of digital marketing services that
            cover all aspects of our online presence. From SEO and social media
            marketing to content creation and PPC advertising, they have the
            expertise and resources to handle our diverse marketing needs.
          </div>
          <div className="flex flex-row gap-10">
            <Image src={facebook} alt="icon" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium font-roboto text-[18px]">Navigation</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium font-roboto text-[18px]">Navigation</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
          <p className="font-roboto text-[14px]">Service</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Section5;
