import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <>
            <span id="contact"></span>
            <div data-aos="zoom-in" className="py-8 dark:bg-black dark:text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                        <div className="bg-white dark:bg-black p-8 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white">Bize Ulaşın</h2>
                            <p className="text-black dark:text-white">
                                Sorularınız için bizimle iletişime geçin.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-white block mb-2 font-medium"
                                    >
                                        Adınız
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-black"
                                        required
                                        placeholder="Adınızı girin"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-white block mb-2 font-medium"
                                    >
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-md text-black border border-black focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        required
                                        placeholder="E-posta adresinizi girin"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="text-white block mb-2 font-medium"
                                    >
                                        Mesajınız
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-4 h-40 rounded-md text-black border border-black focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        required
                                        placeholder="Mesajınızı buraya yazın"
                                    >
                                    </textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-block font-semibold py-3 px-6 bg-primary text-white hover:bg-orange-600 duration-200 tracking-widest uppercase rounded-md shadow-lg"
                                    >
                                        Mesajı Gönder
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white dark:bg-black p-8 space-y-6">
                            <div className="mt-8 sm:mt-28 border-2 border-black">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.356060725158!2d28.797169999999994!3d40.9736835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba55f856610b%3A0x99aaacdd37715e26!2sEngin%20Tasar%C4%B1m!5e0!3m2!1str!2str!4v1740753164408!5m2!1str!2str"
                                    width="100%"
                                    height="350"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;