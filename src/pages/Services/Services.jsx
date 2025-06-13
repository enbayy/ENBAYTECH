import React, { useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css"

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
                            className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1f1c] dark:to-[#111411] border border-gray-200 dark:border-gray-700 rounded-3xl p-8  hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
                            data-aos="flip-left"
                            data-aos-delay={index * 200}
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

                <div className="text-center mt-12" data-aos="zoom-in">
                    <button
                        onClick={() => navigate("/hizmetlerimiz")}
                        className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#0f172a] dark:border-[#e0f2f1] rounded-full font-semibold text-[#0f172a] dark:text-[#e0f2f1] hover:bg-[#10b981] hover:text-white dark:hover:bg-[#10b981] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter"
                    >
                        Tüm Hizmetlerimizi Gör
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;