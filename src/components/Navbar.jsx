import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/aleph-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#34C759" : "#455A64",
      borderBottom: isActive ? "2px solid #34C759" : "none",
    };
  };

  const activeStyleMobile = ({ isActive }) => {
    return {
      color: isActive ? "#34C759" : "#475467",
      // borderBottom: isActive ? "2px solid #34C759" : "none",
    };
  };
  return (
    <div className="w-full h-20 fixed top-0 left-0 flex items-center justify-between md:justify-center gap-0 md:gap-10 mx-auto p-4 px-6 z-20 text-black border-b-[#A9A5A5] bg-[#EEF4D7] md:bg-white shadow-lg">
      <Link to="/">
        <img
          src={Logo}
          alt="Aleph Biz Solutions"
          className="w-[76px] md:w-[103px]"
        />
      </Link>

      <Link
        to="/contact-us"
        className="w-[97px] h-[35px] rounded-3xl bg-[#34C759] text-white font-primaryMedium flex items-center justify-center text-sm md:hidden hover:bg-green-600 transition duration-200"
      >
        Contact Us
      </Link>
      <nav className=" text-gray-600 font-primaryRegular hidden md:flex">
        <NavLink
          to="/"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-green-400 transition duration-20"
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-green-400 transition duration-200"
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-green-400 transition duration-200"
        >
          Services
        </NavLink>
        <NavLink
          to="/blogs"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-green-400 transition duration-200"
        >
          Blogs
        </NavLink>
        <NavLink
          to="/events"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-green-400 transition duration-200"
        >
          Events
        </NavLink>
      </nav>
      <Link
        to="/contact-us"
        className="hidden w-[153px] h-[55px] rounded-3xl bg-[#34C759] text-white font-primarySemibold md:flex items-center justify-center text-lg hover:bg-green-600 transition duration-200"
      >
        Contact Us
      </Link>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} color="red" />
        ) : (
          <AiOutlineMenu size={30} color="black" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed right-0 top-20 w-[251px] h-[449px] ease-in-out duration-500 bg-[#EEF4D7] z-20"
            : "fixed right-[-100%]"
        }
      >
        <div className="grid grid-cols-1 gap-4 px-4 font-primarySemibold">
          <NavLink
            to="/"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/blogs"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/events"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Events
          </NavLink>
          <div className="border-b border-[#565656] w-full"></div>
          <NavLink
            to="/contact-us"
            style={activeStyleMobile}
            className="p-2 font-primaryBold text-[#455A64] text-xl"
            onClick={() => setNav(false)}
          >
            Contact
          </NavLink>
          <div className="flex items-center font-primaryMedium">
            <MdOutlineLocalPhone size={20} />
            <span>+250 795 047 509</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
