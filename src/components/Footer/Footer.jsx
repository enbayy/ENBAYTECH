import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import logo from '../../assets/enbayLogo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

                    <div className="flex flex-col items-center space-y-5">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-24 h-auto"
                        />
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 font-inter tracking-wide">
                            ENBAYTECH
                        </h2>

                        <div className="flex space-x-6">
                            <a
                                href="https://www.linkedin.com/in/enbayar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-[#d4cfce] transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://github.com/enbayy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-[#d4cfce] transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={28} />
                            </a>
                            <a
                                href="https://www.instagram.com/enbayar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-[#d4cfce] transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={28} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 font-inter">Hizmetlerimiz</h4>
                        {[
                            { id: 1, name: "Web Tasarımı" },
                            { id: 2, name: "Logo Tasarımı" },
                            { id: 3, name: "SEO Çalışması" },
                            { id: 4, name: "UX/UI Tasarım" },
                            { id: 5, name: "Hosting & Domain Hizmetleri" },
                            { id: 6, name: "Web Sitesi Bakım ve Güncelleme" }
                        ].map(service => (
                            <a
                                key={service.id}
                                href={`/hizmetler/${service.id}`}
                                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#d4cfce] dark:hover:text-[#757174] transition-colors duration-300"
                            >
                                <IoMdArrowDropright size={20} />
                                <span className="text-lg">{service.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 font-inter">Tanıtım Sayfaları</h4>
                        {[
                            { link: "/", name: "ANASAYFA" },
                            { link: "/hakkimizda", name: "HAKKIMIZDA" },
                            { link: "/hizmetlerimiz", name: "HİZMETLER" },
                            { link: "/iletisim", name: "İLETİŞİM" }
                        ].map(page => (
                            <a
                                key={page.link}
                                href={page.link}
                                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#d4cfce] dark:hover:text-[#757174] transition-colors duration-300"
                            >
                                <IoMdArrowDropright size={20} />
                                <span className="text-lg">{page.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 font-inter">İletişim</h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300">📧 1enesbayar@gmail.com</p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">📞 +90 552 231 20 86</p>
                    </div>
                </div>

                <hr className="border-gray-300 dark:border-gray-700 my-10" />

                <div className="text-center -mb-8">
                    <p className="text-gray-700 dark:text-gray-300 text-sm select-none font-poppins font-semibold">
                        © 2025 ENBAYTECH. Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;