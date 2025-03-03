import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";

const stats = [
  { value: 300, label: "Tamamlanan Proje" },
  { value: 20, label: "Yıllık Deneyim" },
  { value: 500, label: "Mutlu Müşteri" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

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
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-black text-black dark:text-white">
      <div className="container flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center">
          <div data-aos="zoom-in" className="relative order-1 sm:order-2">
            <img
              src={hero}
              alt="Hero"
              className="w-full sm:max-w-[320px] md:max-w-[450px] rounded-xl"
            />
          </div>

          <div className="space-y-6 order-2 sm:order-1 xl:pr-40 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              style={{ lineHeight: 1.3 }}
            >
              Kurumsal B2B Yazılım ve Web Teknolojileri Ajansı{" "}
              <span className="text-primary">Engin Tasarım</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-black dark:text-white">
              Web yazılımları, B2B e-ticaret sistemleri ve dijital dönüşüm çözümleriyle
              teknoloji ortağınız.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-white dark:text-black bg-primary hover:bg-primary-dark transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium shadow-lg"
            >
              Daha Fazla
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white dark:bg-black shadow-xl px-8 py-6 rounded-2xl border border-black dark:border-white"
            >
              <h1 className="text-5xl font-extrabold text-primary">+{counts[index]}</h1>
              <p className="text-gray-800 dark:text-gray-300 text-lg font-medium mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;