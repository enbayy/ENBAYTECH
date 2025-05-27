import React from "react";
import logoLight from "../assets/enbayLogo.png";
import logoDark from "../assets/enbayLogo3.png";
import { motion } from "framer-motion";

export const AboutSection = () => {
    const services = [
        { icon: "🌐", text: "Modern Web Tasarım" },
        { icon: "🖌️", text: "Logo Tasarımı" },
        { icon: "🖥️", text: "Hosting & Domain Hizmetleri" },
        { icon: "📱", text: "Responsive UI/UX Çözümleri" },
    ];

    return (
        <section className="container bg-white dark:bg-[#1a1f1c] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] dark:text-[#e0f2f1] border-b-4 border-[#059669] inline-block pb-3 mb-6 font-inter">
                        Profesyonel Dijital Çözümler
                    </h2>
                    <p className="text-base sm:text-lg text-[#0f172a] dark:text-[#e0f2f1] leading-relaxed text-balance mb-8 font-poppins">
                        <span className="text-[#059669] dark:text-[#10b981] font-bold font-inter">ENBAYTECH</span>{" "}
                        olarak, web tasarımı, logo tasarımı ve SEO çalışmalarıyla dijital
                        dünyada markaların öne çıkmasını sağlıyoruz. Teknoloji ve estetik
                        arasında köprü kurarak güçlü dijital çözümler sunuyoruz.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
                        {services.map(({ icon, text }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-[#1a1f1c] border border-gray-200 dark:border-gray-700 rounded-2xl text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-inter shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transition duration-300 px-6 py-4 flex items-center gap-3 group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {icon}
                                </span>{" "}
                                <span className="text-sm sm:text-base">{text}</span>
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
                        alt="Enbaytech Logo Light"
                        className="w-4/5 mx-auto h-auto block dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="Enbaytech Logo Dark"
                        className="w-4/5 mx-auto h-auto hidden dark:block"
                    />
                </motion.div>
            </div>
        </section>
    );
};