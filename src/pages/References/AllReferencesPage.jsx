import React, { useEffect, useRef } from 'react';
import { references } from '../../data/ReferenceData';
import { motion } from 'framer-motion';
import ReferenceCard from './ReferenceCard';

const AllReferencesPage = () => {
    const referenceRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'scale(1)';
                        }, index * 200);
                    }
                });
            },
            { threshold: 0.2 }
        );

        referenceRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            referenceRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div data-aos="fade-up" className="w-full bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white relative overflow-hidden py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 relative mb-10">
            <div className="text-start flex flex-col gap-y-5">
                <h1 className="border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                    REFERANSLARIMIZ
                </h1>
                <p className="text-base sm:text-lg md:text-xl break-words font-poppins">
                    Bizimle çalışarak başarıya ulaşan birçok firmayı görmektesiniz. Her biri kendi alanında öncü
                    ve bizimle güçlü bir işbirliği kurarak başarılarını daha da ileriye taşıdılar. İşte referanslarımız!
                </p>
            </div>
        </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 text-white w-full relative z-0"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                    {references.map((reference, index) => (
                        <div
                            key={reference.id}
                            ref={(el) => (referenceRefs.current[index] = el)}
                            className="flex flex-col opacity-0 transform scale-100 transition-all duration-700 ease-out rounded-lg w-full min-h-[200px]"
                        >
                            <ReferenceCard
                                id={reference.id}
                                title={reference.title}
                                description={reference.description || ''}
                                imageUrl={reference.imageUrl}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AllReferencesPage;