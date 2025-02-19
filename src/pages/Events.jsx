import React, { useState, useEffect } from "react";
import EventBG from "../assets/events-bg.svg";
import EventPreview from "../assets/events.png";
import UpNext from "../assets/upNext.svg";
import WaterMark from "../assets/water-mark.svg";
import { Link } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";
import { createClient } from "contentful";
import moment from "moment";

const Events = () => {
  const spaceID = import.meta.env.VITE_REACT_APP_EVENT_SPACE_ID;
  const token = import.meta.env.VITE_REACT_APP_EVENT_CONTENT_ACCESS_TOKEN;
  const client = createClient({ space: spaceID, accessToken: token });

  const [events, setEvents] = useState([]);

  const latestEvent = 1;

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries, "checking entries");
          setEvents(entries.items);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      <div
        className="w-full h-[238px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${EventBG})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/60 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-20 md:pt-0 md:mt-4">
          <p className="text-3xl md:text-6xl font-primaryBold text-white md:w-[706px] mb-2 text-center tracking-wide">
            Where <font color="#FFC107  ">Connections</font> and Opportunities
            Happen
          </p>
        </div>
      </div>
      {/* Top or Recent Event */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center bg-white my-10">
        {/* Background Watermark */}
        <div
          className="absolute inset-0 bg-cover bg-right-top bg-no-repeat opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${WaterMark})`,
            backgroundSize: "50%",
            backgroundPosition: "right top",
          }}
        ></div>

        {/* Content */}
        {events.slice(0, latestEvent).map((event) => (
          <>
            <div className="relative flex-1 m-4 md:p-6">
              {/* Left: Images */}

              <div className="flex items-center justify-center space-x-0">
                <div className="">
                  <div className="text-[#565656] text-2xl md:text-5xl font-primaryBold py-5">
                    Up Next
                  </div>
                  <img
                    src={event?.fields?.eventImage?.fields?.file?.url}
                    className="md:w-[571px] md:h-[372px]"
                    alt="aleph-biz"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex-1 p-6 md:space-y-4 md:mx-4">
              {/* Right: Writeup */}
              <div className="w-full md:block flex flex-col">
                <div className="flex items-center justify-between my-4">
                  <p></p>
                  <button className="w-[180px] md:w-[248px] h-10 md:h-[60px] bg-[#21295C] font-buttonText rounded-xl text-white flex items-center justify-center gap-3 text-sm md:text-lg p-2">
                    <span>
                      <BsCalendar2Date size={20} />
                    </span>
                    {moment(event?.fields?.createdDate).format("MMMM Do, YYYY")}
                  </button>
                </div>

                <div className="font-primaryBold text-2xl md:text-5xl text-[#455A64]">
                  {event?.fields?.eventTitle}
                </div>
              </div>

              <p className="text-[#565656] md:text-xl my-2 font-primaryRegular leading-8 md:leading-10 text-justify">
                {event?.fields?.eventDesc}
              </p>

              <div className="mt-4 flex items-center md:items-start md:justify-start space-x-4">
                <div className="w-[161px] md:w-[174px] h-[41px] md:h-[67px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText">
                  <a
                    href={`${event?.fields?.registrationLink}`}
                    target="_blank"
                  >
                    Register Now
                  </a>
                </div>
                <Link
                  to={`/events/eventDetails/${event?.sys?.id}`}
                  className="w-[161px] md:w-[198px] h-[41px] md:h-[67px] text-[#565656] border border-[#565656] md:text-xl rounded-full flex items-center justify-center font-buttonText"
                >
                  See More Details
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Upcoming Events */}
      <div className="w-full bg-[#E1F7E6] p-4 md:p-10 2xl:p-20 my-10">
        <div className="text-[#565656] text-2xl md:text-5xl font-primaryBold my-4 md:my-10 text-center">
          Upcoming Events
        </div>
        <div className="grid gap-4 md:gap-6 2xl:gap-10">
          {events.map((event) => (
            <div className="w-full bg-white rounded-[20px] p-4">
              <div className="flex items-center justify-between gap-14 md:gap-10">
                <div className="flex items-center space-y-4 gap-4">
                  <img
                    src={event?.fields?.eventImage?.fields?.file?.url}
                    className="w-[97px] md:w-[266px] md:h-[206px] h-[95px]"
                  />
                  <div className="grid">
                    <h2 className="text-xs md:text-3xl font-primarySemibold text-[#455A64]">
                      {event?.fields?.eventTitle}
                    </h2>
                    <p className="w-[190px] md:w-[572px] text-[8px] md:text-lg text-[#565656] font-primaryMedium my-2 md:my-3">
                      {event?.fields?.eventDesc}
                    </p>
                    <div className="flex gap-4">
                      <div className="bg-[#34C759] w-[65px] md:w-[156px] h-[25px] md:h-[60px] rounded-full text-white font-primaryMedium flex items-center justify-center text-[8px] md:text-base">
                        <a
                          href={`${event?.fields?.registrationLink}`}
                          target="_blank"
                        >
                          Register Now
                        </a>
                      </div>
                      <Link
                        to={`/events/eventDetails/${event?.sys?.id}`}
                        className="w-[73px] md:w-[177px] h-[25px] md:h-[60px] rounded-full border border-[#455A64] text-[#455A64] font-primaryMedium flex items-center justify-center text-[8px] md:text-base"
                      >
                        See More Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-[60px] md:w-[129px] h-[47px] md:h-[102px] mx-4 bg-[#FFE784]/[13%] border border-[#21295C]/[100%] rounded-xl flex flex-col items-center justify-center">
                  <p className="text-[#455A64] text-[6px] md:text-sm font-primaryRegular">
                    {event?.fields?.eventMonth}
                  </p>
                  <p className="text-[#455A64] md:text-3xl font-primarySemibold">
                    {event?.fields?.eventDay}
                  </p>
                  <p className="text-[#455A64] text-[6px] md:text-sm font-primaryRegular">
                    {event?.fields?.eventYear}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
