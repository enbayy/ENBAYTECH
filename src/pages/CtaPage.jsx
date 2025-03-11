import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-black dark:bg-white text-white py-10 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10 max-w-4xl flex items-center justify-center flex-col">
                <h2 className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-extrabold tracking-wide leading-tight text-primary drop-shadow-xl pb-6 font-['Inter'] uppercase">
                    DİJİTAL GELECEĞİNİZİ ŞEKİLLENDİRİN!
                </h2>
                <p className="text-lg sm:text-xl mt-0 opacity-90 max-w-2xl mx-auto text-white dark:text-black font-poppins">
                    Güçlü yazılım altyapısı, <strong className="text-primary font-poppins">B2B e-ticaret sistemleri</strong> ve
                    yenilikçi çözümlerle işletmenizi ileri taşıyoruz.
                    <span className="text-primary font-bold font-poppins"> Teknolojiyi keşfedin, dönüşümü başlatın!</span>
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center">
                    <a
                        href="/iletisim"
                        className="relative px-8 py-4 text-xl font-bold tracking-wide rounded-tl-3xl rounded-br-3xl bg-orange-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_10px_30px_rgba(255,165,0,0.3)] hover:bg-orange-600 font-poppins border border-orange-400"
                    >
                        Teklif Al
                    </a>
                </div>
                <p className="text-white dark:text-black mt-10 text-sm opacity-75 font-['DM Sans']">
                    100+ mutlu müşteriyle dijital dönüşümde yanınızdayız!
                </p>
            </div>
        </div>
    );
};

export default CtaPage;