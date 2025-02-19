import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import moment from "moment";
import ReactMarkdown from "react-markdown"; // For rendering formatted API content
import BG from "../assets/bgThrive.svg";
import BGMobile from "../assets/bgThriveMobile.svg";
import WaterMark from "../assets/water-mark.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BsCalendar2Date } from "react-icons/bs";

const EventDetails = () => {
  const { id } = useParams();
  const spaceID = import.meta.env.VITE_REACT_APP_EVENT_SPACE_ID;
  const token = import.meta.env.VITE_REACT_APP_EVENT_CONTENT_ACCESS_TOKEN;
  const client = createClient({ space: spaceID, accessToken: token });

  const [singleEventPost, setSingleEventPost] = useState(null);
  const [events, setEvents] = useState([]);
  const otherEvents = 3;

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries, "checking single entries");
          setSingleEventPost(entries.fields);
          console.log(entries.fields.postContent, "checking the content");
        });
      } catch (error) {
        console.log("error");
      }
    };

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
    getEntryById();
    getAllEntries();
  }, []);

  if (!singleEventPost) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-10">
        {/* Blog Image */}
        <img
          src={singleEventPost?.eventImage?.fields?.file?.url}
          alt="Blog Preview"
          className="w-full max-w-4xl h-[473px] rounded-t-lg shadow-md"
        />
        <div className="w-full max-w-4xl flex items-center justify-between my-4">
          <button className="w-[180px] md:w-[248px] h-10 md:h-[60px] border border-[#34C759] font-primarySemibold rounded-xl text-[#455A64] flex items-center justify-center gap-3 text-sm md:text-lg p-2">
            <span>
              <BsCalendar2Date size={20} />
            </span>
            {moment(singleEventPost?.fields?.createdDate).format(
              "MMMM Do, YYYY"
            )}
          </button>
          <div className="w-[161px] md:w-[174px] h-[41px] md:h-[67px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText">
            <a
              href={`${singleEventPost?.fields?.registrationLink}`}
              target="_blank"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full max-w-4xl text-center mt-6 space-y-6">
          <h3 className="text-2xl md:text-4xl font-primaryBold text-left text-[#455A64]">
            {singleEventPost?.eventTitle}
          </h3>

          <div className="text-lg md:text-2xl leading-relaxed text-gray-700 text-left font-primaryRegular space-y-4">
            {/* <ReactMarkdown>{singleEventPost?.postContent}</ReactMarkdown> */}
            {/* {singleEventPost?.postContent?.content.map((content)=>(
                <div></div> 
            ))} */}
            {singleEventPost?.postContent &&
              documentToReactComponents(singleEventPost.postContent)}
          </div>
        </div>
        <div className="w-full md:w-[604px] h-20 md:h-[141px] border border-[#34C759] rounded-lg my-4 flex items-center justify-around">
          <div className="font-primaryMedium text-sm md:text-2xl text-[#455A64]">
            Click this button to
            <br /> register for this event
          </div>
          <div className="w-[161px] md:w-[174px] h-[41px] md:h-[67px] bg-[#34C759] text-white md:text-xl rounded-full flex items-center justify-center font-buttonText">
            <a
              href={`${singleEventPost?.fields?.registrationLink}`}
              target="_blank"
            >
              Register Now
            </a>
          </div>
        </div>
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
              <a href="https://forms.gle/ktBqUbi41BzqNM2p7" target="_blank">
                <button className="w-[162px] md:w-[275px] h-10 md:h-[69px] rounded-xl md:rounded-[35px] bg-[#FFC107] font-buttonText text-xs md:text-base">
                  Book An Appointment
                </button>
              </a>
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

export default EventDetails;
