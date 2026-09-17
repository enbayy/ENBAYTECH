
import React, { useEffect } from "react";
import { services } from "../../data/ServicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";

const AllServices = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="all-services"
      className="container bg-white dark:bg-[#000000] py-16 md:py-20"
    >
      <div className="mx-auto">

        {/* Başlık */}
        <div
          className="text-center mb-12 md:mb-14"
          data-aos="fade-down"
        >
          <span
            className="
              inline-flex items-center gap-2
              px-3 py-1.5 mb-4
              rounded-full
              border border-gray-200 dark:border-gray-800
              bg-gray-50 dark:bg-[#0a0c0a]
              text-[#FF7F00]
              text-xs font-semibold
              font-poppins
              tracking-wide
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F00]" />
            DİJİTAL ÇÖZÜMLER
          </span>

          <h1
            className="
              text-3xl md:text-4xl
              font-bold
              text-[#0f172a] dark:text-white
              font-inter
              tracking-tight
            "
          >
            Tüm Hizmetlerimiz
          </h1>

          <p
            className="
              mt-4
              text-sm md:text-base
              text-gray-600 dark:text-gray-400
              max-w-xl mx-auto
              font-poppins
              leading-7
            "
          >
            Markanızın dijital dünyadaki ihtiyaçları için modern,
            yaratıcı ve sonuç odaklı çözümler sunuyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="
                group
                relative
                overflow-hidden
                bg-white dark:bg-[#080a08]
                border border-gray-200 dark:border-gray-800
                rounded-2xl
                p-6
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-gray-300
                dark:hover:border-gray-700
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]
              "
            >

              {/* Çok hafif sağ üst dekoratif daire */}
              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  w-28
                  h-28
                  rounded-full
                  bg-gray-100/70
                  dark:bg-gray-800/20
                  transition-all
                  duration-500
                  group-hover:bg-orange-100/50
                  dark:group-hover:bg-orange-500/[0.06]
                  group-hover:scale-110
                "
              />

              {/* Üst ince çizgi */}
              <div
                className="
                  absolute
                  top-0
                  left-6
                  right-6
                  h-[2px]
                  rounded-full
                  bg-[#FF7F00]
                  scale-x-0
                  origin-left
                  group-hover:scale-x-100
                  transition-transform
                  duration-500
                "
              />

              {/* İkon */}
              <div className="relative mb-5">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-gray-50
                    dark:bg-[#101210]
                    border
                    border-gray-200
                    dark:border-gray-800
                    text-[#FF7F00]
                    transition-all
                    duration-500
                    group-hover:border-[#FF7F00]/30
                    group-hover:shadow-[0_8px_20px_rgba(255,127,0,0.10)]
                    group-hover:scale-105
                  "
                >
                  <div
                    className="
                      text-xl
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* İçerik */}
              <div className="relative">

                <p
                  className="
                    text-[11px]
                    text-[#FF7F00]
                    font-semibold
                    font-poppins
                    uppercase
                    tracking-[0.08em]
                    mb-1.5
                  "
                >
                  {service.name}
                </p>

                <h2
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    dark:text-white
                    font-inter
                    leading-snug
                    mb-3
                    transition-colors
                    duration-300
                    group-hover:text-gray-950
                    dark:group-hover:text-white
                  "
                >
                  {service.title}
                </h2>

                <p
                  className="
                    text-[13px]
                    text-gray-600
                    dark:text-gray-400
                    font-poppins
                    leading-6
                    line-clamp-4
                  "
                >
                  {service.description}
                </p>
              </div>

              {/* Alt dekoratif detay */}
              <div className="relative mt-5 flex items-center gap-2">
                <span
                  className="
                    w-6
                    h-[2px]
                    rounded-full
                    bg-gray-200
                    dark:bg-gray-700
                    group-hover:w-9
                    group-hover:bg-[#FF7F00]/60
                    transition-all
                    duration-500
                  "
                />

                <span
                  className="
                    w-1
                    h-1
                    rounded-full
                    bg-gray-300
                    dark:bg-gray-600
                    group-hover:bg-[#FF7F00]/50
                    transition-colors
                    duration-500
                  "
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AllServices;