import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../data/ServicesData";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    const handleContactClick = () => {
        navigate("/iletisim");
    };

    return (
        <section
            id="about"
            className="container bg-[#f0fdf4] dark:bg-[#1a1f1c] py-20 px-4 sm:px-8 lg:px-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="mx-auto">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h1 className="text-[#0f172a] dark:text-[#e0f2f1] text-5xl font-bold color2 tracking-wide mb-6 font-inter">
                        ENBAYTECH Hakkında
                    </h1>
                    <p className="text-[#392f2f] dark:text-[#d4cfce] max-w-3xl mx-auto text-lg color3 leading-relaxed font-poppins">
                        ENBAYTECH, dijital dünyada işletmelerin ihtiyaç duyduğu profesyonel web çözümleri sunan,
                        İstanbul merkezli bir teknoloji firmasıdır. Web tasarımı, logo tasarımı, SEO çalışmaları,
                        hosting ve domain hizmetleri ile web sitesi bakımı alanlarında uzman ekibimizle müşterilerimizin
                        dijital varlıklarını güçlendiriyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-14 mb-24">
                    <div
                        data-aos="fade-right"
                        className="flex flex-col items-center text-center p-8 bg-color5 border border-color4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500"
                    >
                        <div className="mb-6 text-6xl" aria-hidden="true" style={{ color: "#112224" }}>
                            🎯
                        </div>
                        <h2 className="text-[#0f172a] dark:text-[#e0f2f1] text-3xl font-semibold color2 mb-3 font-inter">Misyonumuz</h2>
                        <p className="text-[#0f172a] dark:text-[#e0f2f1] text-lg color3 leading-relaxed max-w-md font-poppins">
                            Müşterilerimize, yenilikçi ve güvenilir dijital çözümler sunarak; işletmelerin
                            online varlıklarını güçlendirmek, marka değerlerini artırmak ve hedef kitlelerine
                            daha etkili ulaşmalarını sağlamak en büyük önceliğimizdir.
                        </p>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="flex flex-col items-center text-center p-8 bg-color5 border border-color4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500"
                    >
                        <div className="mb-6 text-6xl" aria-hidden="true" style={{ color: "#112224" }}>
                            🌟
                        </div>
                        <h2 className="text-[#0f172a] dark:text-[#e0f2f1] text-3xl font-semibold color2 mb-3 font-inter">Vizyonumuz</h2>
                        <p className="text-[#0f172a] dark:text-[#e0f2f1] text-lg color3 leading-relaxed max-w-md font-poppins">
                            Teknolojideki gelişmeleri yakından takip ederek, müşterilerimize en son
                            dijital trendlerle uyumlu, kaliteli ve sürdürülebilir çözümler sunan öncü firma olmak.
                        </p>
                    </div>
                </div>

                <div>
                    <h2
                        className="text-[#0f172a] dark:text-[#e0f2f1] text-4xl font-bold color2 text-center mb-16 tracking-wide font-inter"
                        data-aos="fade-up"
                    >
                        HİZMETLERİMİZ
                    </h2>
                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="bg-[#f0fdf4] dark:bg-[#1a1f1c] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg shadow-gray-700 transition-shadow duration-400 cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <h3 className="text-2xl font-semibold mb-4 color1 tracking-wide font-inter">
                                    {service.title}
                                </h3>
                                <p className="color3 leading-relaxed font-poppins">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-28 text-center" data-aos="fade-up">
                    <button
                        onClick={handleContactClick}
                        className="text-[#392f2f] dark:text-[#d4cfce] px-6 py-3 rounded-full border-2 hover:border-4 text-lg font-semibold font-inter"
                    >
                        İLETİŞİME GEÇ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;