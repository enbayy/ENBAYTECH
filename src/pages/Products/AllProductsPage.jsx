import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";

const AllProducts = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="container">
                <div data-aos="zoom-in" data-aos-once="true" className="mb-8 text-center space-y-3">
                    <h1 className="border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                        TÜM ÜRÜNLER
                    </h1>
                </div>
                <div>
                    <div data-aos="zoom-in" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                data-aos-delay={product.aosDelay}
                                className="group perspective"
                            >
                                <div className="relative w-full h-[300px] transform-style-3d transition-transform duration-500 group-hover:rotate-y-180 rounded-tl-3xl rounded-br-3xl border border-[#E76F51] dark:border-[#E9C46A] cursor-default">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent rounded-tl-3xl rounded-br-3xl shadow-md backface-hidden group-hover:opacity-0 group-hover:invisible transition-opacity duration-500 gap-y-4">
                                        <div className="relative">
                                            <img src={product.imageUrl} alt={product.title} className="w-40 h-40 object-contain relative p-6" />
                                            <div className="absolute inset-0 bg-[#E76F51] rounded-full dark:bg-[#E9C46A] -z-10">
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-[#E76F51] dark:text-[#E9C46A] mt-2">{product.title}</h2>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col gap-y-10 items-center justify-center bg-[#E76F51] dark:bg-[#E9C46A] text-white p-6 rounded-tl-3xl rounded-br-3xl transform rotate-y-180 backface-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
                                        <p className="text-lg text-center font-poppins line-clamp-5 leading-relaxed">{product.description}</p>
                                        <button
                                            onClick={() => navigate(`/urunler/${product.id}`)}
                                            className="w-[140px] h-[45px] bg-[#E9C46A] dark:bg-[#E76F51] text-white text-lg rounded-tl-2xl rounded-br-2xl hover:bg-[#d5a93a] dark:hover:bg-[#BF3A26] transition mt-4"
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

export default AllProducts;