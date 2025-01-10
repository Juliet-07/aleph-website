import React from "react";
import HeroSection from "../components/HeroSection";

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
      <div className="w-full flex items-center justify-center p-20 bg-[#E5FCEB]"></div>
    </>
  );
};

export default Contact;
