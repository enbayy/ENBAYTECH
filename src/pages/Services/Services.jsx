import React, { useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    const navigate = useNavigate();
    const firstSixServices = services.slice(0, 6);

    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section
            id="services"
            className="container bg-white dark:bg-[#1a1f1c] py-20"
        >
            <div className="mx-auto">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white font-inter">
                        Markanız İçin Neler Yapabiliriz?
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins">
                        Markanızı dijital dünyada öne çıkaracak yaratıcı ve teknik çözümler sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {firstSixServices.map((service, index) => (
                        <div
                            key={service.id}
                            className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1f1c] dark:to-[#111411] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
                            data-aos="flip-left"
                            data-aos-delay={index * 200}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-gradient-to-tr from-[#d1fae5] to-[#10b981] dark:from-[#065f46] dark:to-[#10b981] p-4 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                                    <span className="text-2xl text-[#065f46] dark:text-white">
                                        {service.icon}
                                    </span>
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

                <div className="text-center mt-12" data-aos="zoom-in">
                    <button
                        onClick={() => navigate("/hizmetlerimiz")}
                        className="px-6 py-3 bg-[#10b981] dark:bg-[#059669] text-white text-base font-medium rounded-full hover:scale-105 transition"
                    >
                        Tüm Hizmetlerimizi Gör
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;