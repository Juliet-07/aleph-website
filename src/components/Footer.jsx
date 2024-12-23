import React from "react";
import Logo from "../assets/aleph-logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="hidden w-full h-full md:flex flex-col items-center justify-center p-4 md:px-10 bg-[#E9D7FE]">
        {/* 1 */}
        <div className="w-full flex items-center justify-between mt-10">
          <div className="flex flex-col">
            <div className="w-[260px] h-[60px]">
              <img src={Logo} alt="SPC Logo" />
            </div>
            <div className="flex mt-4 text-gray-600 font-primaryRegular">
              <Link to="/about-spc" className="p-2">
                About us
              </Link>
              <Link to="/community" className="p-2">
                Community
              </Link>
              <Link to="events" className="p-2">
                Events
              </Link>
              <Link to="/trainings" className="p-2">
                Trainings
              </Link>
              <Link to="/team" className="p-2">
                Team
              </Link>
              <Link to="/contact-spc" className="p-2">
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-primarySemibold py-2">
              Subscribe to our Newsletter
            </p>
            <div className="flex">
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#471A52] w-[110px] h-10 rounded-lg mx-2 text-white text-xs font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="border-b-2 border-white w-full my-4"></div>
        {/* 3 */}
        <div className="w-full flex items-center justify-between">
          <div className="text-gray-600 font-primaryRegular">
            {new Date().getFullYear()} SPC Universe. All rights reserved
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaXTwitter size={20} />
            </div>
            <a
              href="https://www.linkedin.com/company/spc-universe/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <div>
              <FaFacebook size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden w-full h-full flex flex-col p-4 md:px-10 bg-[#E9D7FE]">
        <div className="w-[260px] h-[60px]">
          <img src={Logo} alt="SPC Logo" />
        </div>
        <div className="grid grid-cols-2 mt-4 text-gray-600 font-primaryRegular">
          <Link to="/about-spc" className="p-2">
            About us
          </Link>
          <Link to="/community" className="p-2">
            Community
          </Link>
          <Link to="events" className="p-2">
            Events
          </Link>
          <Link to="/trainings" className="p-2">
            Trainings
          </Link>
          <Link to="/team" className="p-2">
            Team
          </Link>
          <Link to="/contact-spc" className="p-2">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col w-full border border-gray-200 rounded-xl p-4">
          <p className="font-primarySemibold py-2">
            Subscribe to our Newsletter
          </p>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-[#471A52] w-full h-10 rounded-lg my-3 text-white font-primarySemibold">
            Subscribe
          </button>
        </div>
        <div className="border-b-2 border-white w-full my-4"></div>
        <div className="flex items-center justify-center my-3 gap-4">
          <div>
            <FaXTwitter size={20} />
          </div>
          <a
            href="https://www.linkedin.com/company/spc-universe/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
          <div>
            <FaFacebook size={20} />
          </div>
        </div>

        <div className="text-gray-600 font-primaryRegular text-center">
          {new Date().getFullYear()} SPC Universe. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
