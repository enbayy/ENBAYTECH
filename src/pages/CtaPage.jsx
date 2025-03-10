import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-white dark:bg-black text-white  py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255, 115, 0, 0, 0.15)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
            <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-yellow-500 rounded-full opacity-20 blur-2xl animate-pulse">
            </div>
            <div className="relative z-10 max-w-4xl flex items-center justify-center flex-col">
                <h2
                    data-aos="fade-up"
                    className="text-5xl sm:text-6xl font-extrabold tracking-wide leading-[1.4] bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-lg pb-4"
                >
                    Dijital Dönüşümünüz Başlıyor! 🚀
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg sm:text-xl mt-6 opacity-80 max-w-2xl mx-auto text-black dark:text-white"
                >
                    B2B e-ticaret sistemleri, özel web yazılımları ve yenilikçi çözümlerle işinizi geleceğe taşıyın.
                    <span className="font-bold text-orange-400"> Sizi ileriye götürecek teknolojiyi keşfedin!</span>
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="/iletisim"
                        data-aos="zoom-in"
                        className="relative px-6 py-4 text-lg font-bold uppercase tracking-wide rounded-tl-2xl rounded-br-2xl shadow-md shadow-orange-500 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-500 "
                    >
                        🚀 Şimdi Başla
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CtaPage;