import React from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    const handleDetailClick = (id) => {
        navigate(`/hizmetler/${id}`);
    };

    return (
        <section id="services" className="bg-white dark:bg-black dark:text-white py-12">
            <div className="container">
                <div data-aos="zoom-in" data-aos-once="true" className="mb-8 text-center space-y-3">
                    <div className="flex justify-between">
                        <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                            HİZMETLERİMİZ
                        </h1>
                        <button
                            onClick={() => navigate("/hizmetlerimiz")}
                            className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-orange-600 transition"
                            data-aos="zoom-in"
                        >
                            Hepsini gör
                        </button>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.slice(0, 4).map((service) => (
                        <div
                            key={service.id}
                            data-aos-delay={service.aosDelay}
                            className="relative flex items-center bg-white dark:bg-black shadow-xl shadow-gray-300 dark:shadow-gray-800 rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-300 transition-all duration-300 p-6 group"
                        >
                            <div className="w-28 h-28 flex items-center justify-center rounded-xl overflow-hidden perspective-1000">
                                <img
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-[360deg]"
                                />
                            </div>
                            <div className="ml-6 flex-1 flex flex-col justify-between h-full">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {service.description.split(" ").slice(0, 25).join(" ")}...
                                </p>

                                <button
                                    onClick={() => handleDetailClick(service.id)}
                                    className="w-[120px] h-[40px] bg-primary text-white rounded-tl-2xl rounded-br-2xl hover:bg-orange-600 transition mt-4"
                                >
                                    İncele
                                </button>
                            </div>
                            <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-primary transition-all duration-300 group-hover:w-full">
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Services;