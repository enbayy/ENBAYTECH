import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/ServicesData";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
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
      className="bg-[#f0fdf4] dark:bg-[#1a1f1c] py-12 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white font-inter"
          >
            TÜM HİZMETLERİMİZ
          </motion.h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 mx-auto font-poppins">
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
              className="bg-[#f0fdf4] dark:bg-[#1a1f1c] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg shadow-gray-700 hover:-translate-y-1 transition duration-300 cursor-pointer"
              onClick={() => handleDetailClick(service.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ecfdf5] dark:bg-[#065f46] p-3 rounded-full">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-inter">
                  {service.title}
                </h2>
              </div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-poppins line-clamp-5">
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