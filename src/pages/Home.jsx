import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroBG from "../assets/hero-bg.png";
import WaterMark from "../assets/water-mark.png";
import WhoWeAre1 from "../assets/whoWeAre1.svg";
import WhoWeAre2 from "../assets/whoWeAre2.svg";
import { BsArrowRight } from "react-icons/bs";
import Business from "../assets/business.svg";
import Finance from "../assets/finance.png";
import Brand from "../assets/brand.png";
import Tech from "../assets/technology.png";
import House from "../assets/property.png";
import Venture from "../assets/venture.png";
// PARTNERS
import Shifra from "../assets/shifra.svg";
import BoundlessPay from "../assets/boundlessPay.svg";
import SuperWoman from "../assets/superWoman.svg";
import Ramp from "../assets/ramp.svg";
import Lawyers from "../assets/infusionLawyer.svg";

import EventsBG from "../assets/eventsBG.svg";
import Events from "../assets/events.png";
import Vision from "../assets/vision.svg";
import Mission from "../assets/mission.svg";
import BlogPreview from "../assets/blog-preview.svg";
import JConnect from "../assets/j-connect.png";
import Krafta from "../assets/krafta.png";
import Manilla from "../assets/manilla.png";
import TestimonialsCarousel from "../components/TestimonialCarousel";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import moment from "moment";

const Home = () => {
  const spaceID = import.meta.env.VITE_REACT_APP_SPACE_ID;
  const token = import.meta.env.VITE_REACT_APP_CONTENT_ACCESS_TOKEN;
  const client = createClient({ space: spaceID, accessToken: token });
  const [blogPosts, setBlogPosts] = useState([]);

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
  ];
  const events = [
    {
      name: "Aleph Biz Business Summit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tortor varius quis cursus ullamcorper scelerisque. Fames gravida ultricies po.",
      registerPath: "",
      detailsPath: "",
    },
    {
      name: "Aleph Biz Business Summit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tortor varius quis cursus ullamcorper scelerisque. Fames gravida ultricies po.",
      registerPath: "",
      detailsPath: "",
    },
  ];

  const latestBlog = 3;

  const borderColors = ["#FFC107", "#21295C", "#34C759"];

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries, "checking entries");
          setBlogPosts(entries.items);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full">
        <div
          className="hidden md:block w-full relative bg-cover bg-center h-[700px] 2xl:h-[900px] p-10"
          style={{
            backgroundImage: `url(${HeroBG})`,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="font-primaryBold text-6xl text-center leading-[1.2] text-[#565656]">
              We Empower Businesses To <br />
              <span className="text-[#34C759]">Thrive</span>
              <span className="relative">
                <span className="absolute inset-x-0 bottom-1 h-10 bg-[#FFC72C] -z-10"></span>
                <span className="text-[#565656]"> And</span>
              </span>
              <span className="text-[#565656]"> Scale</span>
            </div>

            <div className="w-[889px] h-[108px] text-xl font-primaryRegular text-[#565656] text-center leading-10 ">
                At Aleph Biz Solutions Ltd, we empower businesses to achieve
              sustainable success and strategic growth. Whether you're looking
              to optimize operations, expand your market reach, or adopt
              innovative technologies, our tailored solutions are designed to
              help you{" "}
              <font color="#34C759">
                <b>thrive today</b>
              </font>
              <font color="#565656">
                <b> and </b>{" "}
              </font>
              <font color="#34C759">
                <b>scale tomorrow</b>
              </font>
            </div>
            <div className="flex gap-10 my-10">
              <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
                <div className="w-[253px] h-[69px] flex items-center justify-center text-white text-xl font-buttonText rounded-full bg-[#34C759] hover:bg-green-600 transition duration-200">
                  Get Started With Us
                </div>
              </a>

              <Link
                to="/about-us"
                className="w-[148px] h-[69px] rounded-full flex items-center justify-center border border-[#565656] text-[#565656] text-xl font-buttonText hover:text-green-500 transition duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Hero Section */}
        <div className="block md:hidden relative bg-[#EEF4D7] py-4">
          <div className="flex flex-col items-center justify-center gap-6 p-4">
            <div className="font-primaryBold text-3xl text-center leading-20 text-[#565656]">
              We Empower Businesses To <font color="#34C759">Thrive </font>
              And <font color="#FFC72C">Scale </font>
            </div>
            <div className="text-sm font-primaryRegular leading-6 text-[#565656] text-center">
               At Aleph Biz Solutions Ltd, we empower businesses to achieve
              sustainable success and strategic growth. Whether you're looking
              to optimize operations, expand your market reach, or adopt
              innovative technologies, our tailored solutions are designed to
              help you{" "}
              <font color="#34C759">
                <b>thrive today</b>
              </font>
              <font color="#565656">
                <b> and </b>{" "}
              </font>
              <font color="#34C759">
                <b>scale tomorrow</b>
              </font>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
                <div className="w-[180px] h-[50px] bg-[#34C759] text-white font-buttonText rounded-full flex items-center justify-center hover:bg-green-600 transition duration-200">
                  Get Started With Us
                </div>
              </a>

              <Link
                to="/about-us"
                className="w-[180px] h-[50px] border border-[#565656] text-[#565656] font-buttonText rounded-full flex items-center justify-center hover:text-green-600 transition duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Who We Are */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Background Watermark */}
        <div
          className="absolute inset-0 bg-cover bg-right-top bg-no-repeat opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${WaterMark})`,
            backgroundSize: "50%",
            backgroundPosition: "right top",
          }}
        ></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-1 m-4 md:p-6"
        >
          {/* Left: Images */}
          <div className="flex items-center justify-center space-x-0">
            {/* Replace these divs with your image components */}
            {/* <img src={WhoWeAre1}/> */}
            {/* <img src={WhoWeAre2}/> */}
            <div className="">
              <img src={WhoWeAre1} alt="aleph-biz" />
            </div>
            <div className="">
              <img src={WhoWeAre2} alt="aleph-biz" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-1 p-6 md:space-y-10"
        >
          {/* Right: Writeup */}
          <div className="w-full md:block flex flex-col items-center justify-center">
            <h2 className="md:text-2xl font-primaryRegular text-[#34C759]">
              About Aleph Biz
            </h2>
            <div className="font-primaryBold text-3xl md:text-5xl text-[#565656]">
              Who We Are
            </div>
          </div>

          <p className="text-[#565656] md:text-xl my-2 md:mt-4 font-primaryRegular leading-8 md:leading-10 text-center md:text-left p-2 md:p-0">
            Aleph Biz Solutions Ltd is a forward-driven company dedicated to
            helping businesses thrive and scale in a competitive global
            landscape. With a strong presence in Rwanda and beyond, we connect
            startups and enterprises to the resources, strategies, and
            technologies needed to unlock their full potential.
          </p>
          <div className="mt-6 flex items-center md:items-start justify-center md:justify-start space-x-4">
            <Link
              to="/contact-us"
              className="w-[120px] md:w-[171px] h-[50px] md:h-[77px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText hover:bg-green-600 transition duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/about-us"
              className="w-[153px] md:w-[217px] h-[50px] md:h-[77px] text-[#565656] border border-[#565656] md:text-xl rounded-full flex items-center justify-center font-buttonText hover:bg-[#34C759] transition duration-200"
            >
              More About Us
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Results */}
      <div className="w-full flex items-center justify-center my-4">
        <div className="w-full h-[71px] md:h-[191px] flex items-center justify-evenly bg-[#FFE784]/[20%] text-white font-bold p-2 font-primaryMedium">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-4xl font-primaryBold text-[#34C759]">
              400 +
            </p>
            <p className="font-primaryMedium text-[8px] md:text-xl text-[#455A64] px-2 text-center">
              Professional have been empowered
            </p>
          </div>
          <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-4xl font-primaryBold text-[#34C759]">
              20 +
            </p>
            <p className="font-primaryMedium text-[8px] md:text-xl text-[#455A64] px-2 text-center">
              Businesses have been transformed
            </p>
          </div>
          <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-4xl font-primaryBold text-[#34C759]">
              5 +
            </p>
            <p className="font-primaryMedium text-[8px] md:text-xl text-[#455A64] px-2 text-center">
              Startups are currently being financed
            </p>
          </div>
          {/* <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-4xl">6</p>
            <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
              Award winning
            </p>
          </div> */}
        </div>
      </div>
      {/* Mission & Vision */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-10">
        <div className="text-center md:text-left">
          <p className="text-[#34C759] font-primaryMedium text-xl md:text-3xl 2xl:text-4xl">
            Our Assignment
          </p>
          <div className="font-primaryBold text-3xl md:text-5xl 2xl:text-6xl text-[#565656]">
            What We Stand For
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-1 my-4 md:my-0">
          {/* Vision Card */}
          <div className="flex flex-col items-center text-center bg-white border-2 border-[#FFC107] shadow-lg p-6 md:w-[420px]">
            <img
              src={Vision}
              alt="Vision Icon"
              className="w-[73px] md:w-[97px] h-[73px] md:h-[97px] mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-primaryBold text-[#565656] mb-2">
              Our Vision
            </h3>
            <p className="text-[#455A64] font-primaryRegular md:text-xl">
              Creating a Pan-African ecosystem where innovation and
              entrepreneurship drive transformative business success.
            </p>
          </div>

          {/* Mission Card */}
          <div className="grid">
            <div className="md:flex flex-col items-center text-center bg-gradient-to-r from-green-300 via-green-200 to-yellow-300 shadow-lg p-6 md:w-[420px] h-[78px] hidden"></div>
            <div className="flex flex-col items-center text-center shadow-lg p-6 border-2 border-[#34C759] md:w-[420px]">
              <img
                src={Mission}
                alt="Mission Icon"
                className="w-[67px] md:w-[96px] h-[67px] md:h-[96px] mb-4"
              />
              <h3 className="text-2xl md:text-3xl font-primaryBold text-[#565656] mb-2">
                Our Mission
              </h3>
              <p className="text-[#455A64] font-primaryRegular md:text-xl">
                Empowering African businesses to scale and thrive through
                innovation, technology, and sustainable strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What We Offer */}
      <div className="w-full bg-gradient-to-r from-[#34C759]/[20%] to-[#F7DC6F]/[20%] hidden md:flex items-center justify-center p-10">
        <div className="w-full md:p-5 2xl:p-10 bg-white rounded-t-[50px] flex items-center gap-10">
          <div className=" flex-1 p-6 md:space-y-10">
            {/* Right: Writeup */}
            <div className="w-full md:block flex flex-col items-center justify-center">
              <h2 className="md:text-2xl 2xl:text-4xl font-primaryRegular text-[#34C759]">
                Our Services
              </h2>
              <div className="font-primaryBold text-2xl md:text-5xl 2xl:text-6xl text-[#565656]">
                What We Offer
              </div>
            </div>

            <p className="text-[#565656] md:text-xl my-2 md:mt-4 font-primaryRegular text-center md:text-left p-2 md:p-0">
              We're here to help your business reach its full potential. Whether
              you need innovative strategies, tailored solutions, or a trusted
              partner to navigate challenges, we've got you covered.
            </p>
            <div className="mt-6 flex items-center md:items-start justify-center md:justify-start space-x-4">
              <Link
                to="/contact-us"
                className="w-[120px] md:w-[171px] h-[50px] md:h-[77px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText hover:bg-green-600 transition duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="w-[153px] md:w-[217px] h-[50px] md:h-[77px] text-[#565656] border border-[#565656] md:text-xl rounded-full flex items-center justify-center font-buttonText hover:bg-[#34C759] transition duration-200"
              >
                See All Our Services
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 2xl:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group min-w-[260px] bg-[#FFE784]/[13%] border border-[#21295C] rounded-lg hover:bg-gradient-to-b hover:from-[#34C759] hover:to-[#038B25] hover:border-none text-[#455A64] hover:text-white p-5 2xl:space-y-4"
              >
                {/* <div className="w-full h-full rounded-lg flex flex-col justify-center items-center hover:bg-transparent"> */}
                <div className="w-[62px] h-[62px] bg-[#34C759]/[15%] rounded-full flex items-center justify-center group-hover:bg-white">
                  {service.icon}
                </div>
                <p className="font-primaryMedium text-xl">{service.text}</p>
                {/* </div> */}
                <div className="relative flex items-center justify-end">
                  <span className=" absolute right-3 z-10">
                    <BsArrowRight size={20} color="black" />
                  </span>
                  <div
                    className="relative z-0 w-[25px] h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                    style={{ animation: "pulse 1s infinite" }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* What We Offer Mobile View*/}
      <div className="w-full md:hidden block">
        {/* Writeup */}
        <div className=" flex-1 p-6 md:space-y-10">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-primaryRegular text-xl text-[#34C759]">
              Our Services
            </h2>
            <div className="font-primaryBold text-3xl text-[#565656]">
              What We Offer
            </div>
          </div>
          <p className="text-[#565656] my-2 font-primaryRegular text-center p-2 md:p-0">
            We're here to help your business reach its full potential. Whether
            you need innovative strategies, tailored solutions, or a trusted
            partner to navigate challenges, we've got you covered.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#34C759]/[20%] to-[#F7DC6F]/[20%] p-4">
          <div className="w-full bg-white rounded-t-lg flex items-center p-4">
            <div className="flex-1 grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group min-w-[173px] bg-[#FFE784]/[13%] border border-[#21295C] rounded-lg hover:bg-gradient-to-b hover:from-[#34C759] hover:to-[#038B25] hover:border-none hover:text-white p-3 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-[36px] h-[36px] bg-[#34C759]/[15%] rounded-full flex items-center justify-center group-hover:bg-white">
                      {service.icon}
                    </div>
                    <div className="relative flex items-center justify-end">
                      <span className=" absolute right-3 z-10">
                        <BsArrowRight size={20} color="black" />
                      </span>
                      <div
                        className="relative z-0 w-[25px] h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                        style={{ animation: "pulse 1s infinite" }}
                      ></div>
                    </div>
                  </div>
                  <p className="font-primaryMedium text-sm">{service.text}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="my-4 flex items-center md:items-start justify-center md:justify-start space-x-4">
            <Link
              to="/contact-us"
              className="w-[120px] md:w-[171px] h-[50px] md:h-[77px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="w-[186px] h-[50px] text-[#565656] border border-[#565656] rounded-full flex items-center justify-center font-buttonText"
            >
              See All Our Services
            </Link>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <TestimonialsCarousel />
      {/* Blogs */}
      {/* <div className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-10 my-4 md:my-10">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start my-4">
            <h2 className="text-xl md:text-3xl font-primaryRegular text-[#34C759]">
              Our Blog
            </h2>
            <div className="font-primaryBold text-3xl md:text-5xl 2xl:text-6xl text-[#565656]">
              Latest Articles and Insights
            </div>
          </div>
          <Link
            to="/blogs"
            className="hidden w-[245px] h-[77px] border border-[#565656] rounded-full md:flex items-center justify-center text-[#565656] text-lg font-buttonText"
          >
            View All Articles
          </Link>
        </div>
        Blog Carousel
        <div className="w-full flex items-center gap-10 2xl:gap-20 overflow-x-auto mb-4 p-4">
          {blogPosts.slice(0, latestBlog).map((blog) => (
            <div
              key={blog.sys.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg"
            >
              <img
                src={blog?.fields?.blogImage?.fields?.file?.url}
                alt="Blog Image Preview"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="grid gap-4 p-4">
                <div>
                  <p className="text-sm md:text-lg text-[#34C759] font-primaryRegular">
                    {blog?.fields?.blogSubtitle}
                  </p>
                  <div className="text-[#455A64] font-primarySemibold md:text-xl">
                    {blog?.fields?.blogTitle}
                  </div>
                </div>
                <div className="font-primaryRegular text-xs md:text-lg text-[#455A64]">
                  {blog?.fields?.blogSummary}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs md:text-sm font-primaryRegular text-[#455A64]/[60%]">
                    {moment(blog?.fields?.createdDate).format(
                      "MMMM Do, YYYY h:mm A"
                    )}
                  </p>
                  <Link
                    to={`/blogs/blogDetails/${blog?.sys?.id}`}
                    className="relative flex items-center gap-2 md:gap-4 justify-end"
                  >
                    <p className="text-xs md:text-sm text-[#455A64] underline font-primaryRegular">
                      Read full article
                    </p>
                    <span className="absolute right-3 z-10">
                      <BsArrowRight size={20} color="black" />
                    </span>
                    <div
                      className="relative z-0 w-[25px] h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                      style={{ animation: "pulse 1s infinite" }}
                    ></div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/blogs"
          className="md:hidden w-[153px] h-[51px] border border-[#565656] rounded-full flex items-center justify-center text-[#565656] font-buttonText mb-4"
        >
          View All Articles
        </Link>
      </div> */}
      {/* Events */}
      <div
        className="w-full h-auto relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${EventsBG})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-10">
          <div className="md:w-1/2 flex items-center justify-between my-4 md:my-10 md:gap-4 2xl:gap-20">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <h2 className="text-lg md:text-2xl 2xl:text-3xl font-primaryRegular text-[#34C759]">
                Our Events
              </h2>
              <div className="font-primaryBold text-3xl md:text-4xl 2xl:text-6xl text-white">
                Upcoming Events
              </div>
            </div>
            <Link
              to="/events"
              className="hidden w-[221px] h-[60px] border border-white rounded-full md:flex items-center justify-center text-white text-lg font-buttonText my-4"
            >
              View All Events
            </Link>
          </div>
          <div className="grid gap-4">
            {events.map((event) => (
              <div className="w-full bg-white rounded-lg p-4">
                <div className="flex items-center justify-between gap-14 md:gap-10">
                  <div className="flex items-center space-y-4 gap-4">
                    <img
                      src={Events}
                      className="w-[97px] md:w-[266px] md:h-[206px] h-[95px]"
                    />
                    <div className="grid">
                      <h2 className="text-xs md:text-3xl font-primarySemibold text-[#455A64]">
                        {event.name}
                      </h2>
                      <p className="w-[190px] md:w-[572px] text-[8px] md:text-lg text-[#565656] font-primaryMedium my-2 md:my-3">
                        {event.description}
                      </p>
                      <div className="flex gap-4">
                        <div className="bg-[#34C759] w-[65px] md:w-[156px] h-[25px] md:h-[60px] rounded-full text-white font-primaryMedium flex items-center justify-center text-[8px] md:text-base">
                          Register Now
                        </div>
                        <div className="w-[73px] md:w-[177px] h-[25px] md:h-[60px] rounded-full border border-[#455A64] text-[#455A64] font-primaryMedium flex items-center justify-center text-[8px] md:text-base">
                          See More Details
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[60px] md:w-[129px] h-[47px] md:h-[102px] mx-4 bg-[#FFE784]/[13%] border border-[#21295C]/[100%] rounded-xl flex flex-col items-center justify-center">
                    <p className="text-[#455A64] text-[6px] md:text-sm font-primaryRegular">
                      Jan
                    </p>
                    <p className="text-[#455A64] md:text-3xl font-primarySemibold">
                      20
                    </p>
                    <p className="text-[#455A64] text-[6px] md:text-sm font-primaryRegular">
                      2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/events"
            className="md:hidden w-[153px] h-[51px] border border-white rounded-full flex items-center justify-center text-white font-primaryMedium mt-4"
          >
            View All Events
          </Link>
        </div>
      </div>
      {/* Our Partners */}
      <div className="w-full flex flex-col items-center justify-center space-y-10 my-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h2 className="text-xl md:text-3xl font-primaryRegular text-[#34C759]">
            Our Ecosystem
          </h2>
          <div className="font-primaryBold text-3xl md:text-5xl 2xl:text-6xl text-[#565656]">
            We Don't Walk Alone
          </div>
        </div>
        <div className="w-full">
          {/* Scrolling Container */}
          <div className="w-full flex items-center gap-10 space-x-10 animate-marquee">
            <img src={Shifra} alt="Shifra LOGO" className="w-auto h-auto" />
            <img
              src={BoundlessPay}
              alt="BoundlessPay LOGO"
              className="w-auto h-auto"
            />
            <img
              src={SuperWoman}
              alt="Superwoman LOGO"
              className="w-auto h-auto"
            />
            <img src={Ramp} alt="Ramo LOGO" className="w-auto h-auto" />
            <img
              src={Lawyers}
              alt="Infusion Lawyers LOGO"
              className="w-auto h-auto"
            />
            <img src={Manilla} alt="Manilla LOGO" className="w-20 h-auto" />
            <img
              src={JConnect}
              alt="JConnect LOGO"
              className="w-[150px] h-auto"
            />
            <img src={Krafta} alt="Krafta LOGO" className="w-[150px] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
