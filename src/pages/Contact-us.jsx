import React from "react";
import HeroSection from "../components/HeroSection";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        textSize="text-2xl md:text-6xl"
        subHeading={[
          {
            text: "We Are Ready To Hear From You",
            color: "white",
          },
          // { text: "Thrive", color: "#FFC107" },
          // { text: "And", color: "white" },
          // { text: "Scale", color: "#FFC107" },
        ]}
        buttonLabel="Get Started With Us"
      />
      {/* Contact Body */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-20 bg-[#E5FCEB]">
        <div>
          <div className="font-primaryBold text-[#455A64] text-3xl md:text-5xl">
            Contact Us
          </div>
          <div className="md:w-[454px] md:text-xl text-[#455A64] font-primaryMedium leading-8 my-2 md:my-4 md:leading-10">
            Email, contact or complete the form to learn how Aleph Biz can help
            your business Thrive Today And Scale Tomorrow
          </div>
          <div className="grid space-y-6 md:space-y-10 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <MdOutlinePhone size={20} color="#455A64" />
              <span className="text-[#455A64] font-primaryRegular md:text-lg">
                +250798287905 (For WhatsApp and BOTIM)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail size={20} color="#455A64" />

              <span className="text-[#455A64] font-primaryRegular md:text-lg">
                comms@alephbiz.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SlLocationPin size={20} color="#455A64" />

              <span className="text-[#455A64] font-primaryRegular md:text-lg">
                KN 78st, Kigali, Kigali RW
              </span>
            </div>
          </div>
        </div>
        {/* Form Proper */}
        <div className="md:w-[550px] flex flex-col p-6 bg-white shadow-2xl shadow-[#455A64] rounded-[40px]">
          <div>
            <p className="font-primaryBold text-[#455A64] text-3xl md:text-5xl">
              Get In Touch
            </p>
            <p className="font-primaryRegular text-xl md:text-2xl text-[#455A64] my-2">
              You can reach us anytime
            </p>
          </div>

          <form
            className="w-full max-w-lg mt-4"
            // onSubmit={handleSubmit(handleContactForm)}
          >
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-first-name"
                >
                  First name
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-first-name"
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  // value={first_name}
                  // onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  // value={last_name}
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-first-name"
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  // value={first_name}
                  // onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  // value={last_name}
                  // onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full -mx-3 mb-4 md:mb-6 px-3">
              {/* <div className="w-full px-3"> */}
              <label
                for="message"
                className="block mb-2 tracking-wide text-sm font-primaryMedium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                placeholder="Send us your message"
                name="message"
                // value={message}
                // onChange={handleChange}
              ></textarea>
              {/* </div> */}
            </div>
            <button
              type="submit"
              className="w-full bg-[#34C759] text-white rounded-[35px] p-4 text-center font-primarySemibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
