import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const NavbarUp = () => {
    const [visitCount, setVisitCount] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/visit')
            .then(res => res.json())
            .then(data => setVisitCount(data.visitCount))
            .catch(err => console.error('Error fetching visit count:', err));
    }, []);

    return (
        <div className="bg-white dark:bg-[#1a1f1c] flex items-center justify-center py-1">
            <div className="container mx-auto px-4 py-2 max-w-screen-lg">
                <div className="flex flex-wrap justify-center md:justify-around items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-2 md:gap-2">
                        <FaPhone size={20} className="text-[#059669] dark:text-[#10b981]" />
                        <div className="flex gap-2 flex-wrap">
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold">TELEFON:</p>
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold">0552 231 2086</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-2">
                        <FaEnvelope size={20} className="text-[#059669] dark:text-[#10b981]" />
                        <div className="flex gap-2 flex-wrap">
                            <p className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold">E-MAİL:</p>
                            <a
                                href="mailto:1enesbayar@gmail.com"
                                className="text-[#0f172a] dark:text-[#e0f2f1] hover:underline font-semibold"
                            >
                                info@enbaytech.com
                            </a>
                        </div>
                    </div>
                    {visitCount !== null && (
                        <div className="text-[#0f172a] dark:text-[#e0f2f1] font-semibold">
                            Ziyaretçi Sayısı: {visitCount}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavbarUp;