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
            <div data-aos="fade-up" className="max-w-5xl mx-auto px-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-white text-center px-6 drop-shadow-lg">
                    {product.title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mt-8 text-lg leading-relaxed tracking-wide border-l-4 border-primary pl-4">
                    {product.description}
                </p>

                <div className="mt-10 bg-gray-100 dark:bg-black p-6 shadow-xl shadow-gray-300 rounded-tl-3xl rounded-br-3xl dark:shadow-gray-800">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                        Teknik Özellikler
                    </h2>
                    <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                        {product.technicalSpecs.map((spec, idx) => (
                            <li key={idx} className="list-disc list-inside">{spec}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 bg-gray-100 dark:bg-black p-6 shadow-xl shadow-gray-300 rounded-tl-3xl rounded-br-3xl dark:shadow-gray-800">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                        Kullanıcı Yorumları
                    </h2>
                    <div className="mt-4 space-y-4">
                        {product.userReviews.map((review, idx) => (
                            <div key={idx} className="p-4 bg-gray-100 dark:bg-black rounded-lg shadow">
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
                        <div key={index} className="bg-gray-100 dark:bg-black p-6 shadow-xl shadow-gray-300 rounded-tl-3xl rounded-br-3xl dark:shadow-gray-800">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
                                {section.heading}
                            </h2>
                            <p className="mt-3 text-gray-700 dark:text-gray-300">{section.content}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-black dark:text-white border-l-4 border-primary pl-4 mb-6">
                        İlgili Ürünler
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {products
                            .filter((s) => s.id !== product.id)
                            .slice(0, 3)
                            .map((relatedProduct) => (
                                <div
                                    key={relatedProduct.id}
                                    className="bg-white dark:bg-black  p-4 rounded-tl-3xl rounded-br-3xl shadow-xl shadow-gray-300 dark:shadow-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-300 dark:border-white"
                                    onClick={() => navigate(`/urunler/${relatedProduct.id}`)}
                                >
                                    <img
                                        src={relatedProduct.imageUrl}
                                        alt={relatedProduct.title}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{relatedProduct.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{relatedProduct.description.slice(0, 80)}...</p>
                                    <ul className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                                        {relatedProduct.technicalSpecs.slice(0, 3).map((spec, index) => (
                                            <li key={index}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-primary text-white rounded-tl-2xl rounded-br-2xl shadow-md transition-all duration-300 hover:bg-opacity-80 font-semibold"
                    >
                        Geri Dön
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;