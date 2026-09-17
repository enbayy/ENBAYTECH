import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_0et0z18",
                "template_aq1ig3s",
                form.current,
                {
                    publicKey: "jb5JnAoaIUFNs0sVR",
                }
            )
            .then(() => {
                toast.success(
                    <p className="font-inter text-sm">
                        Mesajınız başarıyla gönderildi!
                    </p>
                );
                form.current.reset();
            })
            .catch((error) => {
                toast.error(
                    <p className="font-inter text-sm">
                        Mesaj gönderilemedi. Lütfen tekrar deneyin.
                    </p>
                );
                console.log("FAILED...", error.text);
            });
    };

    const openWhatsApp = () => {
        const phoneNumber = "905522312086";
        const message = "Merhaba, bilgi almak istiyorum.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            id="contact"
            className="container bg-white dark:bg-[#000000] py-16 text-color1"
        >
            <div data-aos="zoom-in" className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[#0f172a] dark:text-[#e0f2f1] text-4xl font-semibold font-inter">
                        İLETİŞİME GEÇ
                    </h2>

                    <p className="text-[#0f172a] dark:text-[#e0f2f1] mt-3 font-poppins text-sm">
                        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 font-medium font-poppins">
                                Adınız
                            </label>

                            <input
                                name="user_name"
                                type="text"
                                placeholder="Ad Soyad"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#FF7F00] font-inter"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 font-medium font-poppins">
                                E-posta
                            </label>

                            <input
                                name="user_email"
                                type="email"
                                placeholder="ornek@gmail.com"
                                className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#FF7F00] font-inter"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 font-medium font-poppins">
                            Konu
                        </label>

                        <input
                            name="subject"
                            type="text"
                            placeholder="Konu başlığı"
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#FF7F00] font-inter"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[#0f172a] dark:text-[#e0f2f1] block mb-2 font-medium font-poppins">
                            Mesajınız
                        </label>

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                            className="w-full px-4 py-3 bg-color4 text-color1 rounded-lg outline-none border-2 focus:ring-2 focus:ring-[#FF7F00] font-inter"
                            required
                        ></textarea>
                    </div>

                    {/* Butonlar */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* Gönder - Pasif */}
                        <button
                            type="button"
                            disabled
                            className="inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-[#0f172a] dark:border-[#e0f2f1] rounded-full font-semibold text-[#0f172a] dark:text-[#e0f2f1] opacity-50 cursor-not-allowed text-sm sm:text-base font-inter"
                        >
                            Gönder
                        </button>

                        {/* WhatsApp */}
                        <button
                            type="button"
                            onClick={openWhatsApp}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold bg-[#1FBD5B] text-white hover:bg-[#169447] transition duration-300 ease-in-out text-sm sm:text-base font-inter"
                        >
                            <FaWhatsapp className="text-xl sm:text-2xl" />
                            Bize Ulaşın
                        </button>

                    </div>
                </form>
            </div>

            <ToastContainer />
        </section>
    );
};

export default ContactSection;