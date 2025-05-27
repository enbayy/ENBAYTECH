import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";

const AllServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleDetailClick = (id) => {
    navigate(`/hizmetler/${id}`);
  };

  return (
    <section
      id="all-services"
      className="container bg-white dark:bg-[#1a1f1c] py-20"
    >
      <div className="mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white font-inter">
            TÜM HİZMETLERİMİZ
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins">
            Ajansımızın sunduğu tüm dijital çözümlerle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1f1c] dark:to-[#111411] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              data-aos="flip-left"
              data-aos-delay={index * 200}
              onClick={() => handleDetailClick(service.id)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#10b981] to-[#34d399] group-hover:rotate-45 transition-transform duration-500">
                  <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#10b981] to-[#34d399] group-hover:rotate-45 transition-transform duration-500">
                    <div className="bg-white dark:bg-[#1a1f1c] p-4 rounded-full slow-spin">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                  {service.title}
                </h2>
              </div>
              <h3 className="text-md text-gray-500 dark:text-gray-400 mb-3 font-semibold font-poppins uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-poppins line-clamp-5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;