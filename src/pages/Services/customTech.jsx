import React from "react";
import WhoWeAre1 from "../../assets/customTech.svg";
import BG from "../../assets/bgThrive.svg";
import BGMobile from "../../assets/bgThriveMobile.svg";
import WaterMark from "../../assets/water-mark.svg";
import { motion } from "framer-motion";

const CustomTechServices = () => {
  const heroContent = [
    {
      id: 1,
      text: "Developing web and mobile applications tailored to specific business needs.",
    },
    {
      id: 2,
      text: "Delivering digital transformation tools to simplify and automate operations.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-around bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%] p-4 md:p-10 gap-10">
        <div className="grid gap-4">
          <h1 className="text-white font-primaryBold text-2xl md:text-4xl 2xl:text-5xl md:leading-[60px] 2xl:leading-[70px] text-center md:text-left">
            Custom Technology
            <br />
            Solutions
          </h1>
          <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
            <button className="w-[189px] md:w-[253px] h-[52px] md:h-[69px] bg-[#FFC107] hover:bg-yellow-500 text-black font-primarySemibold rounded-[35px] transition-all duration-300">
              Get Started With Us
            </button>
          </a>
        </div>
        {/* Box Content */}
        <div className="bg-[#FFFFFF]/[50%] p-2 rounded-[20px]">
          <div className="relative -top-4 bg-[#39A655] rounded-[20px] p-6 md:p-10">
            {heroContent.map((content, index) => (
              <div
                key={content.id || index}
                className="flex items-start gap-4 mb-6"
              >
                <span className="text-[#F7DC6F] text-3xl">❖</span>
                <p className="text-white text-sm md:text-xl font-primarySemibold">
                  {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Explanation */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between bg-white p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <div className="text-2xl md:text-4xl 2xl:text-5xl font-primaryBold text-[#565656] text-center md:text-left leading-10 md:leading-[50px] 2xl:leading-[60px]">
            Innovative IT Solutions To
            <br />
            <font color="#34C759"> Thrive Today </font>
            and <font color="#34C759">Scale Tomorrow</font>
          </div>
          <p className="md:w-[654px] text-[#455A64] md:text-xl font-primaryMedium text-justify leading-8 md:leading-10">
            In today’s digital-first world, businesses need technology that
            adapts to their unique needs. At Aleph Biz Solutions Ltd, we develop
            customised IT solutions that simplify operations, enhance
            efficiency, and position businesses for long-term success.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <img src={WhoWeAre1} alt="aleph-biz" />
        </motion.div>
      </div>
      {/* How We Support */}
      <div className="w-full flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#34C759]/[20%] to-[#F7DC6F]/[20%] my-5 p-4 md:p-10">
        <div className="text-center text-2xl md:text-3xl 2xl:text-4xl leading-10 font-primaryBold text-[#455A64]">
          How We Deliver Tailored
          <br />
          Technology Solutions
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
          {/* 1 */}
          <motion.div
            className="bg-white rounded-[22px] p-4 max-w-sm border border-[#34C759]/[100%] hover:border-[#34C759] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center items-center bg-[#34C759]/[10%] text-[#038B25] font-primaryBold text-2xl md:text-4xl w-[73px] md:w-[107px] h-[73px] md:h-[107px] rounded-full mx-auto mb-6">
              1
            </div>
            <h3 className="text-lg md:text-xl font-primaryBold text-[#455A64] mb-4 text-center">
              Web and Mobile Application <br />
              Development
            </h3>
            <p className="text-[#455A64] text-justify text-sm md:text-xl font-primaryMedium leading-10 md:leading-10">
              We create user-friendly, scalable applications designed to meet
              your specific business requirements. From e-commerce platforms to
              enterprise management systems, our solutions drive results.
            </p>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="bg-white rounded-[22px] p-4 max-w-sm border border-[#FFC107]/[100%] hover:border-[#FFC107] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center items-center bg-[#FFC107]/[10%] text-[#FFC107] font-primaryBold text-2xl md:text-5xl w-[73px] md:w-[107px] h-[73px] md:h-[107px] rounded-full mx-auto mb-6">
              2
            </div>
            <h3 className="text-lg md:text-xl font-primaryBold text-[#455A64] mb-4 text-center">
              API Integration for
              <br />
              Fintech Solutions
            </h3>
            <p className="text-[#455A64] text-justify text-sm md:text-xl md:text-left font-primaryMedium leading-10 md:leading-10">
              We provide advanced APIs for payments, financial data aggregation,
              fraud detection, and more, enabling businesses in the fintech
              space to offer seamless, secure services to their customers.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="bg-white rounded-[22px] p-4 max-w-sm border border-[#21295C]/[100%] hover:border-[#21295C] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex justify-center items-center bg-[#21295C]/[10%] text-[#21295C] font-primaryBold text-2xl md:text-5xl w-[73px] md:w-[107px] h-[73px] md:h-[107px] rounded-full mx-auto mb-6">
              3
            </div>
            <h3 className="text-lg md:text-2xl font-primaryBold text-[#455A64] mb-4 text-center">
              Digital Transformation Tools
            </h3>
            <p className="text-[#455A64] text-justify text-sm md:text-xl md:text-left font-primaryMedium leading-10 md:leading-10">
              Our automation tools and data analytics platforms simplify complex
              workflows, reduce operational costs, and provide actionable
              insights to improve decision-making.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Why You Need it */}
      <div className="w-full flex flex-col items-center justify-center gap-10 bg-white p-4 md:p-10">
        <div className="text-center text-2xl md:text-4xl 2xl:text-5xl leading-10 font-primaryBold text-[#455A64]">
          Why Your Business Needs This Service
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
          <div className="grid gap-3">
            <div className="bg-[#34C759]/[15%] w-[360px] md:w-[430px] rounded-[24px] p-4 md:p-8 text-[#455A64]">
              <h3 className="font-primaryBold text-xl md:text-2xl 2xl:text-3xl my-4">
                Thrive Today
              </h3>
              <p className="font-primaryRegular md:text-lg 2xl:text-xl">
                 Leverage technology to streamline operations and enhance
                productivity.
              </p>
            </div>
            <div className="bg-[#34C759]/[15%] w-[360px] md:w-[430px] rounded-[24px] p-4 md:p-8 text-[#455A64]">
              <h3 className="font-primaryBold text-xl md:text-2xl 2xl:text-3xl my-4">
                Scale Tomorrow
              </h3>
              <p className="font-primaryRegular md:text-lg 2xl:text-xl">
                Build scalable, future-ready systems that grow with your
                business.
              </p>
            </div>
          </div>
          <div className="bg-[#FFC107]/[50%] w-[360px] md:w-[430px] rounded-[24px] p-4 md:p-8 text-[#455A64]">
            <h3 className="font-primaryBold text-xl md:text-2xl 2xl:text-3xl my-4">
              Stay Competitive
            </h3>
            <p className="font-primaryRegular md:text-lg 2xl:text-xl">
              Gain a technological edge in your industry with customised,
              innovative solutions.
            </p>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="w-full flex items-center justify-center mb-6 relative">
        <img src={BG} alt="Background" className="hidden md:block" />
        <img src={BGMobile} alt="Background" className="block md:hidden" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black p-2 md:p-0">
          <div className="w-auto flex items-center justify-between gap-6 md:gap-[100px]">
            <div className="grid gap-4">
              <h2 className="text-white font-primaryBold text-lg md:text-4xl">
                Let Technology Redefine Your Business
              </h2>
              <p className="md:w-[628px] text-white text-xs md:text-2xl font-primaryMedium">
                Discover how our tailored solutions can transform your
                operations. Book an appointment today to thrive today and scale
                tomorrow.
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

export default CustomTechServices;
