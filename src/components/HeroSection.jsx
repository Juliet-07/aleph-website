import React from "react";
import Thrive from "../assets/Thrive_Today.svg";
import Scale from "../assets/Scale_Tomorrow.svg";

const HeroSection = ({
  backgroundGradient,
  textSize,
  // mainHeading,
  subHeading,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${backgroundGradient} py-20 px-4 md:px-0`}
    >
      {/* Overlapping Text */}
      <div className="relative text-center">
        {/* Main Text */}
        <div>
          <img src={Thrive} />
        </div>
        {/* <h1 className="relative text-[146px] font-extrabold uppercase tracking-wide  text-outline">
          {mainHeading}
        </h1> */}
        {/* Sub Text */}
        {/* <h2 className="absolute top-0 text-6xl font-bold text-white">
          {subHeading}
        </h2> */}
        <h2 className={`absolute top-0 ${textSize} font-primaryBold`}>
          {subHeading.map(({ text, color }, index) => (
            <span
              key={index}
              style={{ color: color }}
              className={`${color === "white" ? "text-white" : ""}`}
            >
              {text}{" "}
            </span>
          ))}
        </h2>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="w-[189px] md:w-[253px] h-[52px] md:h-[69px] mt-10 bg-[#FFC107] hover:bg-yellow-500 text-black font-primarySemibold rounded-[35px] transition-all duration-300"
      >
        {buttonLabel}
      </button>
      <div className="relative -bottom-[86px] md:-bottom-24">
        <img src={Scale} />
      </div>
    </div>
  );
};

export default HeroSection;
