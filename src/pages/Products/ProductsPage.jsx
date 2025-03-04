import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";

const ProductPage = () => {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const productsToDisplay = showAllProducts ? products : products.slice(0, 6);
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-black dark:text-white py-12">
            <div className="pb-12 text-center space-y-3">
                <h1 data-aos="fade-up" className="text-3xl font-semibold text-black dark:text-primary">Ürünlerimiz</h1>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {productsToDisplay.map((product) => (
                        <div
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={product.aosDelay}
                            className="flex flex-col bg-white dark:bg-black shadow-lg rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 p-6"
                        >
                            <div className="w-full h-48 flex items-center justify-center rounded-xl overflow-hidden">
                                <img src={product.imageUrl} alt={product.title} className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <div className="mt-4 flex-1 flex flex-col justify-between">
                                <h2 className="text-xl font-semibold">{product.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {product.description.split(" ").slice(0, 25).join(" ")}...
                                </p>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => navigate(`/urunler/${product.id}`)}
                                        className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-opacity-80 transition mt-4"
                                    >
                                        İncele
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductPage;