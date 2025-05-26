import React from "react";
import logo from "../assets/enbayLogo.png"

export const AboutSection = () => {
    const services = [
        { icon: "🎨", text: "Modern Web Tasarım" },
        { icon: "🎨", text: "Marka Odaklı Logo Tasarımı" },
        { icon: "📊", text: "Performansa Dayalı SEO" },
        { icon: "🖥️", text: "Responsive UI/UX Çözümleri" },
    ];

    return (
        <section className="container bg-[#f9f9f9] py-28 font-sans">
            <div className="mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#000003] border-b-4 border-[#112224] inline-block pb-3 mb-6">
                        Profesyonel Dijital Çözümler
                    </h2>
                    <p className="text-lg text-[#757174] leading-relaxed mb-8">
                        <span className="text-[#112224] font-semibold">enbaytech</span> olarak,
                        web tasarımı, logo tasarımı ve SEO çalışmalarıyla dijital dünyada
                        markaların öne çıkmasını sağlıyoruz. Teknoloji ve estetik arasında
                        köprü kurarak güçlü dijital çözümler sunuyoruz.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
                        {services.map(({ icon, text }, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#d4cfce] text-[#112224] font-medium shadow-md px-6 py-4 rounded-lg flex items-center gap-3"
                            >
                                <span className="text-2xl">{icon}</span> {text}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="relative">
                    <img
                        src={logo}
                        alt="Ajans İllüstrasyonu"
                        className="w-3/4 mx-auto h-auto rounded-xl"
                    />

                </div>
            </div>
        </section>
    );
};