import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroData } from "../data/HeroData";
import 'aos/dist/aos.css';
import Aos from "aos";

const ShuffleHero = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <section className="container w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
      <div data-aos="fade-up">
        <h1
          className="text-[#0f172a] dark:text-[#e0f2f1] text-5xl md:text-6xl font-extrabold font-roboto leading-tight tracking-tight"
        >
          Dijital Varlığınızı <br />
          <span className="text-[#059669] dark:text-[#10b981]">Profesyonel</span>{" "}
          <br />
          Tasarımlarla <span className="underline decoration-[#059669] dark:decoration-[#10b981]">Güçlendirin</span>.
        </h1>

        <p
          className="mt-6 text-lg md:text-xl font-poppins leading-relaxed text-[#0f172a] dark:text-[#e0f2f1]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          İşletmenize özel web çözümleri ve etkileyici marka kimlikleri ile <br />
          hedef kitleniz üzerinde kalıcı izler bırakın.
        </p>

        <div
          className="mt-10 flex justify-center sm:justify-start"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#iletisim"
            className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#0f172a] dark:border-[#e0f2f1] rounded-full font-semibold text-[#0f172a] dark:text-[#e0f2f1] hover:bg-[#10b981] hover:text-white dark:hover:bg-[#10b981] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter"
          >
            Hemen Başla
          </a>
        </div>
      </div>
      <ShuffleGrid />
    </section >
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(heroData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;