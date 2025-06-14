import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const NavbarUp = () => {
    return (
        <div className="bg-white dark:bg-[#1a1f1c] flex items-center justify-center py-1">
            <div className="container mx-auto px-4 py-2 max-w-screen-lg">
                <div className="flex flex-col items-center md:flex-row md:justify-around gap-4 md:gap-8">
                    <div className="flex items-center gap-2 md:gap-2">
                        <FaPhone size={20} className="text-[#059669] dark:text-[#10b981]" />
                        <div className="flex gap-2 flex-wrap">
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins">
                                TELEFON:
                            </p>
                            <a
                                href="https://wa.me/905522312086"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins hover:underline"
                            >
                                0552 231 2086
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-2">
                        <FaEnvelope size={20} className="text-[#059669] dark:text-[#10b981]" />
                        <div className="flex gap-2 flex-wrap">
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins">
                                E-MAİL:
                            </p>
                            <p
                                className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins"
                            >
                                info@enbaytech.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarUp;