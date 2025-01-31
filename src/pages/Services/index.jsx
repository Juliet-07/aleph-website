import React from "react";
import HeroSection from "../../components/HeroSection";
import Business from "../../assets/business.svg";
import Finance from "../../assets/finance.png";
import Brand from "../../assets/brand.png";
import Tech from "../../assets/technology.png";
import House from "../../assets/property.png";
import Venture from "../../assets/venture.png";
import { BsArrowRight } from "react-icons/bs";
import BG from "../../assets/bgThrive.svg";
import BGMobile from "../../assets/bgThriveMobile.svg";
import WaterMark from "../../assets/water-mark.svg";
import Africa from "../../assets/africa.svg";
import ETI from "../../assets/eti.svg";
import Training from "../../assets/training.svg";
import BusinessScale from "../../assets/business-scale.svg";
import Market from "../../assets/market.svg";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: (
        <img
          src={Business}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Business Consulting",
      path: "/services/business-consulting",
    },
    {
      icon: (
        <img
          src={Finance}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Financial Management & Advisory",
      path: "/services/finance-services",
    },
    {
      icon: (
        <img
          src={Brand}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Branding & Public Relations",
      path: "/services/branding-services",
    },
    {
      icon: (
        <img
          src={Tech}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Custom Technology Solutions",
      path: "/services/custom-tech-services",
    },
    {
      icon: (
        <img
          src={House}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Real Estate Services",
      path: "/services/real-estate-services",
    },
    {
      icon: (
        <img
          src={Venture}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Venture Capital & Investment",
      path: "/services/venture-capital-services",
    },
    {
      icon: (
        <img
          src={Africa}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Pan-African Startup Ecosystem Development",
      path: "/services/pan-african-startup-ecosystem",
    },
    {
      icon: (
        <img
          src={ETI}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Emerging Technology Integration",
      path: "/services/tech-integration",
    },
    {
      icon: (
        <img
          src={Training}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Training & Development",
      path: "/services/training-services",
    },
    {
      icon: (
        <img
          src={Market}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Research & Market Insights",
      path: "/services/research-services",
    },
    {
      icon: (
        <img
          src={BusinessScale}
          alt="Brand Icon"
          className="w-[21px] md:w-[37px] h-[21px] md:h-[37px]"
        />
      ),
      text: "Business Scaling Services",
      path: "/services/business-scaling",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        textSize="text-2xl md:text-5xl"
        subHeading={[
          { text: "Let's Partner With Your Business To", color: "white" },
          { text: "Thrive", color: "#FFC107" },
          { text: "And", color: "white" },
          { text: "Scale", color: "#FFC107" },
        ]}
        buttonLabel="Get Started With Us"
        // onButtonClick={handleButtonClick}
      />
      {/* Services We Offer */}
      <div className="w-full flex flex-col items-center justify-center my-10">
        <div className="text-center mb-6">
          <p className="text-xl md:text-3xl font-primaryRegular text-[#34C759]">
            What We Offer
          </p>
          <div className="font-primaryBold text-3xl md:text-5xl 2xl:text-6xl text-[#565656]">
            Our Services
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:gap-10 md:p-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group min-w-[173px] md:min-w-[270px] bg-[#FFE784]/[13%] border border-[#21295C] rounded-3xl hover:bg-gradient-to-b hover:from-[#34C759] hover:to-[#038B25] hover:border-none text-[#455A64] hover:text-white p-5 2xl:space-y-4"
            >
              {/* <div className="w-full h-full rounded-lg flex flex-col justify-center items-center hover:bg-transparent"> */}
              <div className="w-9 md:w-[62px] h-9 md:h-[62px] bg-[#34C759]/[15%] rounded-full flex items-center justify-center group-hover:bg-white">
                {service.icon}
              </div>
              <p className="font-primaryMedium text-xs md:text-xl">
                {service.text}
              </p>
              {/* </div> */}
              <div className="relative flex items-center justify-end">
                <span className="hidden md:inline-flex absolute right-3 z-10">
                  <BsArrowRight size={20} color="black" />
                </span>
                <span className="md:hidden inline-flex absolute right-2 z-10">
                  <BsArrowRight size={16} color="black" />
                </span>
                <div
                  className="relative z-0 w-4 md:w-[25px] h-4 md:h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                  style={{ animation: "pulse 1s infinite" }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Thrive */}
      <div className="w-full flex items-center justify-center mb-6 relative">
        <img src={BG} alt="Background" className="hidden md:block" />
        <img src={BGMobile} alt="Background" className="block md:hidden" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black">
          <div className="w-auto flex items-center justify-between gap-6 md:gap-[100px]">
            <div className="grid gap-4">
              <h2 className="text-white font-primaryBold text-lg md:text-4xl">
                Thrive Today Scale Tomorrow
              </h2>
              <p className="text-white text-xs md:text-2xl font-primaryMedium">
                Let’s create a strategy that propels your business <br />
                forward. Book an appointment today
              </p>
              <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
                <button className="w-[162px] md:w-[275px] h-10 md:h-[69px] rounded-xl md:rounded-[35px] bg-[#FFC107] font-primarySemibold text-xs md:text-base">
                  Book An Appointment
                </button>
              </a>
            </div>
            <img
              src={WaterMark}
              className="w-[66px] md:w-[164px] h-[125px] md:h-[313px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
