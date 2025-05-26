import React from "react";

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section
            id="contact"
            className="bg-[#f9f9f9] text-color1 py-16 px-4 sm:px-8 lg:px-16"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-color1">İletişime Geçin</h2>
                    <p className="text-color3 mt-3">
                        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-color2 font-medium">
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
                            <label className="block mb-2 text-color2 font-medium">
                                E-posta
                            </label>
                            <input
                                type="email"
                                placeholder="ornek@site.com"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none focus:ring-2 focus:ring-color2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-color2 font-medium">
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
                        <label className="block mb-2 text-color2 font-medium">
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
                            className="px-8 py-3 bg-color2 text-color5 rounded-lg hover:bg-color1 transition duration-300"
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