import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../data/ServicesData";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === parseInt(id));

    if (!service) {
        return <p className="text-center text-red-500">Hizmet bulunamadı!</p>;
    }

    return (
        <section className="bg-white dark:bg-black dark:text-white py-12">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-black dark:text-primary">
                        {service.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        {service.description}
                    </p>
                    <div className="mt-6">
                        <img
                            src={service.imageSrc}
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="mt-10 max-w-4xl mx-auto space-y-8">
                    {service.sections?.map((section, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-black dark:text-white">
                                {section.heading}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="list-disc list-inside">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-3 text-gray-600 dark:text-gray-300">{section.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;