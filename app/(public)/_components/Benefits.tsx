"use client";
import { useState } from "react";
import { AiFillSafetyCertificate, AiOutlineSafety } from "react-icons/ai";
import { BsAlarmFill } from "react-icons/bs";
import { FiStar, FiTarget } from "react-icons/fi";

export default function Benefit() {
  const benefits = [
    {
      title: "Easy",
      icon: <FiTarget color="#DAC0A3" className="w-[40px] md:w-[80px] lg:w-[120px] transition-all xl:w-[180px] h-[auto]" />,
      description: "Achieve tasks effortlessly with our intuitive solutions.",
    },
    {
      title: "Fantastic!",
      icon: <FiStar color="#DAC0A3" className="w-[40px] md:w-[80px] lg:w-[120px] transition-all xl:w-[180px] h-[auto]" />,
      description:
        "Experience excellence in every aspect with our amazing services.",
    },
    {
      title: "Discipline",
      icon: <BsAlarmFill color="#DAC0A3" className="w-[40px] md:w-[80px] lg:w-[120px] transition-all xl:w-[180px] h-[auto]" />,
      description: "Stay organized and on track with our structured approach.",
    },
    {
      title: "Safe",
      icon: <AiOutlineSafety color="#DAC0A3" className="w-[40px] md:w-[80px] lg:w-[120px] transition-all xl:w-[180px] h-[auto]" />,
      description:
        "Ensure security and peace of mind with our reliable measures.",
    },
  ];
  const [clickedBenefit, setClickedBenefit] = useState<{
    title: string;
    description: string;
  }>({
    title: benefits[0].title,
    description: benefits[0].description,
  });
  return (
    <section
      id="benefits"
      className="h-fit w-full gap-y-4 md:gap-y-10 pb-24 px-6 md:px-10 lg:px-20 flex flex-col items-center"
    >
      {/* <div className=" gap-y-4 flex flex-col"> */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-[#102C57]">
        Good Benefits
      </h1>
      {/* <p className="text-xl font-medium">These are the benefits that you would get if using our app</p> */}
      {/* </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 py-10 w-full md:w-fit gap-y-4 md:gap-y-10 gap-x-4 md:gap-x-10">
        {benefits &&
          benefits.map((benefit, index) => (
            <div
              onClick={() => {
                setClickedBenefit({
                  title: benefit.title,
                  description: benefit.description,
                });
              }}
              className="bg-[#FEFAF6] hover:animate-boing-boing items-center cursor-pointer flex flex-col gap-y-4 p-4 shadow-md rounded-2xl"
              key={index}
            >
              <h2 className="text-center md:text-xl lg:text-3xl font-semibold text-[#DAC0A3]">
                {benefit.title}
              </h2>
              <div className="bg-[#FFFFFF] w-fit shadow-sm md:w-fit p-2 md:p-4 rounded-2xl">
                {benefit.icon}
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center gap-y-4 text-[#DAC0A3]  text-center">
        <h2 className="text-3xl font-semibold capitalize">
          {clickedBenefit.title}
        </h2>
        <p>{clickedBenefit.description}</p>
      </div>
    </section>
  );
}