import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { templates } from '../data/TemplatesData';

const Templates = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="container bg-white dark:bg-[#1a1f1c] py-20">
            <h2 className="text-4xl font-bold text-center mb-16 font-inter text-gray-800 dark:text-white" data-aos="fade-down">
                PROJELERİMİZ
            </h2>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template, index) => (
                    <div
                        key={template.id}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1f1c] dark:to-[#111411] border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 max-w-sm mx-auto"
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 150}
                    >
                        <div className="w-full h-72">
                            <img
                                src={template.imageUrl}
                                alt={template.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-inter">
                                {template.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-poppins leading-relaxed">
                                {template.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Templates;