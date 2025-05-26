import React from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const Services = () => {
    const navigate = useNavigate();
    const firstSixServices = services.slice(0, 6);

    return (
        <section
            id="services"
            className="bg-[#f0fdf4] dark:bg-[#1a1f1c] py-20 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white font-inter">
                        Markanız İçin Neler Yapabiliriz?
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Markanızı dijital dünyada öne çıkaracak yaratıcı ve teknik çözümler
                        sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {firstSixServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="bg-[#f6fdf8] dark:bg-[#1b1f1d] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#ecfdf5] dark:bg-[#065f46] p-3 rounded-full">
                                    {service.icon}
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-inter">
                                    {service.title}
                                </h2>
                            </div>
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-poppins line-clamp-5">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate("/hizmetlerimiz")}
                        className="px-6 py-3 bg-[#10b981] dark:bg-[#059669] text-white text-base font-medium rounded-xl hover:scale-105 transition"
                    >
                        Tüm Hizmetlerimizi Gör
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;