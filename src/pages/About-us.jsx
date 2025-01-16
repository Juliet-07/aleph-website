import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../assets/about-us.svg";
import AboutUsBG from "../assets/about-us-bg.svg";
import TeamCard from "../components/TeamCard";
import BG from "../assets/bgThrive.svg";
import BGMobile from "../assets/bgThriveMobile.svg";
import WaterMark from "../assets/water-mark.svg";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "King-son Tamuno-omie Arivieruokuma",
      title: "Founder and CEO",
      description:
        "King-son Tamuno-omie Arivieruokuma is a dynamic social entrepreneur and tech innovator with 15+ years of experience in finance, business, and cutting-edge technologies.",
    },
    {
      id: 2,
      name: "Sally Ayebaye",
      title: "CFO and Business Strategist",
      description:
        "Sally Ayebaye is an accomplished accountant with substantial working experience in financial management, auditing, and compliance. Her career has provided her with a robust foundation in financial systems, allowing her to produce precise and insightful financial analyses and reports.",
    },
    {
      id: 3,
      name: "Bright Dawson, C.Sc",
      title: "Head of Brand and PR",
      description:
        "Bright Dawson, C.Sc is a creative designer and branding enthusiast with a passion for cryptocurrency and a strong interest in Education and Business.",
    },
    {
      id: 4,
      name: "Isaiah Esuuk-nte",
      title: "Head of Operations and Data Analyst",
      description:
        "Isaiah Esuuk-nte is a results-oriented Project Manager with a proven track record of driving growth and delivering successful projects. Possessing a deep understanding of data analysis and visualization, he excels at transforming complex data into actionable insights.",
    },
    {
      id: 5,
      name: "Ivy Kibaara",
      title: "Head of Research and Development",
      description:
        "Ivy Kibaara is a dynamic professional with a strong foundation in entrepreneurial leadership. With a diverse background spanning research, administration, and business development, Ivy excels in strategic planning, project management, and operational support.",
    },
    {
      id: 6,
      name: "Tabitha Muthoni",
      title: "Adviser and Partner",
      description:
        "Tabitha Muthoni is a distinguished Financial Journalist currently serving as an Anchor and Producer at CNBC Africa. In her role, she conducts live interviews with high-profile CEOs and investors, providing in-depth analysis of the performance of various listed companies across African stock markets.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundGradient="bg-gradient-to-b from-[#038B25]/[100%] to-[#34C759]/[100%]"
        textSize="text-2xl md:text-5xl"
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
          <h3 className="text-[#565656] font-primaryBold my-4 text-2xl md:text-5xl 2xl:text-6xl text-center md:text-left">
            About Us
          </h3>
          <div className="md:w-[651px] text-base md:text-[23px] leading-8 font-primaryMedium text-[#455A64] text-justify">
            At Aleph Biz Solutions Ltd, we empower businesses to{" "}
            <font color="#038B25">
              <b>thrive today</b>
            </font>
            <b> and </b>{" "}
            <font color="#038B25">
              <b>scale tomorrow</b>{" "}
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
            <font color="#038B25">
              <b>thrive today</b>{" "}
            </font>
            <font className="font-primaryBold">and </font>{" "}
            <font color="#038B25">
              <b>scale tomorrow</b>{" "}
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
        <div className="font-primaryBold text-white text-2xl md:text-5xl 2xl:text-6xl z-[3]">
          Who We Are
        </div>

        {/* Content Box */}
        <div className="md:w-[867px] h-auto bg-white relative z-[3] p-4 md:p-6 shadow-lg text-left text-sm md:text-xl font-primaryMedium text-[#455A64] leading-7 md:leading-10">
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
      {/* Teams */}
      {/* <div className="w-full flex flex-col items-center justify-center p-4 md:p-10">
        <h1 className="text-center text-2xl md:text-4xl 2xl:text-5xl font-primaryBold mb-10 text-[#565656]">
          Meet The Brains Behind Our Success
        </h1>
        <div className="relative w-full h-auto p-1 border-[10px] border-[#F7DC6F]/25 flex flex-col items-center justify-center">
          Inner content container
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div> */}
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
              <button className="w-[162px] md:w-[275px] h-10 md:h-[69px] rounded-xl md:rounded-[35px] bg-[#FFC107] font-buttonText text-xs md:text-base">
                Book An Appointment
              </button>
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

export default About;
