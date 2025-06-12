import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../data/ServicesData";
import logoLight from "../assets/enbayLogo.png";
import logoDark from "../assets/enbayLogo3.png";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const handleContactClick = () => {
        navigate("/iletisim");
    };

    return (
        <section
            id="about"
            className="container mx-auto px-6 py-12 sm:px-12 lg:px-24 font-poppins bg-white dark:bg-[#1a1f1c]"
        >
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex flex-col items-center mb-12" data-aos="zoom-in">
                    <img
                        src={logoLight}
                        alt="logo"
                        className="h-32 w-32 block dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="logo dark"
                        className="h-32 w-32 hidden dark:block"
                    />
                    <h1 className="text-6xl font-extrabold text-[#059669] dark:text-[#a3d9b1] tracking-tight font-inter">
                        ENBAYTECH
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-xl leading-relaxed font-poppins">
                        Yenilikçi, güvenilir ve sürdürülebilir dijital çözümlerle markanızı geleceğe taşıyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div
                        className="bg-white dark:bg-[#1e3227] rounded-2xl shadow-lg p-10 text-left"
                        data-aos="fade-right"
                    >
                        <div className="flex items-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-green-500 mr-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m2 8H7a2 2 0 01-2-2v-6a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2z"
                                />
                            </svg>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-inter">
                                Misyonumuz
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-poppins text-lg">
                            Müşterilerimizin dijital hedeflerine ulaşmaları için yaratıcı, etkili ve güvenilir çözümler sunuyoruz.
                        </p>
                    </div>

                    <div
                        className="bg-white dark:bg-[#1e3227] rounded-2xl shadow-lg p-10 text-left"
                        data-aos="fade-left"
                    >
                        <div className="flex items-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-green-500 mr-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 20l-5.447-2.724A2 2 0 013 15.382V5a2 2 0 012-2h14a2 2 0 012 2v10.382a2 2 0 01-1.553 1.894L15 20m-6 0v-8m6 8v-8"
                                />
                            </svg>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-inter">
                                Vizyonumuz
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-poppins text-lg">
                            Teknolojiyi en iyi şekilde kullanarak dijital dünyada öncü, güvenilir ve sürdürülebilir bir marka olmak.
                        </p>
                    </div>
                </div>

                <div>
                    <h2
                        className="text-4xl font-bold mb-12 text-[#059669] dark:text-[#a3d9b1] tracking-wide font-inter"
                        data-aos="fade-up"
                    >
                        HİZMETLERİMİZ
                    </h2>
                    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className="bg-white dark:bg-[#213b29] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={idx * 150}
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 font-inter">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20" data-aos="zoom-in">
                    <button
                        onClick={handleContactClick}
                        className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold px-10 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition transform hover:scale-105"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;