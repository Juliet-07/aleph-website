import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Ernest from "../assets/ernest.svg";
import Senator from "../assets/senator.svg";
import Tabs from "../assets/tabs.svg";

const testimonials = [
  {
    name: "Ernest Iweha",
    title: "Chief Visioner, Krafta Innovation Ltd",
    image: Ernest, // Assuming `Ernest` is imported or defined elsewhere
    feedback:
      "Effective financial management requires more than just knowledge and skill. Your track record of experience sets you apart.",
  },
  {
    name: "Senator Ihenyen",
    title: "Lead Partner, Infusion Lawyers",
    image: Senator, // Assuming `Senator` is imported or defined elsewhere
    feedback:
      "Aleph Biz Solutions, led by a CEO of great resourcefulness that combines business acumen with character and vision, is a company that adds priceless value across various value chains.",
  },
  {
    name: "Tabitha Muthoni",
    title: "Media Consultant and Advisor",
    image: Tabs, // Assuming `Tabs` is imported or defined elsewhere
    feedback:
      "Working with Aleph Biz Solutions Ltd has been an exceptional experience. Their dedication to delivering innovative, scalable, and client-focused solutions is truly commendable.",
  },
  {
    name: "John Doe",
    title: "Product Manager, Tech Solutions",
    image: Ernest, // Assuming `John` is imported or defined elsewhere
    feedback:
      "The team at Aleph Biz Solutions goes above and beyond to meet client expectations, and their innovation is unmatched.",
  },
  {
    name: "Jane Smith",
    title: "CEO, Creative Co.",
    image: Senator, // Assuming `Jane` is imported or defined elsewhere
    feedback:
      "Aleph Biz Solutions combines technical expertise with a focus on client success. Working with them has been a pleasure.",
  },
  {
    name: "Michael Johnson",
    title: "CTO, Future Innovations",
    image: Tabs, // Assuming `Michael` is imported or defined elsewhere
    feedback:
      "Their ability to translate complex requirements into effective solutions is truly impressive. Highly recommended!",
  },
];

const borderColors = ["#34C759", "#007AFF", "#FF9500"];

export default function TestimonialsCarousel() {
  return (
    <div className="w-full flex flex-col items-center justify-between p-4 md:p-10">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start my-4">
        <h2 className="text-xl md:text-3xl font-primaryRegular text-[#34C759]">
          Testimonials
        </h2>
        <div className="font-primaryBold text-3xl md:text-5xl 2xl:text-6xl text-[#565656] text-center md:text-left">
          What Our Clients Are Saying
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Default for mobile
        // navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: ${
              index === 0 ? "#34C759" : "#34C759"
            };"></span>`;
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 }, // For tablets
          1024: { slidesPerView: 2 }, // For desktop
        }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <>
            <SwiperSlide key={index}>
              {/* Desktop View */}
              <div
                className={`w-[494px] min-h-[200px] shadow-xl bg-white md:flex flex-col items-center justify-between p-5 m-10 hidden`}
                style={{
                  borderLeft: `8px solid ${
                    borderColors[index % borderColors.length]
                  }`,
                }}
              >
                <div className="font-primaryRegular text-[#565656]/[85%]">
                  {testimonial.feedback}
                </div>
                <div className="w-full flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="md:w-[56px] md:h-[56px]"
                  />
                  <div>
                    <h3 className="font-primaryBold md:text-xl text-[#1E1E1E]">
                      {testimonial.name}
                    </h3>
                    <p className="md:text-sm font-primaryRegular text-[#565656]/[85%]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
              {/* Mobile View */}
              <div
                className={`w-[358px] min-h-[200px] shadow-xl bg-white flex items-center justify-between gap-4 p-5 m-4 md:hidden`}
                style={{
                  borderLeft: `8px solid ${
                    borderColors[index % borderColors.length]
                  }`,
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[84px] h-[84px]"
                />

                <div className="grid gap-4">
                  <div>
                    <h3 className="font-primaryBold text-[#1E1E1E]">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs font-primaryRegular text-[#565656]/[85%]">
                      {testimonial.title}
                    </p>
                  </div>
                  <p className="text-sm font-primaryRegular text-[#1E1E1E]/[80%]">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
