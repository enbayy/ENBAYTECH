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
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0 flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
          </div>

          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Kurumsal B2B Yazılım ve Web Teknolojileri Ajansı {" "}
              <span className="text-primary">Engin Tasarım</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Web yazılımları, B2B e-ticaret sistemleri ve dijital dönüşüm çözümleriyle teknoloji ortağınız.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Daha Fazla
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-black dark:bg-white dark:text-white shadow-md px-6 py-4 rounded-xl"
            >
              <h1 className="text-4xl font-bold text-primary">+{counts[index]}</h1>
              <p className="text-white dark:text-black text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;