import React from "react";
import { services } from "../data/ServicesData";

const AllServices = () => {
    return (
        <section id="services" className="bg-white dark:bg-black dark:text-white py-16">
            <div className="container mx-auto px-6">
                <div className="pb-12 text-center space-y-4">
                    <h1 data-aos="fade-up" className="text-4xl font-bold text-black dark:text-primary tracking-wide">
                        Hizmetlerimiz
                    </h1>
                    <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Size sunduğumuz profesyonel hizmetlerimizle işinizi bir adım öteye taşıyın.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            data-aos="fade-up"
                            data-aos-delay={service.aosDelay}
                            className="flex flex-col items-center text-center bg-white dark:bg-gray-900 shadow-xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 p-8 h-full"
                        >
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shadow-md">
                                <img src={service.imageSrc} alt={service.title} className="object-contain w-16 h-16" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-5">{service.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 text-base leading-relaxed flex-1">
                                {service.description.split(" ").slice(0, 25).join(" ")}...
                            </p>

                            <div className="mt-auto w-full flex justify-center">
                                <button className="mt-6 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition">
                                    İncele
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServices;