import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-black dark:bg-white text-white  py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10 max-w-4xl flex items-center justify-center flex-col">
                <h2
                    className="text-4xl sm:text-5xl font-bold tracking-wide leading-[1.4] bg-clip-text text-transparent bg-primary drop-shadow-lg pb-4 font-poppins"
                >
                    DİJİTAL DÖNÜŞÜMÜNÜZ BAŞLIYOR!
                </h2>
                <p
                    className="text-lg sm:text-xl mt-6 opacity-80 max-w-2xl mx-auto text-white dark:text-black font-poppins"
                >
                    B2B e-ticaret sistemleri, özel web yazılımları ve yenilikçi çözümlerle işinizi geleceğe taşıyın.
                    <span className="text-primary font-poppins"> Sizi ileriye götürecek teknolojiyi keşfedin!</span>
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center">
                    <a
                        href="/iletisim"
                        className="relative px-6 py-4 text-xl font-bold uppercase tracking-wide rounded-tl-2xl rounded-br-2xl bg-orange-500 text-white hover:bg-orange-600 font-poppins"
                    >
                        ŞİMDİ BAŞLA
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CtaPage;