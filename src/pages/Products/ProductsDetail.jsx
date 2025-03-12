import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";
import { FaArrowLeft, FaStar, FaCheckCircle } from "react-icons/fa";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    if (!product) {
        return <p className="text-center text-red-500 text-xl font-semibold mt-10">Ürün bulunamadı!</p>;
    }

    return (
        <section className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="relative bg-[#E76F51] dark:bg-[#E9C46A] text-white py-16 px-8 text-center">
                <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <h1 className="text-5xl font-bold drop-shadow-lg relative font-poppins">{product.title}</h1>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10 items-center">
                <img src={product.imageUrl} alt={product.title} className="rounded-br-3xl rounded-tl-3xl" />
                <div>
                    <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4">Ürün Açıklaması</h2>
                    <p className="mt-4 text-[#1E293B] dark:text-[#E9E9E9] leading-relaxed font-poppins">{product.description}</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 bg-[#F8FAFC] dark:bg-[#0F172A] p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4">Teknik Özellikler</h2>
                <ul className="mt-4 space-y-3 text-[#1E293B] dark:text-[#E9E9E9]">
                    {product.technicalSpecs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-poppins">
                            <FaCheckCircle className="text-[#E76F51]" /> {spec}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 bg-[#F8FAFC] dark:bg-[#0F172A] p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4">Kullanıcı Yorumları</h2>
                <div className="mt-6 space-y-6">
                    {product.userReviews.map((review, idx) => (
                        <div key={idx} className="p-6 bg-white dark:bg-[#1E293B] rounded-lg shadow">
                            <p className="text-lg font-semibold text-[#E76F51] dark:text-[#E9C46A] font-poppins">{review.reviewer}</p>
                            <p className="flex items-center text-yellow-500 ">
                                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                {[...Array(5 - review.rating)].map((_, i) => <FaStar key={i} className="text-gray-400" />)}
                            </p>
                            <p className="text-[#1E293B] dark:text-[#E9E9E9] mt-2 font-poppins">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12">
                <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A] border-l-4 border-[#E76F51] dark:border-[#E9C46A] pl-4 mb-6">İlgili Ürünler</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {products
                        .filter((s) => s.id !== product.id)
                        .slice(0, 3)
                        .map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="bg-white dark:bg-[#1E293B] rounded-tl-3xl rounded-br-3xl shadow-xl cursor-pointer hover:scale-105 transition overflow-hidden flex flex-col h-full"
                                onClick={() => navigate(`/urunler/${relatedProduct.id}`)}
                            >
                                <img
                                    src={relatedProduct.imageUrl}
                                    alt={relatedProduct.title}
                                    className="w-full h-40 object-cover rounded-br-3xl rounded-tl-3xl"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold text-[#1E293B] dark:text-white">{relatedProduct.title}</h3>
                                    <p className="text-sm text-[#1E293B] dark:text-[#E9E9E9] mt-2 flex-grow">
                                        {relatedProduct.description.slice(0, 80)}...
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-6 py-3 bg-[#E76F51] dark:bg-[#E9C46A] text-white rounded-lg shadow-md transition hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] font-semibold">
                    <FaArrowLeft /> Geri Dön
                </button>
            </div>
        </section>
    );
};

export default ProductDetail;