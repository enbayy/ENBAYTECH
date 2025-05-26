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
      className="relative bg-[#f9f9f9] dark:bg-[#000003] py-0 md:py-24 md:px-12 lg:px-20"
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
            className="text-[#392f2f] dark:text-[#d4cfce] text-5xl md:text-6xl font-bold leading-tight font-roboto color1 dark:color5"
            variants={textVariants}
          >
            Dijital Varlığınızı <br />
            <span className="text-[#392f2f] dark:text-[#d4cfce]">
              Profesyonel
            </span>{" "}
            <br />
            Tasarımlarla Güçlendirin.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl font-roboto leading-relaxed text-[#392f2f] dark:text-[#d4cfce]"
            variants={textVariants}
          >
            İşletmenize özel web çözümleri ve etkileyici marka kimlikleri ile <br />
            hedef kitleniz üzerinde kalıcı izler bırakın.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-start"
            variants={textVariants}
          >
            <a
              href="#iletisim"
              className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#112224] dark:border-[#d4cfce] rounded-full font-semibold text-[#112224] dark:text-[#d4cfce] hover:bg-[#112224] hover:text-[#f9f9f9] dark:hover:bg-[#d4cfce] dark:hover:text-[#000003] transition duration-300 ease-in-out text-sm sm:text-base"
            >
              Hemen Başla
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 max-w-xl mx-auto flex justify-center"
          variants={imageVariants}
        >
          <img
            src={hero}
            alt="ENBAYTECH"
            className="rounded-3xl shadow-2xl border-4 border-[#112224] dark:border-[#d4cfce] hover:shadow-[#112224] dark:hover:shadow-[#d4cfce] transition-shadow duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;