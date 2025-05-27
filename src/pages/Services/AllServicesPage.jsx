import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AllServices = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/hizmetler/${id}`);
  };

  return (
    <section
      id="all-services"
      className="container bg-white dark:bg-[#1a1f1c] py-20"
    >
      <div className="mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white font-inter"
          >
            TÜM HİZMETLERİMİZ
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins">
            Ajansımızın sunduğu tüm dijital çözümlerle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1f1c] dark:to-[#111411] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleDetailClick(service.id)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-tr from-[#d1fae5] to-[#10b981] dark:from-[#065f46] dark:to-[#10b981] p-4 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                  <span className="text-2xl text-[#065f46] dark:text-white">
                    {service.icon}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                  {service.title}
                </h2>
              </div>
              <h3 className="text-md text-gray-500 dark:text-gray-400 mb-3 font-semibold font-poppins uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-poppins line-clamp-5">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;