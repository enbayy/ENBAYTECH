import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../data/ServicesData";
import logo from "../assets/enbayLogo.png";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleContactClick = () => {
        navigate("/iletisim");
    };

    return (
        <section
            id="about"
            className="container mx-auto bg-white dark:bg-[#121917] py-24 px-6 sm:px-12 lg:px-20 font-poppins"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center mb-8 space-x-6" data-aos="fade-up">
                    <img
                        src={logo}
                        alt="Enbaytech Logo"
                        className="w-24 h-24 object-contain"
                    />
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] dark:text-[#e0f2f1] tracking-tight font-inter">
                        ENBAYTECH
                    </h1>
                </div>

                <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins" data-aos="fade-up">
                    ENBAYTECH, dijital dünyada işletmelerin ihtiyaç duyduğu yenilikçi ve profesyonel web çözümleri sunar. Web tasarımı, logo tasarımı, SEO, hosting ve domain hizmetleri ile dijital varlıkların güçlendirilmesini sağlar.
                </p>

                <div className="grid md:grid-cols-2 gap-16 mb-32 mt-16">
                    <div
                        data-aos="fade-right"
                        className="flex flex-col items-start text-left p-10 bg-gray-50 dark:bg-[#192523] border border-gray-200 dark:border-[#284032] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 font-inter">
                            Misyonumuz
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md font-poppins">
                            Müşterilerimize yenilikçi, güvenilir ve etkin dijital çözümler sunarak marka değerlerini artırmak ve hedef kitlelerine etkili biçimde ulaşmalarını sağlamak temel önceliğimizdir.
                        </p>
                    </div>

                    <div
                        data-aos="fade-left"
                        className="flex flex-col items-start text-left p-10 bg-gray-50 dark:bg-[#192523] border border-gray-200 dark:border-[#284032] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 font-inter">
                            Vizyonumuz
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md font-poppins">
                            Teknolojideki gelişmeleri yakından takip ederek kaliteli, sürdürülebilir ve yenilikçi dijital çözümler sunan lider bir kuruluş olmak.
                        </p>
                    </div>
                </div>

                <div>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center text-[#0f172a] dark:text-[#e0f2f1] mb-20 tracking-wide font-inter"
                        data-aos="fade-up"
                    >
                        HİZMETLERİMİZ
                    </h2>

                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="bg-white dark:bg-[#1f2a24] border border-gray-300 dark:border-[#2f3e35] rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-inter mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 text-center" data-aos="fade-up">
                    <button
                        onClick={handleContactClick}
                        className="inline-block bg-[#059669] hover:bg-[#047c58] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;