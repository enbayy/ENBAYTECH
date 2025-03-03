import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    if (!product) {
        return <p className="text-center text-red-500 text-xl">Ürün bulunamadı!</p>;
    }

    return (
        <section className="bg-white dark:bg-black dark:text-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-black dark:text-primary">{product.title}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">{product.description}</p>
                </div>

                <div className="mt-6 flex justify-center">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full max-w-3xl h-96 object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="mt-10 max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-black dark:text-white">Teknik Özellikler</h2>
                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                        {product.technicalSpecs.map((spec, idx) => (
                            <li key={idx} className="list-disc list-inside">{spec}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-black dark:text-white">Kullanıcı Yorumları</h2>
                    <div className="mt-4 space-y-4">
                        {product.userReviews.map((review, idx) => (
                            <div key={idx} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
                                <p className="text-lg font-semibold text-primary">{review.reviewer}</p>
                                <p className="text-yellow-500">
                                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 max-w-3xl mx-auto space-y-8">
                    {product.sections?.map((section, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-black dark:text-white">{section.heading}</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">{section.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button onClick={() => navigate(-1)} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80">
                        Geri Dön
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;