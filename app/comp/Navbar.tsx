import React from "react";
import Image from "next/image";
import BellIcon from "../../public/assets/BellIcon.svg";
import Logo from "../../public/assets/Logo.svg";
import DownArrow from "../../public/assets/DownArrow.svg";

const navlink = [
  { name: "Service", img: DownArrow },
  { name: "Agency", img: DownArrow },
  { name: "Case Study", img: DownArrow },
  { name: "Resources", img: DownArrow },
  { name: "Contract" },
];

const Navbar = () => {
  return (
    <div className="container mx-auto justify-between mt-[30px] flex">
      <div className="flex gap-[74px] justify-between">
        <div className="flex gap-2 items-center">
          <Image src={Logo} alt="Logo" />
          <p className="text-[24px] font-[700px] font-mono w-[33px] h-[33px] justify-center">
            MAC
          </p>
        </div>
        <div className="lg:flex gap-4 hidden">
          {navlink.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{item.name}</span>
              {item.img && <Image src={item.img} alt={`${item.name}`} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-[50px] justify-center border-2 py-[13px] px-[16px]  border-black text-[16px] font-bold">
          Get Started
        </button>
        <Image
          alt="Bell Icon"
          src={BellIcon}
          className="bg-[#010205] justify-center rounded-full flex-shrink "
        />
      </div>
    </div>
  );
};

export default Navbar;
