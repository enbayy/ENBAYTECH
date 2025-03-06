import { useNavigate, useParams } from "react-router-dom";
import { services } from "../../data/ServicesData";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === parseInt(id));
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return <h2 className="text-center text-2xl font-semibold mt-10 text-red-500">Hizmet bulunamadı!</h2>;
    }

    return (
        <div data-aos="fade-up" className="max-w-5xl mx-auto p-6 animate-fadeIn">
            <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-white text-center px-6 drop-shadow-lg">
                {service.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4">
                {service.description}
            </p>
            <div className="mt-10 space-y-8">
                {service.sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-black shadow-sm shadow-black dark:shadow-white p-6 transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                            {section.heading}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">{section.content}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4 mb-6">
                    İlgili Hizmetler
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {services
                        .filter((s) => s.id !== service.id)
                        .slice(0, 3)
                        .map((relatedService) => (
                            <div
                                key={relatedService.id}
                                className="bg-white dark:bg-black p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105 border border-black dark:border-white"
                                onClick={() => navigate(`/hizmetler/${relatedService.id}`)}
                            >
                                <img
                                    src={relatedService.imageSrc}
                                    alt={relatedService.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{relatedService.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{relatedService.description.slice(0, 80)}...</p>
                            </div>
                        ))}
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-80"
                >
                    <FaArrowLeft /> Geri Dön
                </button>
            </div>
        </div>
    );
};

export default ServiceDetail;