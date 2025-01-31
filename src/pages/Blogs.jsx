import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import BG from "../assets/bgThrive.svg";
import BGMobile from "../assets/bgThriveMobile.svg";
import WaterMark from "../assets/water-mark.svg";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import moment from "moment";

const Blogs = () => {
  const spaceID = import.meta.env.VITE_REACT_APP_SPACE_ID;
  const token = import.meta.env.VITE_REACT_APP_CONTENT_ACCESS_TOKEN;
  const client = createClient({ space: spaceID, accessToken: token });

  const [blogPosts, setBlogPosts] = useState([]);

  const latestBlog = 1;

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
      <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        textSize="text-3xl md:text-5xl"
        subHeading={[
          {
            text: "Insights That Drive Success",
            color: "white",
          },
        ]}
        buttonLabel="Get Started With Us"
      />
      {/* Top or Recent article */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center bg-white my-10">
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
        {blogPosts.slice(0, latestBlog).map((blog) => (
          <>
            <div className="relative flex-1 m-4 md:p-6">
              {/* Left: Images */}
              <div className="flex items-center justify-center space-x-0">
                <div className="">
                  <img
                    src={blog?.fields?.blogImage?.fields?.file?.url}
                    className="md:w-[571px] md:h-[372px]"
                    alt="aleph-biz"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex-1 p-6 md:space-y-4">
              {/* Right: Writeup */}
              <div className="w-full md:block flex flex-col">
                <h2 className="md:text-xl font-primaryRegular text-[#34C759]">
                  {blog?.fields?.blogSubtitle}
                </h2>
                <div className="font-primaryBold text-xl md:text-3xl text-[#565656]">
                  {blog?.fields?.blogTitle}
                </div>
              </div>

              <p className="text-[#565656] md:text-xl my-2 font-primaryRegular leading-8 md:leading-10">
                {blog?.fields?.blogSummary}
              </p>
              <div className="text-sm text-[#455A64]/60 font-primaryRegular tracking-wide">
                {moment(blog?.fields?.createdDate).format(
                  "MMMM Do, YYYY h:mm A"
                )}{" "}
                <span>.</span>
                <span> 5 min read</span>
              </div>
              <div className="mt-4 flex items-center md:items-start md:justify-start space-x-4">
                <Link
                  to={`/blogs/blogDetails/${blog?.sys?.id}`}
                  className="w-[162px] md:w-[213px] h-[42px] md:h-[55px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Latest Articles */}
      <div className="w-full bg-[#E1F7E6] p-4 md:p-10 2xl:p-20">
        <div className="text-[#565656] text-2xl md:text-5xl font-primaryBold my-4 md:my-6 2xl:my-10">
          Latest Articles
        </div>
        <div className="w-full hidden md:grid grid-cols-3 gap-10 2xl:gap-20">
          {blogPosts.map((blog) => (
            <div
              key={blog.sys.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg rounded-t-[30px]"
            >
              <img
                src={blog?.fields?.blogImage?.fields?.file?.url}
                alt="Blog Image Preview"
                className="w-full h-auto"
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
                  <div className="relative flex items-center gap-2 md:gap-4 justify-end">
                    <Link
                      to={`/blogs/blogDetails/${blog?.sys?.id}`}
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
          {blogPosts.map((blog) => (
            <div
              key={blog.sys.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg rounded-t-[30px]"
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
                  <div className="relative flex items-center gap-2 md:gap-4 justify-end">
                    <Link
                      to={`/blogs/blogDetails/${blog?.sys?.id}`}
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
              <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
                <button className="w-[162px] md:w-[275px] h-10 md:h-[69px] rounded-xl md:rounded-[35px] bg-[#FFC107] font-buttonText text-xs md:text-base">
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

export default Blogs;
