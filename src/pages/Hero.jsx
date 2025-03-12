import React, { useEffect, useState } from "react";
import hero from "../assets/hero2.png";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: 300, label: "Bitmiş Proje" },
  { value: 20, label: "Yıllık Deneyim" },
  { value: 500, label: "Mutlu Müşteri" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hizmetlerimiz");
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;
    const intervals = stats.map((stat, index) => {
      let count = 0;
      const increment = stat.value / steps;
      return setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(intervals[index]);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(count);
          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="hero" className="relative bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1B1F3B] dark:text-white py-28">
      <div className="container flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-14 lg:gap-24">
        <div data-aos="zoom-in" className="lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight font-poppins">
            Dijital Dönüşümde Güvenilir İş Ortağınız <br />
            <span className="text-[#E76F51] dark:text-[#E9C46A] underline underline-offset-8">
              Engin Tasarım
            </span>
          </h1>
          <p data-aos-delay="300" className="text-xl text-gray-700 dark:text-gray-400 font-poppins">
            Kurumsal yazılım çözümleri, B2B e-ticaret sistemleri ve özel web projeleriyle
            markanızı dijital dünyada güçlendiriyoruz.
          </p>
          <button
            onClick={handleClick}
            data-aos-delay="500"
            className="text-white bg-[#E76F51] dark:bg-[#E9C46A] hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition-all duration-300 px-9 py-4 rounded-tl-3xl rounded-br-3xl text-xl shadow-lg font-poppins"
          >
            Hemen Başla
          </button>
        </div>
        <img
          src={hero}
          data-aos="zoom-in"
          alt="Hero"
          className="w-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-cover rounded-2xl"
        />
      </div>

      <div className="w-full flex flex-col items-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="px-8 py-6 rounded-3xl w-40 sm:w-48 md:w-52"
            >
              <h1 className="text-5xl font-bold text-[#E76F51] dark:text-[#E9C46A]">
                {counts[index]}+
              </h1>
              <p className="text-gray-700 dark:text-gray-400 text-lg font-bold mt-2 font-poppins">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;