import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { references } from "../../data/ReferenceData";

const ReferencesDetailPage = () => {
    const { id } = useParams();
    const reference = references.find((ref) => ref.id === parseInt(id));
    const navigate = useNavigate();

    const [fadeIn, setFadeIn] = useState(false);
    const [randomReferences, setRandomReferences] = useState([]);

    useEffect(() => {
        setFadeIn(true);
        setRandomReferences(getRandomReferences(references));
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

    function getRandomReferences(arr) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    return (
        <section className="bg-gray-50 dark:bg-black dark:text-white py-12">
            <div data-aos="fade-up" className="max-w-5xl mx-auto px-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-white text-center px-6 drop-shadow-lg">
                    {reference.title}
                </h1>
                <div className="mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4 text-gray-700 dark:text-gray-300">
                    {reference.description}
                </div>

                <div className="mt-10 space-y-8">
                    {reference.sections.map((section, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-black p-6 shadow-xl shadow-gray-300 rounded-tl-3xl rounded-br-3xl dark:shadow-gray-800">
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
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-black dark:text-white border-l-4 border-primary pl-4 mb-6">
                        Diğer Referanslar
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {randomReferences
                            .filter((r) => r.id !== reference.id)
                            .map((relatedReference) => (
                                <div
                                    key={relatedReference.id}
                                    className="bg-white rounded-tl-3xl rounded-br-3xl shadow-xl shadow-gray-300 cursor-pointer transition-all duration-300 hover:scale-105 border border-black"
                                    onClick={() => navigate(`/referanslar/${relatedReference.id}`)}
                                >
                                    <img
                                        src={relatedReference.imageUrl}
                                        alt={relatedReference.title}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            ))}
                    </div>
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