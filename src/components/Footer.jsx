import React, { useState } from "react";
import Logo from "../assets/white-logo.svg";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.Email", email); // Replace with your actual Google Form field ID
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfb-bdG0Z7BNNbxE2y4Ex521qCpMzztvhz7yJL8tgFk4_30Uw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      alert("Submitted Successfully!");
      setEmail("");
    } catch (err) {
      console.error("submission failed", err);
    }
  };

  return (
    <>
      <div className="hidden w-full h-full md:flex flex-col items-center justify-center p-4 md:px-10 bg-[#455A64]">
        {/* 1 */}
        <div className="w-[968px] h-[235px] bg-[#21295C] rounded-[30px] text-white font-primaryRegular my-10 flex items-center justify-around">
          <div className="flex flex-col gap-2">
            <p className="font-primarySemibold text-3xl">Newsletter Sign Up</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <form
            className="flex w-[426px] h-[75px] items-center bg-white rounded-[30px] shadow-lg overflow-hidden p-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 text-gray-600 text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 w-[127px] h-[58px] bg-[#34C759] text-white font-primarySemibold rounded-full hover:bg-green-600 transition duration-200"
            >
              Subscribe
            </button>
          </form>
          {/* </div> */}
        </div>
        {/* 2 */}
        <div className="w-full flex items-center justify-between gap-4 my-10">
          {/* a */}
          <div className="flex flex-col">
            <div className="w-[193px] h-[112px]">
              <img src={Logo} alt="SPC Logo" />
            </div>
            <div className="mt-4 text-white font-primaryRegular">
              Thrive Today; Scale <br />
              Tomorrow
            </div>
          </div>
          {/* b */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-2xl">Quick Links</div>
            <Link to="/about-us" className="text-lg">
              About Us
            </Link>
            <Link className="text-lg">Partners</Link>
            <Link to="/blogs" className="text-lg">
              Blogs
            </Link>
          </div>
          {/* c */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-2xl">Events</div>
            <Link className="text-lg">Aleph Business Summit</Link>
            <Link className="text-lg">Aleph Business Trainings</Link>
            <Link className="text-lg">Aleph Business Summit</Link>
          </div>
          {/* d */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-2xl">Services</div>
            <Link className="text-lg">Business Consulting</Link>
            <Link className="text-lg">Financial Management</Link>
            <Link className="text-lg">Real Estate</Link>
          </div>
          {/* e */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-2xl">Contact</div>
            <div className="flex items-center gap-2">
              <a href="#">
                <IoLocationSharp size={20} color="white" />
              </a>
              <span className="text-white font-primaryRegular text-xl">
                KN 78st, Kigali, RW
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#">
                <FaPhone size={20} color="white" />
              </a>
              <span className="text-white font-primaryRegular text-xl">
                +250798287905
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/aleph-biz-solutions-ltd/"
                target="_blank"
              >
                <FaLinkedin size={20} color="white" />
              </a>
              <span className="text-white font-primaryRegular text-xl">
                Aleph Biz Solutions Ltd
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/aleph-biz-solutions-ltd/"
                target="_blank"
              >
                <AiOutlineMail size={20} color="white" />
              </a>
              <span className="text-white font-primaryRegular text-xl">
                comms@alephbiz.com
              </span>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="border-b border-white w-full my-4"></div>
        {/* 4 */}
        <div className="w-full flex items-center justify-between">
          <div className="text-white font-primaryRegular flex items-center text-xs">
            <FaRegCopyright color="white" />
            <span className="mx-2">
              {new Date().getFullYear()} Aleph Biz Solutions Ltd
            </span>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden w-full h-full flex flex-col p-4 bg-[#455A64]">
        <div className="w-full h-full bg-[#21295C] rounded-[30px] text-white font-primaryRegular p-4 my-10 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col">
            <p className="font-primarySemibold">Newsletter Sign Up</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          {/* <div className="flex items-center justify-center min-h-screen bg-blue-900"> */}
          <form
            className="flex w-full h-[45px] items-center bg-white rounded-[30px] shadow-lg overflow-hidden p-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              console.log("Form submitted");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 text-gray-600 text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="px-3 w-[100px] h-10 bg-[#34C759] text-white text-sm font-primarySemibold rounded-full hover:bg-green-600 transition duration-200"
            >
              Subscribe
            </button>
          </form>
          {/* </div> */}
        </div>
        <div className="w-full flex items-center justify-between gap-4 my-10">
          {/* a */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-xl">Quick Links</div>
            <Link to="/about-us">About Us</Link>
            <Link>Partners</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          {/* b */}
          <div className="grid gap-4 text-white font-primaryRegular">
            <div className="font-primarySemibold text-xl">Services</div>
            <Link>Business Consulting</Link>
            <Link>Financial Management</Link>
            <Link>Real Estate</Link>
          </div>
        </div>
        <div className="border-b border-white w-full my-4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/aleph-biz-solutions-ltd/"
              target="_blank"
            >
              <FaLinkedin size={20} color="white" />
            </a>
            <span className="text-white font-primaryRegular text-xs">
              Aleph Biz Solutions Ltd
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCopyright size={20} color="white" />
            <span className="text-white font-primaryRegular text-xs">
              {new Date().getFullYear()} Aleph Biz Solutions Ltd
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="w-[70px] h-[50px]">
            <img src={Logo} alt="Aleph Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
