import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
];

const Section4 = () => {
  return (
    <div className="container mx-auto">
      <div className="flex py-[66px]  gap-[90px] bg-white rounded-[28px]">
        <div className="flex flex-col gap-[48px]">
          <p className="font-jakarta font-medium text-[48px]">
            Digital Marketing FAQs
          </p>
          <p className="font-jakarta font-medium text-[16px] text-[#878C91]">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <div className="flex gap-[48px] items-center">
            <button className="py-[17px] px-[16px] justify-center border rounded-[50px]">
              More Questions
            </button>
            <p className="py-[17px] px-[16px] justify-center underline rounded-[50px]">
              Contact Us
            </p>
          </div>
        </div>
        <div className="">
          {faq.map((item, index) => (
            <div key={index} className="divide-y-0 divide-y-reverse ">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
