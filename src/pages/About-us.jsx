import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../assets/about-us.svg";
import AboutUsBG from "../assets/about-us-bg.svg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
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
      {/* About Us */}
      <div className="w-full my-10 flex flex-col md:flex-row items-center justify-center 2xl:justify-around p-4 md:gap-20">
        <div>
          <h3 className="text-[#565656] font-primaryBold my-4 text-xl md:text-5xl text-center md:text-left">
            About Us
          </h3>
          <div className="md:w-[651px] text-base md:text-[23px] leading-8 font-primaryMedium text-[#455A64] text-justify">
            At Aleph Biz Solutions Ltd, we empower businesses to{" "}
            <font color="#038B25" className="font-primaryBold">
              thrive today{" "}
            </font>
            <font className="font-primaryBold">and </font>{" "}
            <font color="#038B25" className="font-primaryBold">
              scale tomorrow{" "}
            </font>{" "}
            by offering innovative, tailored solutions that address the dynamic
            needs of startups and businesses across Africa. Our commitment to
            growth and transformation is based on the provision of comprehensive
            services such as financing, emerging technology integration, and
            business consultancy.
            <br />
            <br /> Through a focus on strategic partnerships and
            forward-thinking solutions, we are building a Pan-African startup
            ecosystem that fosters innovation and drives sustainable
            development. Aleph Biz Solutions is more than a service provider—we
            are your partner in achieving operational excellence and expansive
            growth, ensuring you{" "}
            <font color="#038B25" className="font-primaryBold">
              thrive today{" "}
            </font>
            <font className="font-primaryBold">and </font>{" "}
            <font color="#038B25" className="font-primaryBold">
              scale tomorrow{" "}
            </font>
          </div>
        </div>
        <img src={AboutUs} />
      </div>
      {/* Who We Are */}
      <div
        className="w-full h-auto relative bg-cover flex flex-col items-center justify-center gap-10 py-10 px-4 md:px-0"
        style={{
          backgroundImage: `url(${AboutUsBG})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/50 z-[2]"></div>

        {/* Header */}
        <div className="font-primaryBold text-white text-2xl md:text-5xl z-[3]">
          Who We Are
        </div>

        {/* Content Box */}
        <div className="md:w-[867px] h-auto bg-white relative z-[3] p-4 md:p-10 shadow-lg rounded-md text-left text-sm md:text-xl font-primaryMedium text-[#455A64] leading-7 md:leading-10">
          Aleph Biz Solutions Ltd is a forward-driven company dedicated to
          helping businesses thrive and scale in a competitive global landscape.
          With a strong presence in Rwanda and beyond, we connect startups and
          enterprises to the resources, strategies, and technologies needed to
          unlock their full potential.
          <br />
          <br />
          From tailored business scaling services to cutting-edge technology
          integration, we specialize in crafting solutions that deliver
          measurable impact. With expertise in financial services, branding,
          market research, and venture capital, we enable businesses to navigate
          challenges, seize opportunities, and grow sustainably.
          <br />
          <br />
          At Aleph, we believe in transforming ambitions into achievements by
          combining innovation, strategy, and a deep understanding of the
          African market. Together, we shape the future of thriving businesses
          and scalable success.
          <br />
          <br />
        </div>
      </div>
      <div className="w-full my-10">Teams</div>
    </>
  );
};

export default About;
