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
        <section className="bg-gray-50 dark:bg-black dark:text-white py-12">
            <div className="relative bg-gray-900 text-white py-16 px-8 text-center">
                <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <h1 className="text-5xl font-bold drop-shadow-lg relative">{service.title}</h1>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10 items-center">
                <img src={service.imageSrc} alt={service.title} />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                        Hizmet Açıklaması
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                    Hizmet Bölümleri
                </h2>
                <div className="mt-6 space-y-6">
                    {service.sections.map((section, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
                        >
                            <h3 className="text-xl font-semibold text-primary">{section.heading}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12">
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
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
                                onClick={() => navigate(`/hizmetler/${relatedService.id}`)}
                            >
                                <img
                                    src={relatedService.imageSrc}
                                    alt={relatedService.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {relatedService.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                                    {relatedService.description.slice(0, 80)}...
                                </p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-md transition hover:bg-orange-600 font-semibold"
                >
                    <FaArrowLeft /> Geri Dön
                </button>
            </div>
        </section>
    );
};

export default ServiceDetail;