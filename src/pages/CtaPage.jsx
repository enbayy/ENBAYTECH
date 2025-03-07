import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-transparent dark:bg-black text-white py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="relative z-10 max-w-4xl flex items-center justify-center flex-col">
                <h1 className="relative w-full xl:text-6xl md:text-5xl text-3xl sm:tracking-[12px] tracking-[8px] uppercase text-center outline-none animate-dimlight box-reflect mb-6">
                    Dijital Dönüşümünüz <br /> Başlıyor!
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white  text-lg sm:text-xl opacity-80 max-w-2xl mx-auto text-black dark:text-white z-20"
                >
                    B2B e-ticaret sistemleri, özel web yazılımları ve yenilikçi çözümlerle işinizi geleceğe taşıyın.
                    <span className="font-bold text-orange-400"> Sizi ileriye götürecek teknolojiyi keşfedin!</span>
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="/iletisim"
                        data-aos="zoom-in"
                        className="relative px-8 py-5 text-lg font-bold uppercase tracking-wide rounded-tl-3xl rounded-br-3xl shadow-xl shadow-orange-400 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-500 transform hover:scale-105"
                    >
                        🚀 Şimdi Başla
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CtaPage;