import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AllServices = () => {
    const navigate = useNavigate();

    const handleDetailClick = (id) => {
        navigate(`/hizmetler/${id}`);
    };

    return (
        <section
            id="all-services"
            className="bg-[#f9f9f9] dark:bg-color1 text-color2 dark:text-color5 py-12"
        >
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center space-y-3">
                    <h1
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="text-color1 dark:text-color4 border-l-8 border-color2 dark:border-color4 py-2 pl-2 text-2xl sm:text-3xl md:text-4xl font-semibold break-words"
                    >
                        TÜM HİZMETLER
                    </h1>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
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
                                <h2 className="text-2xl font-bold text-color2 dark:text-color4">{service.title}</h2>
                                <h3 className="text-xl font-semibold text-color1 dark:text-color5 mt-1">{service.name}</h3>
                                <p className="text-base text-color3 dark:text-color4 mt-3 leading-relaxed line-clamp-4">
                                    {service.description}
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        onClick={() => handleDetailClick(service.id)}
                                        className="w-[120px] h-[40px] bg-color2 dark:bg-color4 text-color5 dark:text-color1 rounded-tl-2xl rounded-br-2xl hover:bg-color4 dark:hover:bg-color3 transition mt-4"
                                    >
                                        İncele
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServices;