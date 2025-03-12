import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { references } from "../../data/ReferenceData";
import { FaArrowLeft } from "react-icons/fa6";

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
            <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A]">
                <p className="text-center text-[#E76F51] dark:text-[#E9C46A] font-semibold text-2xl">
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
        <section className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div data-aos="fade-up" className="max-w-5xl mx-auto px-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#E76F51] dark:text-[#E9C46A] text-center px-6 drop-shadow-lg">
                    {reference.title}
                </h1>
                <div className="mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4 text-[#1E293B] dark:text-white">
                    {reference.description}
                </div>

                <div className="mt-10 space-y-8">
                    {reference.sections.map((section, index) => (
                        <div key={index} className="bg-[#F8FAFC] dark:bg-[#0F172A] p-6 shadow-lg rounded-tl-3xl rounded-br-3xl border border-[#E76F51] dark:border-[#E9C46A]">
                            <h2 className="text-2xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4">
                                {section.heading}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <ul className="mt-3 space-y-2 text-[#1E293B] dark:text-white list-disc pl-5">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-3 text-[#1E293B] dark:text-white">{section.content}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4 mb-6">
                        Diğer Referanslar
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {randomReferences
                            .filter((r) => r.id !== reference.id)
                            .map((relatedReference) => (
                                <div
                                    key={relatedReference.id}
                                    className="bg-white rounded-tl-3xl rounded-br-3xl cursor-pointer transition-all duration-300 hover:scale-105 border border-black"
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
                        className="flex items-center gap-2 px-6 py-3 bg-[#E76F51] dark:bg-[#E9C46A] text-white rounded-tl-2xl rounded-br-2xl shadow-md transition-all duration-300 hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] font-semibold"
                    >
                        <FaArrowLeft /> Geri Dön
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReferencesDetailPage;