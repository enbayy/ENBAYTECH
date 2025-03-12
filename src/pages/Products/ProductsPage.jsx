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
                    <h1 data-aos="fade-right" data-aos-once="true" className="border-l-8 border-[#E76F51] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
                        ÜRÜNLERİMİZ
                    </h1>
                </div>
                <div>
                    <div data-aos="fade-up" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {productsToDisplay.map((product) => (
                            <div
                                key={product.id}
                                data-aos-delay={product.aosDelay}
                                className="group relative flex flex-col bg-transparent rounded-tl-3xl rounded-br-3xl overflow-hidden transition-all duration-300 p-6"
                            >
                                <div className="w-full aspect-w-16 aspect-h-9 flex items-center justify-center rounded-tl-3xl rounded-br-3xl overflow-hidden">
                                    <img src={product.imageUrl} alt={product.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="mt-4 flex-1 flex flex-col justify-between">
                                    <h2 className="text-xl font-semibold text-[#E76F51] dark:text-[#E9C46A]">{product.title}</h2>
                                    <p className="text-[#1E293B] dark:text-white mt-2 font-poppins">
                                        {product.description.split(" ").slice(0, 25).join(" ")}...
                                    </p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => navigate(`/urunler/${product.id}`)}
                                            className="w-[120px] h-[40px] bg-[#E76F51] dark:bg-[#E9C46A] text-white rounded-tl-2xl rounded-br-2xl hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition mt-4"
                                        >
                                            İncele
                                        </button>
                                    </div>
                                    <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#E76F51] dark:bg-[#E9C46A] transition-all duration-300 group-hover:w-full"></span>
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