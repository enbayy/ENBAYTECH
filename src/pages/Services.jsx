import React from "react";
import { services } from "../data/ServicesData";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/hizmetlerimiz")
    }
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
                    {services.slice(0, 4).map((skill) => (
                        <div
                            key={skill.name}
                            data-aos="fade-up"
                            data-aos-delay={skill.aosDelay}
                            className="flex items-center bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 p-6"
                        >
                            <div className="w-28 h-28 flex items-center justify-center rounded-xl">
                                <img src={skill.imageSrc} alt={skill.title} className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <div className="ml-6 flex-1 flex flex-col justify-between h-full">
                                <h2 className="text-xl font-semibold">{skill.title}</h2>
                                <h2 className="text-xl font-semibold">{skill.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {skill.description.split(" ").slice(0, 25).join(" ")}...
                                </p>

                                <button className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-opacity-80 transition mt-4">
                                    İncele
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button onClick={handleClick} className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-opacity-80 transition">
                        Daha Fazla
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;