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
      className="container bg-[#f0fdf4] dark:bg-[#1a1f1c] py-12"
    >
      <div className="mx-auto px-4">
        <div className="mb-8 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#0f172a] dark:text-[#e0f2f1] border-l-8 border-[#10b981] dark:border-[#10b981] py-2 pl-2 text-2xl sm:text-3xl md:text-4xl font-semibold break-words font-inter"
          >
            TÜM HİZMETLER
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="flex flex-col bg-[#f0fdf4] dark:bg-[#1a1f1c] rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] border border-[#10b981] dark:border-[#10b981] cursor-pointer"
              onClick={() => handleDetailClick(service.id)}
            >
              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl font-semibold text-[#0f172a] dark:text-[#e0f2f1] mb-2 font-inter">
                  {service.title}
                </h2>
                <h3 className="text-xl font-medium text-[#0f172a] dark:text-[#e0f2f1] mb-4 font-inter">
                  {service.name}
                </h3>
                <p className="text-[#1f2937] dark:text-[#d1d5db] leading-relaxed line-clamp-5 font-poppins">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default AllServices;