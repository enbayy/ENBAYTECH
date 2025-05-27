import React from "react";
import { motion } from "framer-motion";

export const DrawCircleText = () => {
    return (
        <div className="grid place-content-center px-4 py-12 text-yellow-50 bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900">
            <div className="max-w-2xl mx-auto flex flex-col sm:block items-center gap-6 sm:gap-0">
                <h1 className="text-center text-3xl sm:text-5xl leading-snug font-poppins mb-6 sm:mb-8 px-2 sm:px-0">
                    Markanızı{" "}
                    <span className="relative font-poppins whitespace-nowrap inline-block">
                        enbaytech
                        <svg
                            viewBox="0 0 286 73"
                            fill="none"
                            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{
                                    duration: 1.25,
                                    ease: "easeInOut",
                                }}
                                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                                stroke="#FACC15"
                                strokeWidth="3"
                            />
                        </svg>
                    </span>{" "}
                    profesyonel tasarımlarla büyütün
                </h1>
                <motion.div className="flex justify-center sm:justify-center">
                    <a
                        href="#iletisim"
                        className="inline-block px-5 py-2 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-[#10b981] hover:text-white dark:hover:bg-[#10b981] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter whitespace-nowrap"
                    >
                        Hemen Başla
                    </a>
                </motion.div>
            </div>
        </div>
    );
};