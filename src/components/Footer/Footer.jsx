import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import BrandLinks from '../BrandLinks';

const Footer = () => {
    return (
        <footer className="bg-[#F8FAFC] dark:bg-[#0F172A] py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 justify-center items-start">
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                        <h2 className="text-3xl font-bold leading-tight text-[#1E293B] dark:text-white font-inter">
                            ENGİN TASARIM
                        </h2>
                        <BrandLinks />
                    </div>
                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 font-inter">Hizmetlerimiz</h4>
                        {[
                            { id: 1, name: "B2B E-ticaret" },
                            { id: 2, name: "Online Reklamcılık" },
                            { id: 3, name: "Web Sitesi İçerik Hizmetleri" },
                            { id: 4, name: "CRM - Müşteri İlişkileri Yönetimi" },
                            { id: 5, name: "Dijital Ajans Hizmetleri" },
                            { id: 6, name: "Kuyumcu E-ticaret Sitesi" }
                        ].map((service) => (
                            <div key={service.id} className="flex items-center space-x-2 group">
                                <IoMdArrowDropright className="text-[#1E293B] dark:text-white group-hover:text-[#E76F51] dark:group-hover:text-[#E9C46A] transition-all duration-300" />
                                <a href={`/hizmetler/${service.id}`} className="text-lg text-[#1E293B] dark:text-white group-hover:text-[#E76F51] dark:group-hover:text-[#E9C46A] transition-all duration-300">
                                    {service.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 font-inter">Tanıtım Sayfaları</h4>
                        {[
                            { link: "/hakkimizda", name: "Hakkımızda" },
                            { link: "/hizmetlerimiz", name: "Hizmetler" },
                            { link: "/urunler", name: "Ürünler" },
                            { link: "/referanslar", name: "Referanslar" },
                            { link: "/iletisim", name: "İletişim" }
                        ].map((page) => (
                            <div key={page.link} className="flex items-center space-x-2 group">
                                <IoMdArrowDropright className="text-[#1E293B] dark:text-white group-hover:text-[#E76F51] dark:group-hover:text-[#E9C46A] transition-all duration-300" />
                                <a href={page.link} className="text-lg text-[#1E293B] dark:text-white group-hover:text-[#E76F51] dark:group-hover:text-[#E9C46A] transition-all duration-300">
                                    {page.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 font-inter">İletişim</h4>
                        <p className="-transition-all duration-300 text-[#1E293B] dark:text-white text-lg">info@engintasarim.com</p>
                        <p className="-transition-all duration-300 text-[#1E293B] dark:text-white text-lg">+90 212 482 97 57</p>
                    </div>

                    <div className="text-center sm:text-right">
                        <h3 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 font-inter">Konum Bilgileri</h3>
                        <p className="text-lg sm:text-lg leading-relaxed text-[#1E293B] dark:text-white">
                            Şenlikköy Mah. Germeyan Sok. No:21/3<br />
                            Florya / Bakırköy - İstanbul
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />
                <div className="text-center -mb-8">
                    <p className="text-black text-xl font-bold dark:text-white select-none font-poppins">
                        Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;