import React from "react";
import logoLight from "../assets/enbayLogo.png";
import logoDark from "../assets/enbayLogo3.png";
import { motion } from "framer-motion";

export const AboutSection = () => {
    const services = [
        { icon: "🎨", text: "Modern Web Tasarım" },
        { icon: "🎨", text: "Marka Odaklı Logo Tasarımı" },
        { icon: "📊", text: "Performansa Dayalı SEO" },
        { icon: "🖥️", text: "Responsive UI/UX Çözümleri" },
    ];

    return (
        <section className="container bg-[#f9f9f9] dark:bg-[#000003] py-12 font-sans">
            <div className="mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#392f2f] dark:text-[#d4cfce] border-b-4 border-[#112224] inline-block pb-3 mb-6">
                        Profesyonel Dijital Çözümler
                    </h2>
                    <p className="text-lg text-[#757174] leading-relaxed mb-8">
                        <span className="text-[#392f2f] dark:text-[#d4cfce] font-semibold">enbaytech</span> olarak,
                        web tasarımı, logo tasarımı ve SEO çalışmalarıyla dijital dünyada
                        markaların öne çıkmasını sağlıyoruz. Teknoloji ve estetik arasında
                        köprü kurarak güçlü dijital çözümler sunuyoruz.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
                        {services.map(({ icon, text }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white border border-[#d4cfce] text-[#112224] font-medium shadow-md px-6 py-4 rounded-lg flex items-center gap-3"
                            >
                                <span className="text-2xl">{icon}</span> {text}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src={logoLight}
                        alt="logo"
                        className="w-3/4 mx-auto h-auto block dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="logo dark"
                        className="w-3/4 mx-auto h-auto hidden dark:block"
                    />
                </motion.div>
            </div>
        </section>
    );
};
