import React, { useState, useEffect } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        <section
            id="services"
            className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12"
        >
            <div className="container">
                <div className="mb-8 text-center space-y-3">
                    <div className="flex justify-between">
                        <h1 data-aos="fade-right" data-aos-once="true" className="text-[#E76F51] dark:text-[#E9C46A] border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                            HİZMETLERİMİZ
                        </h1>
                        <button
                            onClick={() => navigate("/hizmetlerimiz")}
                            data-aos="fade-left"
                            data-aos-once="true"
                            className="w-[120px] h-[40px] bg-[#E76F51] dark:bg-[#E9C46A] text-white rounded-tl-2xl rounded-br-2xl hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition mt-4"
                        >
                            Hepsini gör
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {randomServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative flex flex-col md:flex-row items-center bg-transparent rounded-tl-3xl rounded-br-3xl overflow-hidden transition-all duration-300 p-6 group border border-[#E76F51] dark:border-[#E9C46A]"
                        >
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#E76F51] dark:bg-[#E9C46A]">
                                <LazyLoadImage
                                    effect="blur"
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
                                />
                            </div>

                            <div className="mt-4 md:mt-0 md:ml-6 flex-1 flex flex-col justify-between h-full text-center md:text-left">
                                <h2 className="text-2xl font-semibold text-[#E76F51] dark:text-[#E9C46A] text-start">{service.title}</h2>
                                <h2 className="text-2xl font-semibold text-[#1E293B] dark:text-white text-start">{service.name}</h2>
                                <p className="text-lg text-[#1E293B] dark:text-white mt-3 font-poppins text-start line-clamp-4 leading-relaxed overflow-hidden">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => handleDetailClick(service.id)}
                                    className="w-[140px] h-[45px] bg-[#E76F51] dark:bg-[#E9C46A] text-white text-lg rounded-tl-2xl rounded-br-2xl hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition mt-4"
                                >
                                    İncele
                                </button>
                            </div>

                            <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#E76F51] dark:bg-[#E9C46A] transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;