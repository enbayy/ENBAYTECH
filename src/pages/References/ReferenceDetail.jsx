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
        <section className="bg-gray-50 dark:bg-black dark:text-white py-12">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-72 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={reference.imageUrl}
                        alt={reference.title}
                        className="w-full h-full object-cover brightness-75 transform scale-105 transition-all duration-500 hover:scale-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 to-black/30">
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                            {reference.title}
                        </h1>
                    </div>
                </div>

                <div className="mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4 text-gray-700 dark:text-gray-300">
                    {reference.description}
                </div>

                <div className="mt-10 space-y-8">
                    {reference.sections.map((section, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                                {section.heading}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-3 text-gray-700 dark:text-gray-300">{section.content}</p>
                            )}
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
        </section>
    );
};

export default ReferencesDetailPage;