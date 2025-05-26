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
            className="bg-[#f9f9f9] dark:bg-[#000003] py-20 px-4 sm:px-8 lg:px-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h1 className="text-[#392f2f] dark:text-[#d4cfce] text-5xl font-extrabold color2 tracking-wide mb-6">
                        ENBAYTECH Hakkında
                    </h1>
                    <p className="text-[#392f2f] dark:text-[#d4cfce] max-w-3xl mx-auto text-lg color3 leading-relaxed">
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
                        <h2 className="text-[#392f2f] dark:text-[#d4cfce] text-3xl font-semibold color2 mb-3">Misyonumuz</h2>
                        <p className="text-[#392f2f] dark:text-[#d4cfce] text-lg color3 leading-relaxed max-w-md">
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
                        <h2 className="text-[#392f2f] dark:text-[#d4cfce] text-3xl font-semibold color2 mb-3">Vizyonumuz</h2>
                        <p className="text-[#392f2f] dark:text-[#d4cfce] text-lg color3 leading-relaxed max-w-md">
                            Teknolojideki gelişmeleri yakından takip ederek, müşterilerimize en son
                            dijital trendlerle uyumlu, kaliteli ve sürdürülebilir çözümler sunan öncü firma olmak.
                        </p>
                    </div>
                </div>

                <div>
                    <h2
                        className="text-4xl font-bold color2 text-center mb-16 tracking-wide"
                        data-aos="fade-up"
                    >
                        Hizmetlerimiz
                    </h2>
                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="bg-color5 border border-color4 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-400 cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <h3 className="text-2xl font-semibold mb-4 color1 tracking-wide">
                                    {service.title}
                                </h3>
                                <p className="color3 leading-relaxed">{service.description}</p>
                                <img
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="w-14 h-14 mt-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-28 text-center" data-aos="fade-up">
                    <button
                        onClick={handleContactClick}
                        className="bg-color1 hover:bg-color2 text-color5 px-12 py-5 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-105 duration-300"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;