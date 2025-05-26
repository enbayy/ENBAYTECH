import React, { useState, useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
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

        setRandomServices(selectedServices);
    }, []);

    return (
        <section id="services" className="container bg-[#f9f9f9] dark:bg-[#000003] py-12">
            <div className="mx-auto px-6 md:px-12 lg:px-20">
                <div className="mb-8 text-center space-y-3">
                    <div className="flex justify-between items-center">
                        <h1 className="text-color1 dark:text-[#d4cfce] border-l-8 border-[#392f2f] dark:border-[#d4cfce] py-2 pl-2 text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                            HİZMETLERİMİZ
                        </h1>
                        <button
                            onClick={() => navigate("/hizmetlerimiz")}
                            className="w-[120px] h-[40px] bg-color2 dark:text-[#d4cfce] rounded-tl-2xl rounded-br-2xl hover:bg-color4 dark:hover:bg-color3 transition mt-4"
                        >
                            Hepsini gör
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {randomServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="relative flex flex-col md:flex-row items-center bg-color5 dark:bg-color2 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] border border-color3 dark:border-color4"
                        >
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-color2 dark:bg-color4 shadow-md">
                                <LazyLoadImage
                                    effect="blur"
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>

                            <div className="mt-6 md:mt-0 md:ml-8 flex-1 flex flex-col justify-center h-full text-center md:text-left">
                                <h2 className="text-2xl font-bold text-color2 dark:text-color4">
                                    {service.title}
                                </h2>
                                <h3 className="text-xl font-semibold text-color1 dark:text-color5 mt-1">
                                    {service.name}
                                </h3>
                                <p className="text-base text-color3 dark:text-color4 mt-3 leading-relaxed line-clamp-4">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;