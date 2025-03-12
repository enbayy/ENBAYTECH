import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-[#F8FAFC] dark:bg-[#0F172A] text-[#0F172A] dark:text-white py-10 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10 max-w-4xl flex items-center justify-center flex-col">
                <h2 className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-extrabold tracking-wide leading-tight text-[#E76F51] dark:text-[#E9C46A] drop-shadow-xl pb-6 font-['Inter'] uppercase">
                    DİJİTAL GELECEĞİNİZİ ŞEKİLLENDİRİN!
                </h2>
                <p className="text-lg sm:text-xl mt-0 opacity-90 max-w-2xl mx-auto text-[#0F172A] dark:text-white font-poppins">
                    Güçlü yazılım altyapısı, <strong className="text-[#E76F51] dark:text-[#E9C46A] font-poppins">B2B e-ticaret sistemleri</strong> ve
                    yenilikçi çözümlerle işletmenizi ileri taşıyoruz.
                    <span className="text-[#E76F51] dark:text-[#E9C46A] font-bold font-poppins"> Teknolojiyi keşfedin, dönüşümü başlatın!</span>
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center">
                    <a
                        href="/iletisim"
                        className="relative px-9 py-4 text-xl text-white font-bold tracking-wide rounded-tl-3xl rounded-br-3xl bg-[#E76F51] dark:bg-[#E9C46A] duration-200 hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] font-poppins"
                    >
                        Teklif Al
                    </a>
                </div>
                <p className="text-[#0F172A] dark:text-white mt-10 text-sm opacity-75 font-['DM Sans']">
                    500+ mutlu müşteriyle dijital dönüşümde yanınızdayız!
                </p>
            </div>
        </div>
    );
};

export default CtaPage;