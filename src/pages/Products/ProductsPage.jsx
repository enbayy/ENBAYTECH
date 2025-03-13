import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";

const ProductPage = () => {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const productsToDisplay = showAllProducts ? products : products.slice(0, 6);
    const navigate = useNavigate();

    return (
        <section className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="container">
                <div className="mb-8 text-center space-y-3">
                    <h1 data-aos="fade-right" data-aos-once="true" className="text-[#E76F51] dark:text-[#E9C46A] border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                        ÜRÜNLERİMİZ
                    </h1>
                </div>
                <div>
                    <div data-aos="fade-up" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {productsToDisplay.map((product) => (
                            <div
                                key={product.id}
                                data-aos-delay={product.aosDelay}
                                className="group perspective"
                            >
                                <div className="relative w-full h-[300px] transform-style-3d transition-transform duration-500 group-hover:rotate-y-180 rounded-tl-3xl rounded-br-3xl border border-[#E76F51] dark:border-[#E9C46A]">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent rounded-tl-3xl rounded-br-3xl shadow-md backface-hidden group-hover:opacity-0 group-hover:invisible transition-opacity duration-500 gap-y-4">
                                        <div className="relative">
                                            <img src={product.imageUrl} alt={product.title} className="w-44 h-44 object-contain relative p-6" />
                                            <div className="absolute inset-0 bg-[#E76F51] rounded-full dark:bg-[#E9C46A] -z-10">
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-[#E76F51] dark:text-[#E9C46A] mt-2">{product.title}</h2>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col gap-y-10 items-center justify-center bg-[#E76F51] dark:bg-[#E9C46A] text-white p-6 rounded-tl-3xl rounded-br-3xl transform rotate-y-180 backface-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
                                        <p className="text-lg text-center font-poppins line-clamp-5 leading-relaxed">{product.description}</p>
                                        <button
                                            onClick={() => navigate(`/urunler/${product.id}`)}
                                            className="w-[140px] h-[45px] bg-[#E9C46A] dark:bg-[#E76F51] text-white text-lg rounded-tl-2xl rounded-br-2xl hover:bg-[#BF3A26] dark:hover:bg-[#E9C46A] transition mt-4"
                                        >
                                            İncele
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;