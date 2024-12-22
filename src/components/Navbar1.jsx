// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/spc-logo.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };
//   const activeStyle = ({ isActive }) => {
//     return {
//       fontWeight: isActive ? "bold" : "normal",
//       color: isActive ? "#34C759" : "#475467",
//       borderBottom: isActive ? "2px solid #34C759" : "none",
//     };
//   };
//   const activeStyleMobile = ({ isActive }) => {
//     return {
//       color: isActive ? "#34C759" : "#475467",
//       // borderBottom: isActive ? "2px solid #34C759" : "none",
//     };
//   };
//   return (
//     <div className="w-full flex justify-between items-center h-20 mx-auto px-4 md:px-10 2xl:px-20 text-gray-600 fixed z-10 bg-white">
//       <div className="w-[148px] h-[38px]">
//         <img src={Logo} alt="SPC Logo" />
//       </div>
//       <nav className="text-gray-600 font-primaryRegular hidden md:flex">
//         <NavLink to="/" style={activeStyle} className="p-2">
//           Home
//         </NavLink>
//         <NavLink to="/about-spc" style={activeStyle} className="p-2">
//           About us
//         </NavLink>
//         <NavLink to="/community" style={activeStyle} className="p-2">
//           Community
//         </NavLink>
//         <NavLink to="/events" style={activeStyle} className="p-2">
//           Events
//         </NavLink>
//         <NavLink to="/trainings" style={activeStyle} className="p-2">
//           Trainings
//         </NavLink>
//         {/* <NavLink to="/team" style={activeStyle} className="p-2">
//           Team
//         </NavLink> */}
//         <NavLink to="/contact-spc" style={activeStyle} className="p-2">
//           Contact us
//         </NavLink>
//       </nav>
//       {/* Mobile hamburger */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//       </div>
//       {/* Mobile Menu */}
//       <div
//         className={
//           nav
//             ? "fixed left-0 top-20 w-[414px] h-[532px] ease-in-out duration-500 bg-white z-10"
//             : "fixed left-[-100%]"
//         }
//       >
//         <div className="grid grid-cols-1 gap-4 px-4 font-primarySemibold">
//           <NavLink
//             to="/"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about-spc"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             About us
//           </NavLink>
//           <NavLink
//             to="/community"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Community
//           </NavLink>
//           <NavLink
//             to="/events"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/trainings"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Trainings
//           </NavLink>
//           {/* <NavLink
//             to="/team"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Team
//           </NavLink> */}
//           <NavLink
//             to="/contact-spc"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Contact us
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/aleph-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    <div className="p-0 md:p-10">
      {/* Desktop Nav */}
      <div className="w-full h-20 hidden md:flex items-center justify-center gap-20 bg-white shadow-xl rounded-full fixed z-50">
        <div className="w-[104px] h-[58px]">
          <img src={Logo} alt="SPC Logo" />
        </div>
        <nav className=" text-gray-600 font-primaryRegular hidden md:flex">
          <NavLink to="/" style={activeStyle} className="p-2">
            Home
          </NavLink>
          <NavLink to="/about-us" style={activeStyle} className="p-2">
            About Us
          </NavLink>
          <NavLink to="/services" style={activeStyle} className="p-2">
            Services
          </NavLink>
          <NavLink to="/blogs" style={activeStyle} className="p-2">
            Blogs
          </NavLink>
          <NavLink to="/events" style={activeStyle} className="p-2">
            Events
          </NavLink>
        </nav>
        <div className="w-[153px] h-[55px] rounded-3xl bg-[#34C759] text-white font-primarySemibold flex items-center justify-center text-lg">
          Contact Us
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="w-full h-20 md:hidden flex items-center justify-between p-4 mx-auto shadow-xl z-10 fixed bg-gradient-to-r from-[#34C759]/50 to-[#FFC107]/50 ">
        <div className="w-[76px] h-[42px]">
          <img src={Logo} alt="Aleph Logo" />
        </div>
        <div className="">Contact</div>
        {/* Mobile hamburger */}
        <div onClick={handleNav} className="">
          {nav ? (
            <AiOutlineClose size={30} color="black" />
          ) : (
            <AiOutlineMenu size={30} color="black" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-20 w-[414px] h-[532px] ease-in-out duration-500 bg-white z-10"
              : "fixed left-[-100%]"
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
            <NavLink
              to="/contact-us"
              style={activeStyleMobile}
              className="p-2"
              onClick={() => setNav(false)}
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
