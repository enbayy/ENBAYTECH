import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#fff7ed] dark:bg-[#7c2d12] py-0 md:py-24"
    >
      <motion.div
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="lg:w-1/2 max-w-xl text-center lg:text-left"
          variants={textVariants}
        >
          <motion.h1
            className="text-[#0f172a] dark:text-[#e0f2f1] text-5xl md:text-6xl font-extrabold font-roboto leading-tight tracking-tight"
            variants={textVariants}
          >
            Dijital Varlığınızı <br />
            <span className="text-[#f97316] dark:text-[#fb923c]">Profesyonel</span>{" "}
            <br />
            Tasarımlarla{" "}
            <span className="underline decoration-[#f97316] dark:decoration-[#fb923c]">
              Güçlendirin
            </span>
            .
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl font-poppins leading-relaxed text-[#0f172a] dark:text-[#e0f2f1]"
            variants={textVariants}
          >
            İşletmenize özel web çözümleri ve etkileyici marka kimlikleri ile <br />
            hedef kitleniz üzerinde kalıcı izler bırakın.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center sm:justify-start"
            variants={textVariants}
          >
            <a
              href="#iletisim"
              className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#0f172a] dark:border-[#e0f2f1] rounded-full font-semibold text-[#0f172a] dark:text-[#e0f2f1] hover:bg-[#fb923c] hover:text-white dark:hover:bg-[#fb923c] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter"
            >
              Hemen Başla
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-xl mx-auto flex justify-center"
          variants={imageVariants}
        >
          <img
            src={hero}
            alt="ENBAYTECH"
            className="rounded-3xl shadow-2xl border-4 border-[#f97316] dark:border-[#fb923c] hover:shadow-[#f97316] dark:hover:shadow-[#fb923c] transition-shadow duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
