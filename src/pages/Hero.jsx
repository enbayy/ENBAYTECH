import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#f9f9f9] dark:from-color1 dark:to-color2 py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 max-w-xl text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold color1 dark:color5 leading-tight font-roboto">
            Dijital Varlığınızı <br />
            <span className="text-color2 dark:text-color4">Profesyonel</span> <br />
            Tasarımlarla Güçlendirin.
          </h1>
          <p className="mt-6 text-lg md:text-xl color3 dark:color4 font-roboto leading-relaxed">
            İşletmenize özel web çözümleri ve etkileyici marka kimlikleri <br />
            ile hedef kitleniz üzerinde kalıcı izler bırakın.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start gap-6">
            <button
              onClick={() => alert("Ücretsiz teklif talebi gönderildi!")}
              className="bg-color2 hover:bg-color1 dark:bg-color3 dark:hover:bg-color4 text-color5 dark:text-color1 font-semibold px-12 py-4 rounded-full shadow-lg transition duration-300"
            >
              Ücretsiz Teklif Alın
            </button>
            <a
              href="#portfolio"
              className="inline-block px-12 py-4 border-2 border-color2 dark:border-color4 rounded-full font-semibold text-color2 dark:text-color4 hover:bg-color2 hover:text-color5 dark:hover:bg-color4 dark:hover:text-color1 transition duration-300"
            >
              Portfolyomuzu İnceleyin
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 max-w-xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="ENBAYTECH"
            className="rounded-3xl shadow-2xl border-4 border-[#685d5f]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;