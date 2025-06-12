import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoLight from "../../assets/enbayLogo.png"
import logoDark from "../../assets/enbayLogo3.png"
import VisitsCounter from "./VisitCounter.jsx";

const Footer = () => {
    return (
        <footer className="container bg-white dark:bg-[#1a1f1c] py-16">
            <div className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

                    <div className="flex flex-col items-center space-y-5">
                        <img
                            src={logoLight}
                            alt="logo"
                            className="w-24 block dark:hidden"
                        />
                        <img
                            src={logoDark}
                            alt="logo dark"
                            className="h-20 w-20 hidden dark:block"
                        />
                        <h2 className="text-3xl sm:text-4xl font-bold font-inter text-[#0f172a] dark:text-[#e0f2f1] tracking-wide">
                            ENBAYTECH
                        </h2>

                        <div className="flex space-x-6">
                            <a
                                href="https://www.linkedin.com/company/enbaytech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0f172a] dark:text-[#e0f2f1] hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://wa.me/905522312086"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0f172a] dark:text-[#e0f2f1] hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={28} />
                            </a>
                            <a
                                href="https://www.instagram.com/enesbayaar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0f172a] dark:text-[#e0f2f1] hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={28} />
                            </a>
                        </div>
                        <div className="text-center mb-4">
                            <div className="text-[#0f172a] dark:text-[#e0f2f1] text-sm font-poppins font-medium">
                                <VisitsCounter />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-[#0f172a] dark:text-[#e0f2f1] text-2xl font-semibold font-inter">HİZMETLERİMİZ</h4>
                        {[
                            { id: 1, name: "Web Tasarımı" },
                            { id: 2, name: "Logo Tasarımı" },
                            { id: 3, name: "SEO Çalışması" },
                            { id: 4, name: "UX/UI Tasarım" },
                            { id: 5, name: "Hosting & Domain Hizmetleri" },
                            { id: 6, name: "Web Sitesi Bakım ve Güncelleme" }
                        ].map(service => (
                            <div
                                key={service.id}
                                className="flex items-center space-x-2 text-[#0f172a] dark:text-[#e0f2f1] font-poppins hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-300"
                            >
                                <IoMdArrowDropright size={20} />
                                <span className="text-lg">{service.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-2xl font-semibold text-[#0f172a] dark:text-[#e0f2f1] font-inter">HIZLI ERİŞİM</h4>
                        {[
                            { link: "#", name: "ANASAYFA" },
                            { link: "#hakkimizda", name: "HAKKIMIZDA" },
                            { link: "#hizmetlerimiz", name: "HİZMETLER" },
                            { link: "#iletisim", name: "İLETİŞİM" }
                        ].map(page => (
                            <a
                                key={page.link}
                                href={page.link}
                                className="flex items-center space-x-2 text-[#0f172a] dark:text-[#e0f2f1] font-poppins hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-300"
                            >
                                <IoMdArrowDropright size={20} />
                                <span className="text-lg">{page.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <h4 className="text-2xl font-semibold text-[#0f172a] dark:text-[#e0f2f1] font-inter">İLETİŞİM</h4>
                        <p className="text-lg text-[#0f172a] dark:text-[#e0f2f1] font-poppins">info@enbaytech.com</p>
                        <p className="text-lg text-[#0f172a] dark:text-[#e0f2f1] font-poppins">+90 552 231 20 86</p>
                    </div>
                </div>

                <hr className="border-gray-300 dark:border-gray-700 my-10" />

                <div className="text-center -mb-8">
                    <p className="text-[#0f172a] dark:text-[#e0f2f1] text-sm select-none font-poppins font-semibold">
                        © 2025 ENBAYTECH. Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;