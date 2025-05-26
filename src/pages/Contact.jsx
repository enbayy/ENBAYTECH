import React from "react";

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section
            id="contact"
            className="container bg-[#fff7ed] dark:bg-[#7c2d12] py-12 text-color1"
        >
            <div data-aos="zoom-in" className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[#7c2d12] dark:text-[#ffedd5] text-4xl font-semibold text-color1 font-inter">
                        İLETİŞİME GEÇ
                    </h2>
                    <p className="text-[#7c2d12] dark:text-[#ffedd5] mt-3 font-poppins text-sm">
                        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[#7c2d12] dark:text-[#ffedd5] block mb-2 text-color2 font-medium font-poppins">
                                Adınız
                            </label>
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="w-full px-4 py-3 bg-[#fff7ed] dark:bg-[#7c2d12] text-[#7c2d12] dark:text-[#ffedd5] rounded-lg outline-none focus:ring-2 focus:ring-[#f97316]"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-[#7c2d12] dark:text-[#ffedd5] block mb-2 text-color2 font-medium font-poppins">
                                E-posta
                            </label>
                            <input
                                type="email"
                                placeholder="ornek@gmail.com"
                                className="w-full px-4 py-3 bg-[#fff7ed] dark:bg-[#7c2d12] text-[#7c2d12] dark:text-[#ffedd5] rounded-lg outline-none focus:ring-2 focus:ring-[#f97316]"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[#7c2d12] dark:text-[#ffedd5] block mb-2 text-color2 font-medium font-poppins">
                            Konu
                        </label>
                        <input
                            type="text"
                            placeholder="Konu başlığı"
                            className="w-full px-4 py-3 bg-[#fff7ed] dark:bg-[#7c2d12] text-[#7c2d12] dark:text-[#ffedd5] rounded-lg outline-none focus:ring-2 focus:ring-[#f97316]"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[#7c2d12] dark:text-[#ffedd5] block mb-2 text-color2 font-medium font-poppins">
                            Mesajınız
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                            className="w-full px-4 py-3 bg-[#fff7ed] dark:bg-[#7c2d12] text-[#7c2d12] dark:text-[#ffedd5] rounded-lg outline-none focus:ring-2 focus:ring-[#f97316]"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-[#7c2d12] dark:text-[#ffedd5] w-[120px] h-[40px] border-2 border-[#f97316] hover:border-4 rounded-full hover:bg-[#f97316] transition duration-300 font-inter"
                        >
                            Gönder
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
