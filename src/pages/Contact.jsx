import React from "react";

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section
            id="contact"
            className="bg-[#f9f9f9] dark:bg-[#000003] py-12 text-color1"
        >
            <div data-aos="zoom-in" className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[#392f2f] dark:text-[#d4cfce] text-4xl font-semibold text-color1 font-inter">İLETİŞİME GEÇ</h2>
                    <p className="text-[#392f2f] dark:text-[#d4cfce] mt-3 font-poppins text-sm">
                        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[#392f2f] dark:text-[#d4cfce] block mb-2 text-color2 font-medium font-poppins">
                                Adınız
                            </label>
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none focus:ring-2 focus:ring-color2"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-[#392f2f] dark:text-[#d4cfce] block mb-2 text-color2 font-medium font-poppins">
                                E-posta
                            </label>
                            <input
                                type="email"
                                placeholder="ornek@gmail.com"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none focus:ring-2 focus:ring-color2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[#392f2f] dark:text-[#d4cfce] block mb-2 text-color2 font-medium font-poppins">
                            Konu
                        </label>
                        <input
                            type="text"
                            placeholder="Konu başlığı"
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none focus:ring-2 focus:ring-color2"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[#392f2f] dark:text-[#d4cfce] block mb-2 text-color2 font-medium font-poppins">
                            Mesajınız
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none focus:ring-2 focus:ring-color2"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-[#392f2f] dark:text-[#d4cfce] w-[120px] h-[40px] border-2 hover:border-4 rounded-2xl hover:bg-color1 transition duration-300 font-inter"
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