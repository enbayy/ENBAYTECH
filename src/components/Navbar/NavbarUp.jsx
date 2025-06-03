import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import VisitsCounter from "../VisitCounter";

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
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins">
                                0552 231 2086
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-2">
                        <FaEnvelope size={20} className="text-[#059669] dark:text-[#10b981]" />
                        <div className="flex gap-2 flex-wrap">
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold font-poppins">
                                E-MAİL:
                            </p>
                            <a
                                href="mailto:1enesbayar@gmail.com"
                                className="text-[#0f172a] dark:text-[#e0f2f1] hover:underline font-semibold font-poppins"
                            >
                                info@enbaytech.com
                            </a>
                        </div>
                    </div>

                    <div className="text-[#0f172a] dark:text-[#e0f2f1] font-medium">
                        <VisitsCounter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarUp;