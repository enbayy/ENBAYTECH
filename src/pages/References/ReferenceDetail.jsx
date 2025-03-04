import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { references } from "../../data/ReferenceData";

const ReferencesDetailPage = () => {
    const { id } = useParams();
    const reference = references.find((ref) => ref.id === parseInt(id));
    const navigate = useNavigate();

    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    }, []);

    if (!reference) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <p className="text-center text-red-500 font-semibold text-2xl">
                    Referans bulunamadı!
                </p>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden py-16 bg-gray-50 dark:bg-black text-black dark:text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-60" style={{ backgroundImage: `url(${reference.imageUrl})`, filter: 'blur(6px)' }}>
            </div>
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="text-center mb-12">
                    <h1 className={`text-5xl font-bold tracking-wide transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
                        {reference.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {reference.sections.map((section, index) => (
                        <div
                            key={index}
                            className={`p-8 bg-white dark:bg-black rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                {section.heading}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {section.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button onClick={() => navigate(-1)} className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300">
                        Geri Dön
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReferencesDetailPage;
