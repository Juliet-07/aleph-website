import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import moment from "moment";
import ReactMarkdown from "react-markdown"; // For rendering formatted API content
import BG from "../assets/bgThrive.svg";
import BGMobile from "../assets/bgThriveMobile.svg";
import WaterMark from "../assets/water-mark.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogDetails = () => {
  const { id } = useParams();
  const spaceID = import.meta.env.VITE_REACT_APP_SPACE_ID;
  const token = import.meta.env.VITE_REACT_APP_CONTENT_ACCESS_TOKEN;
  const client = createClient({ space: spaceID, accessToken: token });

  const [singleBlogPost, setSingleBlogPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const otherBlogs = 3;

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries, "checking single entries");
          setSingleBlogPost(entries.fields);
        });
      } catch (error) {
        console.log("error");
      }
    };
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
    getEntryById();
    getAllEntries();
  }, []);

  if (!singleBlogPost) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-10">
        {/* Blog Image */}
        <img
          src={singleBlogPost?.blogImage?.fields?.file?.url}
          alt="Blog Preview"
          className="w-full max-w-4xl h-auto rounded-lg shadow-md"
        />
        <div className="relative text-sm md:text-lg text-gray-600 -right-20 md:-right-[300px] py-3 font-primaryMedium">
          {moment(singleBlogPost?.createdDate).format("MMMM Do, YYYY h:mm A")}
        </div>
        {/* Blog Content */}
        <div className="w-full max-w-4xl text-center mt-6 space-y-6">
          <h3 className="text-2xl md:text-4xl font-primaryBold text-left text-[#455A64]">
            {singleBlogPost?.blogTitle}
          </h3>

          <div className="text-lg md:text-2xl leading-relaxed text-gray-700 text-left font-primaryRegular space-y-4">
            {/* <ReactMarkdown>{singleBlogPost?.postContent}</ReactMarkdown> */}
            {singleBlogPost?.article &&
              documentToReactComponents(singleBlogPost.article)}
          </div>
        </div>
      </div>

      {/* Other Articles Section */}
      <div className="w-full bg-[#E1F7E6] p-4 md:p-10 2xl:p-20">
        <div className="text-[#565656] text-2xl md:text-5xl font-primaryBold my-4 md:my-10">
          Other Articles
        </div>
        <div className="w-full hidden md:grid grid-cols-3 gap-10 2xl:gap-20">
          {blogPosts.slice(0, otherBlogs).map((blog) => (
            <div
              // key={blog.id}
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
          {blogPosts.slice(0, otherBlogs).map((blog) => (
            <div
              key={blog.sys.id}
              className="min-w-[250px] md:min-w-[400px] bg-white shadow-lg rounded-lg rounded-t-[30px]"
            >
              <img
                src={blog?.fields?.blogImage?.fields?.file?.url}
                alt="Blog Preview"
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

export default BlogDetails;
