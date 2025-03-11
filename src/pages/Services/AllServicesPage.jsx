import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";

const AllServices = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-black dark:text-white py-12">
            <div className="container">
                <div data-aos="zoom-in" data-aos-once="true" className="mb-8 text-center space-y-3">
                    <h1 className="border-l-8 border-primary/50 py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                        HİZMETLERİMİZ
                    </h1>
                </div>
                <div>
                    <div data-aos="zoom-in" data-aos-once="true" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map(({ id, title, description, imageSrc, aosDelay }) => (
                            <div
                                key={id}
                                data-aos-delay={aosDelay}
                                className="group relative flex flex-col bg-white dark:bg-black shadow-xl shadow-gray-300 dark:shadow-gray-800 rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-300 dark:border-white transition-all duration-300 p-6"
                            >
                                <div className="w-full aspect-w-16 aspect-h-9 flex items-center justify-center rounded-tl-3xl rounded-br-3xl overflow-hidden">
                                    <img src={imageSrc} alt={title} className="w-full h-full object-contain" loading="lazy" />
                                </div>
                                <div className="mt-4 flex-1 flex flex-col justify-between">
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-poppins">
                                        {description.split(" ").slice(0, 25).join(" ")}...
                                    </p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => navigate(`/hizmetler/${id}`)}
                                            className="w-[120px] h-[40px] bg-primary text-white shadow-xl rounded-tl-2xl rounded-br-2xl hover:bg-orange-600 transition mt-4"
                                        >
                                            İncele
                                        </button>
                                    </div>

                                    <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-primary transition-all duration-300 group-hover:w-full"></span>
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