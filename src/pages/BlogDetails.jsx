import React from "react";
import BG from "../assets/bgThrive.svg";
import BGMobile from "../assets/bgThriveMobile.svg";
import WaterMark from "../assets/water-mark.svg";
import BlogPreview from "../assets/blog-preview.svg";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const blogs = [
    {
      title: "Real Estate in Rwanda",
      description:
        "We’re here to help your business reach its full potential. Whether you need innovative strategies, tailored solutions, or a trusted partner to navigate challenges, we’ve got you covered. ",
      date: "Dec 4, 2024",
      path: "",
    },
    {
      title: "Real Estate in Rwanda",
      description:
        "We’re here to help your business reach its full potential. Whether you need innovative strategies, tailored solutions, or a trusted partner to navigate challenges, we’ve got you covered. ",
      date: "Dec 4, 2024",
      path: "",
    },
    {
      title: "Real Estate in Rwanda",
      description:
        "We’re here to help your business reach its full potential. Whether you need innovative strategies, tailored solutions, or a trusted partner to navigate challenges, we’ve got you covered. ",
      date: "Dec 4, 2024",
      path: "",
    },
  ];
  return (
    <>
      {/* Blod Details */}
      <div className="p-5 md:p-20">
        <img src={BlogPreview} alt="Blog Preview" className="w-full h-auto" />
        <div className="grid gap-4 my-4 text-[#455A64]">
          <h3 className="font-primaryBold text-2xl md:text-5xl tracking-wide">
            Blog Title
          </h3>
          <p className="text-sm md:text-2xl font-primaryRegular leading-10 md:leading-[4rem] tracking-wide">
            We’re here to help your business reach its full potential. Whether
            you need innovative strategies, tailored solutions, or a trusted
            partner to navigate challenges, we’ve got you covered. We’re here to
            help your business reach its full potential. Whether you need
            innovative strategies, tailored solutions, or a trusted partner to
            navigate challenges, we’ve got you covered. We’re here to help your
            business reach its full potential. Whether you need innovative
            strategies, tailored solutions, or a trusted partner to navigate
            challenges, we’ve got you covered. We’re here to help your business
            reach its full potential. Whether you need innovative strategies,
            tailored solutions, or a trusted partner to navigate challenges,
            we’ve got you covered. We’re here to help your business reach its
            full potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered. We’re here to help your business reach its full
            potential. Whether you need innovative strategies, tailored
            solutions, or a trusted partner to navigate challenges, we’ve got
            you covered.{" "}
          </p>
        </div>
      </div>
      {/* Latest Articles */}
      <div className="w-full bg-[#E1F7E6] p-4 md:p-10 2xl:p-20">
        <div className="text-[#565656] text-2xl md:text-5xl font-primaryBold my-4 md:my-10">
          Other Articles
        </div>
        <div className="w-full hidden md:grid grid-cols-3 gap-10 2xl:gap-20">
          {blogs.map((blog) => (
            <div
              // key={blog.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg rounded-t-[30px]"
            >
              <img
                src={BlogPreview}
                alt="Blog Preview"
                className="w-full h-auto"
              />
              <div className="grid gap-4 p-4">
                <div>
                  <p className="text-sm md:text-lg text-[#34C759] font-primaryRegular">
                    Insight
                  </p>
                  <div className="text-[#455A64] font-primarySemibold md:text-xl">
                    {blog.title}
                  </div>
                </div>
                <div className="font-primaryRegular text-xs md:text-lg text-[#455A64]">
                  {blog.description}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs md:text-sm font-primaryRegular text-[#455A64]/[60%]">
                    {blog.date}
                  </p>
                  <div className="relative flex items-center gap-2 md:gap-4 justify-end">
                    {/* <p className="text-xs md:text-sm text-[#455A64] underline font-primaryRegular">
                      Read full article
                    </p> */}
                    <Link
                      // to={`/blogDetails/${post?.sys?.id}`}
                      className="text-xs md:text-sm text-[#455A64] underline font-primaryRegular"
                    >
                      Read full article
                    </Link>
                    {/* <span className="absolute right-3 z-10">
                      <BsArrowRight size={20} color="black" />
                    </span>
                    <div
                      className="relative z-0 w-[25px] h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                      style={{ animation: "pulse 1s infinite" }}
                    ></div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile View for Blog */}
        <div className="w-full md:hidden flex items-center gap-10 overflow-x-auto">
          {blogs.map((blog) => (
            <div
              // key={blog.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg rounded-t-[30px]"
            >
              <img
                src={BlogPreview}
                alt="Blog Preview"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="grid gap-4 p-4">
                <div>
                  <p className="text-sm md:text-lg text-[#34C759] font-primaryRegular">
                    Insight
                  </p>
                  <div className="text-[#455A64] font-primarySemibold md:text-xl">
                    {blog.title}
                  </div>
                </div>
                <div className="font-primaryRegular text-xs md:text-lg text-[#455A64]">
                  {blog.description}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs md:text-sm font-primaryRegular text-[#455A64]/[60%]">
                    {blog.date}
                  </p>
                  <div className="relative flex items-center gap-2 md:gap-4 justify-end">
                    <p className="text-xs md:text-sm text-[#455A64] underline font-primaryRegular">
                      Read full article
                    </p>
                    {/* <span className="absolute right-3 z-10">
                      <BsArrowRight size={20} color="black" />
                    </span>
                    <div
                      className="relative z-0 w-[25px] h-[25px] bg-[#FFc107] rounded-full group-hover:bg-white animate-pulse"
                      style={{ animation: "pulse 1s infinite" }}
                    ></div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Banner */}
      <div className="w-full flex items-center justify-center my-6 relative">
        <img src={BG} alt="Background" className="hidden md:block" />
        <img src={BGMobile} alt="Background" className="block md:hidden" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black p-2 md:p-0">
          <div className="w-auto flex items-center justify-between gap-6 md:gap-[100px]">
            <div className="grid gap-4">
              <h2 className="text-white font-primaryBold text-lg md:text-4xl">
                Thrive Today Scale Tomorrow
              </h2>
              <p className="md:w-[628px] text-white text-xs md:text-2xl font-primaryMedium">
                Let’s create a strategy that propels your business forward. Book
                an appointment today
              </p>
              <button className="w-[162px] md:w-[275px] h-10 md:h-[69px] rounded-xl md:rounded-[35px] bg-[#FFC107] font-buttonText text-xs md:text-base">
                Book An Appointment
              </button>
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

export default BlogDetails;
