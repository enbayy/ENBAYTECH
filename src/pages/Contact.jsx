import React from "react";

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section
            id="contact"
            className="container bg-white dark:bg-[#1a1f1c] py-16 text-color1"
        >
            <div data-aos="zoom-in" className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[#0f172a] dark:text-[#e0f2f1] text-4xl font-semibold text-color1 font-inter">İLETİŞİME GEÇ</h2>
                    <p className="text-[#0f172a] dark:text-[#e0f2f1] mt-3 font-poppins text-sm">
                        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 text-color2 font-medium font-poppins">
                                Adınız
                            </label>
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#10b981]"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 text-color2 font-medium font-poppins">
                                E-posta
                            </label>
                            <input
                                type="email"
                                placeholder="ornek@gmail.com"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#10b981]"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 text-color2 font-medium font-poppins">
                            Konu
                        </label>
                        <input
                            type="text"
                            placeholder="Konu başlığı"
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#10b981]"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 text-color2 font-medium font-poppins">
                            Mesajınız
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#10b981]"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#0f172a] dark:border-[#e0f2f1] rounded-full font-semibold text-[#0f172a] dark:text-[#e0f2f1] hover:bg-[#10b981] hover:text-white dark:hover:bg-[#10b981] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter"
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