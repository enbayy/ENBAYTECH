import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white py-16 dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-start">
                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h2 className="text-3xl font-semibold text-black leading-tight dark:text-[#F9FAFB]">Engin Tasarım</h2>
                        <div className="flex justify-center sm:justify-start space-x-6 mt-4">
                            <a href="https://www.facebook.com/engintasarim.com.tr/" target="_blank" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.facebook.com/engintasarim.com.tr/" target="_blank" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaSquareXTwitter size={30} />
                            </a>
                            <a href="https://www.linkedin.com/company/engintasarim/posts/?feedView=all" target="_blank" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://www.instagram.com/engin_tasarim/" target='_blank' className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaInstagram size={30} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">Hizmetlerimiz</h4>
                        {[
                            { id: 1, name: "B2B E-ticaret" },
                            { id: 2, name: "Online Reklamcılık" },
                            { id: 3, name: "Web Sitesi İçerik Hizmetleri" },
                            { id: 4, name: "CRM - Müşteri İlişkileri Yönetimi" },
                            { id: 5, name: "Dijital Ajans Hizmetleri" },
                            { id: 6, name: "Kuyumcu E-ticaret Sitesi" }
                        ].map((service) => (
                            <div key={service.id} className="flex items-center space-x-2 group">
                                <IoMdArrowDropright className="text-black dark:text-[#F9FAFB] group-hover:text-primary transition-all duration-300" />
                                <a href={`/hizmetler/${service.id}`} className="text-black dark:text-[#F9FAFB] group-hover:text-primary transition-all duration-300">
                                    {service.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">Tanıtım Sayfaları</h4>
                        {[
                            { link: "/hakkimizda", name: "Hakkımızda" },
                            { link: "/hizmetlerimiz", name: "Hizmetler" },
                            { link: "/urunler", name: "Ürünler" },
                            { link: "/referanslar", name: "Referanslar" },
                            { link: "/iletisim", name: "İletişim" }
                        ].map((page) => (
                            <div key={page.link} className="flex items-center space-x-2 group">
                                <IoMdArrowDropright className="text-black dark:text-[#F9FAFB] group-hover:text-primary transition-all duration-300" />
                                <a href={page.link} className="text-black dark:text-[#F9FAFB] group-hover:text-primary transition-all duration-300">
                                    {page.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">İletişim</h4>
                        <p className="text-black transition-all duration-300 dark:text-[#F9FAFB]">info@engintasarim.com</p>
                        <p className="text-black transition-all duration-300 dark:text-[#F9FAFB]">+90 212 482 97 57</p>
                    </div>

                    <div className="text-center sm:text-right">
                        <h3 className="text-xl font-semibold text-black mb-4 dark:text-[#F9FAFB]">Konum Bilgileri</h3>
                        <p className="text-black text-base sm:text-lg leading-relaxed dark:text-[#F9FAFB]">
                            Şenlikköy Mah. Germeyan Sok. No:21/3<br />
                            Florya / Bakırköy - İstanbul
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />
                <div className="text-center -mb-8">
                    <p className="text-black text-lg font-semibold dark:text-white select-none">
                        Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;