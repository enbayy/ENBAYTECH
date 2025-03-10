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
    <section id="hero" className="bg-white dark:bg-black dark:text-white py-12">
      <div className="container flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10 lg:gap-20">
        <div data-aos="zoom-in" className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Kurumsal B2B Yazılım ve Web Teknolojileri Ajansı{" "}
            <span className="text-primary underline underline-offset-4">
              Engin Tasarım
            </span>
          </h1>
          <p data-aos-delay="300" className="text-lg text-gray-800 dark:text-gray-300">
            Web yazılımları, B2B e-ticaret sistemleri ve dijital dönüşüm
            çözümleriyle teknoloji ortağınız.
          </p>
          <button
            onClick={handleClick}
            data-aos-delay="500"
            className="text-white dark:text-black bg-primary hover:bg-orange-600 transition-all duration-300 px-7 py-3 rounded-tl-2xl rounded-br-2xl text-lg font-semibold shadow-lg"
          >
            Daha Fazla
          </button>
        </div>
        <img
          src={hero}
          data-aos="zoom-in"
          alt="Hero"
          className="w-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-xl"
        />
      </div>

      <div className="w-full flex flex-col items-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white dark:bg-black px-8 py-6 rounded-3xl w-40 sm:w-48 md:w-52"
            >
              <h1 className="text-5xl font-bold text-primary">
                {counts[index]}+
              </h1>
              <p className="text-gray-800 dark:text-gray-300 text-lg font-bold mt-2">
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