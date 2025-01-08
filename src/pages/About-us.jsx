import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        mainHeading="Thrive Today"
        subHeading="We Are Passionate About Empowering Businesses To Thrive And Scale"
        buttonLabel="Get Started With Us"
        // onButtonClick={handleButtonClick}
      /> */}
      <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        textSize="text-xl md:text-4xl"
        subHeading={[
          {
            text: "We Are Passionate About Empowering Businesses To",
            color: "white",
          },
          { text: "Thrive", color: "#FFC107" },
          { text: "And", color: "white" },
          { text: "Scale", color: "#FFC107" },
        ]}
        buttonLabel="Get Started With Us"
        // onButtonClick={handleButtonClick}
      />
    </>
  );
};

export default About;
