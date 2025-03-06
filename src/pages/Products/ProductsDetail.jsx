import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    if (!product) {
        return <p className="text-center text-red-500 text-xl font-semibold mt-10">Ürün bulunamadı!</p>;
    }

    return (
        <section className="bg-gray-50 dark:bg-black dark:text-white py-12">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-72 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover brightness-75 transform scale-105 transition-all duration-500 hover:scale-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 to-black/30">
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                            {product.title}
                        </h1>
                    </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4">
                    {product.description}
                </p>

                <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                        Teknik Özellikler
                    </h2>
                    <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                        {product.technicalSpecs.map((spec, idx) => (
                            <li key={idx} className="list-disc list-inside">{spec}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                        Kullanıcı Yorumları
                    </h2>
                    <div className="mt-4 space-y-4">
                        {product.userReviews.map((review, idx) => (
                            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow">
                                <p className="text-lg font-semibold text-primary">{review.reviewer}</p>
                                <p className="text-yellow-500">
                                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 space-y-8">
                    {product.sections?.map((section, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                                {section.heading}
                            </h2>
                            <p className="mt-3 text-gray-700 dark:text-gray-300">{section.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-primary text-white rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-80"
                    >
                        Geri Dön
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;