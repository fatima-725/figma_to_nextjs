"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageTestimonials from "../../public/assets/ImageTestimonials.svg";
import LeftArrow from "../../public/assets/LeftArrow.svg";
import RightArrow from "../../public/assets/RightArrow.svg";

const testimonials = [
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    designation: "CEO of Basecamp Corp",
    image: ImageTestimonials,
  },
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer2",
    designation: "CEO of Basecamp Corp",
    image: ImageTestimonials,
  },
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer3",
    designation: "CEO of Basecamp Corp",
    image: ImageTestimonials,
  },
];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex <= 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  // The current testimonial to display
  const currentTestimonial = testimonials[currentIndex];
  return (
    <div className="container mx-auto mt-[85px]">
      <div>
        <div className="flex flex-col gap-[74px]">
          <div className="font-jakarta text-[36px] font-medium">
            {currentTestimonial.text}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={ImageTestimonials} alt="image" />
              <div className="flex flex-col">
                <p className="font-jakarta text-[20px] font-medium">
                  {currentTestimonial.author}
                </p>
                <p className="font-jakarta text-[16px] text-[#878C91] font-medium">
                  {currentTestimonial.designation}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src={LeftArrow} alt="arrow" onClick={handlePrev} />
              <div>
                0{currentIndex + 1} / 0{testimonials.length}
              </div>
              <Image src={RightArrow} alt="arrow" onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
