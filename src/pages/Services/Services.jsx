import React, { useState, useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const Services = () => {
    const navigate = useNavigate();
    const [randomServices, setRandomServices] = useState([]);

    useEffect(() => {
        const priorityTitles = ["Web Tasarımı", "Logo Tasarımı", "SEO Çalışması"];
        const priorityServices = services.filter((service) =>
            priorityTitles.includes(service.title)
        );
        const otherServices = services.filter(
            (service) => !priorityTitles.includes(service.title)
        );
        const randomOthers = otherServices
            .sort(() => 0.5 - Math.random())
            .slice(0, 4 - priorityServices.length);
        const selectedServices = [...priorityServices, ...randomOthers];
        setRandomServices(services.slice(0, 4));
    }, []);

    return (
        <section
            id="services"
            className="container bg-[#f9f9f9] dark:bg-[#000003] py-16"
        >
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold font-inter text-[#392f2f] dark:text-[#d4cfce] mb-6 md:mb-0">
                        HİZMETLERİMİZ
                    </h1>
                    <button
                        onClick={() => navigate("/hizmetlerimiz")}
                        className="w-[120px] h-[40px] bg-color2 text-[#392f2f] dark:text-[#d4cfce] rounded-2xl border-2 hover:border-4 transition mt-4 font-inter"
                    >
                        Hepsini gör
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {randomServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="bg-[#f9f9f9] dark:bg-[#000003] dark:border dark:border-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
                        >
                            <h2 className="text-3xl font-semibold text-[#392f2f] dark:text-[#d4cfce] mb-2 font-inter">
                                {service.title}
                            </h2>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4 font-inter">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-5 font-poppins">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;