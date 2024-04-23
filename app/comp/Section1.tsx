import React from "react";
import Image from "next/image";
import Sec1_Img1 from "../../public/assets/Sec1_Img1.svg";
import Sec1_Img2 from "../../public/assets/Sec1_Img2.svg";

const Section1 = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8 items-center ">
        <div className="font-jakarta font-medium text-[48px]">
          Provide the best service with out of the box ideas
        </div>
        <div className="font-jakarta font-medium text-[#878C91] text-[16px] ">
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <Image src={Sec1_Img1} alt="img 1" />
        <Image src={Sec1_Img2} alt="img 2" />
      </div>
    </div>
  );
};

export default Section1;
