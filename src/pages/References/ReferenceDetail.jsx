import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { references } from "../../data/ReferenceData";

const ReferencesDetailPage = () => {
    const { id } = useParams();
    const reference = references.find((ref) => ref.id === parseInt(id));
    const navigate = useNavigate();

    const [fadeIn, setFadeIn] = useState(false);
    const [scaleUp, setScaleUp] = useState(false);

    useEffect(() => {
        setFadeIn(true);
        const timer = setTimeout(() => setScaleUp(true), 200);
        return () => clearTimeout(timer);
    }, []);

    if (!reference) {
        return (
            <p className="text-center text-red-500 font-semibold text-xl py-12">
                Referans bulunamadı!
            </p>
        );
    }

    return (
        <div className="relative bg-white dark:bg-black min-h-screen overflow-hidden animate-fadeIn">

            <div className="relative container mx-auto py-16 px-6 lg:px-20">
                <h1
                    className={`text-4xl lg:text-5xl font-bold text-center mt-10 mb-12 text-gray-800 leading-tight tracking-wide transition-transform duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
                >
                </h1>

                <div
                    className={`flex justify-center mb-16 transition-transform duration-1000 ${scaleUp ? "scale-105" : "scale-100"}`}
                >
                    <a href={reference.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={reference.imageUrl}
                            alt={reference.title}
                            className="rounded-3xl w-full h-60 max-w-2xl md:max-w-xl border border-black transform transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    </a>
                </div>

                {reference.sections.map((section, index) => (
                    <div
                        key={index}
                        className={`mb-12 p-8 bg-white dark:bg-black rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <h2 className="text-2xl font-semibold text-black dark:text-white mb-6 tracking-wide">
                            {section.heading}
                        </h2>
                        {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-8 space-y-4 text-lg text-black dark:text-white">
                                {section.content.map((item, idx) => (
                                    <li key={idx} className="transition-all duration-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-lg text-black dark:text-white">
                                {section.content}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <button onClick={() => navigate(-1)} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80">
                    Geri Dön
                </button>
            </div>
        </div>
    );
};

export default ReferencesDetailPage;