import React, { useEffect, useRef } from 'react';
import ReferenceCard from '../components/ReferenceCard';
import { references } from '../data/referenceData';
import { motion } from 'framer-motion';

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
        <div className="w-full bg-white dark:bg-black relative overflow-hidden">
                <div className="relative mb-10 p-6 text-black dark:text-white">
                    <div className='container text-center px-6 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-y-5'>
                        <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">Referanslarımız</h1>
                        <p className="relative text-base sm:text-lg md:text-xl break-words">
                            Bizimle çalışarak başarıya ulaşan birçok firmayı görmektesiniz. Her biri kendi alanında öncü
                            ve bizimle güçlü bir işbirliği kurarak başarılarını daha da ileriye taşıdılar. İşte referanslarımız!
                        </p>
                    </div>
                </div>
        
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-6 lg:px-20 text-white w-full relative z-0"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
                    {references.map((reference, index) => (
                        <div
                            key={reference.id}
                            ref={(el) => (referenceRefs.current[index] = el)}
                            className="flex flex-col opacity-0 transform scale-75 transition-all duration-700 ease-out border border-black rounded-xl"
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