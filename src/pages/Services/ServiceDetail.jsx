import { useNavigate, useParams } from "react-router-dom";
import { services } from "../../data/ServicesData";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === parseInt(id));
    const navigate = useNavigate();

    if (!service) {
        return <h2 className="text-center text-2xl font-semibold mt-10 text-red-500">Hizmet bulunamadı!</h2>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="relative w-full h-72 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
                <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover brightness-75 transform scale-105 transition-all duration-500 hover:scale-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 to-black/30">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                        {service.title}
                    </h1>
                </div>
            </div>
            <p className="text-gray-700 mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4">
                {service.description}
            </p>

            <div className="mt-10 space-y-8">
                {service.sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-6 shadow-md transition-all duration-500 hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
                            {section.heading}
                        </h2>
                        <p className="text-gray-700 mt-3 leading-relaxed">{section.content}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-primary text-white rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-80"
                >
                    Geri Dön
                </button>
            </div>
        </div>
    );
};

export default ServiceDetail;