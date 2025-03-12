import React from "react";
import Slider from "react-slick";
import { testimonials } from "../data/TestimonialData";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="py-10  text-[#1E293B] dark:text-white">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonials.map(({ id, name, comment, img, company }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-6 mx-4 rounded-xl bg-transparent relative">
                      <img
                        src={img}
                        alt={name}
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover rounded-lg"
                      />
                      <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-[#E76F51] dark:text-[#E9C46A]">{name}</h1>
                        <h1 className="text-lg font-semibold">{company}</h1>
                        <p className="text-gray-600 dark:text-gray-300 xl:pr-40 font-poppins">
                          “{comment}”
                        </p>
                      </div>
                      <p className="text-[#E76F51]/20 dark:text-[#E9C46A]/30 text-[10rem] font-serif absolute bottom-2 right-5">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-dots li button:before {
          font-size: 10px;
          color: #E76F51;
        }
        .dark .custom-dots li button:before {
          color: #E9C46A;
        }
      `}</style>
    </>
  );
};

export default Testimonial;