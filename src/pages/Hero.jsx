import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: 300, label: "Tamamlanan Proje" },
  { value: 20, label: "Yıllık Deneyim" },
  { value: 500, label: "Mutlu Müşteri" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hizmetlerimiz")
  }

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white px-12 sm:px-16">
      <div className="flex flex-col sm:flex-row-reverse justify-between items-center text-center sm:text-left max-w-6xl w-full gap-16 sm:gap-24">
        <div data-aos="zoom-in" className="sm:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] rounded-xl"
          />
        </div>

        <div className="sm:w-1/2 space-y-8">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ lineHeight: 1.3 }}
          >
            Kurumsal B2B Yazılım ve Web Teknolojileri Ajansı{" "}
            <span className="text-primary underline underline-offset-4">Engin Tasarım</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-black dark:text-white">
            Web yazılımları, B2B e-ticaret sistemleri ve dijital dönüşüm çözümleriyle
            teknoloji ortağınız.
          </p>
          <button
            onClick={handleClick}
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-white dark:text-black bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-4 rounded-full text-lg font-medium shadow-lg"
          >
            Daha Fazla
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white dark:bg-black shadow-xl px-10 py-8 rounded-2xl border border-black dark:border-white text-center w-44 sm:w-52"
          >
            <h1 className="text-5xl font-extrabold text-primary">+{counts[index]}</h1>
            <p className="text-gray-800 dark:text-gray-300 text-lg font-medium mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;