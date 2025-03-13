import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AllServices = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="container">
                <div data-aos="zoom-in" data-aos-once="true" className="mb-8 text-center space-y-3">
                    <h1 className="border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                        HİZMETLERİMİZ
                    </h1>
                </div>
                <div>
                    <div data-aos="zoom-in" data-aos-once="true" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map(({ id, title, description, imageSrc, aosDelay }) => (
                            <div
                                key={id}
                                data-aos-delay={aosDelay}
                                className="group relative flex items-center flex-col bg-transparent rounded-tl-3xl rounded-br-3xl overflow-hidden border border-[#E76F51] dark:border-[#E9C46A] transition-all duration-300 p-6"
                            >
                                <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden bg-[#E76F51] dark:bg-[#E9C46A]">
                                    <LazyLoadImage
                                        effect="blur"
                                        src={imageSrc}
                                        alt={title}
                                        className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
                                    />
                                </div>

                                <div className="mt-4 flex-1 flex flex-col justify-between">
                                    <h2 className="text-xl font-semibold text-[#E76F51] dark:text-[#E9C46A]">{title}</h2>
                                    <p className="text-lg text-[#1E293B] dark:text-white mt-3 font-poppins text-start line-clamp-4 leading-relaxed overflow-hidden">
                                        {description}
                                    </p>
                                    <div className="flex justify-start">
                                        <button
                                            onClick={() => navigate(`/hizmetler/${id}`)}
                                            className="w-[120px] h-[40px] bg-[#E76F51] dark:bg-[#E9C46A] text-white rounded-tl-2xl rounded-br-2xl hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition mt-4"
                                        >
                                            İncele
                                        </button>
                                    </div>

                                    <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#E76F51] dark:bg-[#E9C46A] transition-all duration-300 group-hover:w-full"></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllServices;