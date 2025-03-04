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
                <div className="pb-12 text-center space-y-3">
                    <h1 data-aos="fade-up" className="text-3xl font-semibold text-black dark:text-primary">
                        Hizmetlerimiz
                    </h1>
                    <p data-aos="fade-up" className="text-gray-600 dark:text-gray-400 text-sm">
                        Size sunduğumuz profesyonel hizmetlerimizle işinizi bir adım öteye taşıyın.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.slice(0, 4).map((service) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={service.aosDelay}
                            className="relative flex items-center bg-white dark:bg-black shadow-lg rounded-xl overflow-hidden border-2 border-transparent  transition-all duration-300 p-6 group"
                        >
                            <div className="w-28 h-28 flex items-center justify-center rounded-xl">
                                <img src={service.imageSrc} alt={service.title} className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <div className="ml-6 flex-1 flex flex-col justify-between h-full">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {service.description.split(" ").slice(0, 25).join(" ")}...
                                </p>

                                <button
                                    onClick={() => handleDetailClick(service.id)}
                                    className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-orange-600 transition mt-4"
                                >
                                    İncele
                                </button>
                            </div>
                            <span className="absolute left-0 bottom-0 w-0 h-[5px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </div>

                    ))}
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button
                        onClick={() => navigate("/hizmetlerimiz")}
                        className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-orange-600 transition"
                        data-aos="zoom-in"
                    >
                        Daha Fazla
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;