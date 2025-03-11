import React, { useState, useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const [randomServices, setRandomServices] = useState([]);

    useEffect(() => {
        const selectedServices = [...services].sort(() => 0.5 - Math.random()).slice(0, 4);
        setRandomServices(selectedServices);
    }, []);

    const handleDetailClick = (id) => {
        navigate(`/hizmetler/${id}`);
    };

    return (
        <section id="services" className="bg-white dark:bg-black dark:text-white py-12">
            <div className="container">
                <div className="mb-8 text-center space-y-3">
                    <div data-aos="zoom-in" data-aos-once="true" className="flex justify-between">
                        <h1 className="border-l-8 border-primary/50 py-2 pl-2 relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                            HİZMETLERİMİZ
                        </h1>
                        <button
                            onClick={() => navigate("/hizmetlerimiz")}
                            data-aos="zoom-in"
                            className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-tl-2xl rounded-br-2xl shadow-md transition hover:bg-orange-600 font-semibold"
                        >
                            Hepsini gör
                        </button>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {randomServices.map((service) => (
                        <div
                            key={service.id}
                            data-aos-delay={service.aosDelay}
                            className="relative flex items-center bg-white dark:bg-black shadow-xl shadow-gray-300 dark:shadow-gray-800 rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-300 transition-all duration-300 p-6 group"
                        >
                            <div className="aspect-w-16 h-24 flex items-center justify-center overflow-hidden perspective-1000">
                                <img
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="object-contain aspect-w-16 h-24 rounded-br-3xl rounded-tl-3xl transition-transform duration-500 ease-in-out transform hover:scale-110"
                                />
                            </div>
                            <div className="ml-6 flex-1 flex flex-col justify-between h-full">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 font-poppins">
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
        </section>
    );
};

export default Services;