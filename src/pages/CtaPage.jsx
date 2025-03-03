import React from "react";

const CtaPage = () => {
    return (
        <div className="relative bg-orange-600 text-white py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">

            <div className="relative z-10 max-w-4xl">
                <h2
                    data-aos="fade-up"
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                >
                    Dijital Dönüşümünüzü Hızlandırın 🚀
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg sm:text-xl mt-6 opacity-90"
                >
                    B2B e-ticaret sistemleri, web yazılımları ve dijital çözümlerle işinizi ileriye taşıyın.
                    Şimdi bizimle iletişime geçin!
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/iletisim"
                        data-aos="zoom-in"
                        className="bg-white text-orange-600 hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                    >
                        Hemen Başla
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CtaPage;