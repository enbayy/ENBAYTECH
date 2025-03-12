import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/iletisim");
    };

    return (
        <section id="about-detail" className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-[#E76F51] dark:text-[#E9C46A]">
                        Hakkımızda
                    </h1>
                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Engin Tasarım, İstanbul'da 20 yılı aşkın süredir faaliyet gösteren, yenilikçi çözümler sunan bir dijital ajanstır. Web tasarım, e-ticaret, yazılım çözümleri ve dijital pazarlama alanlarında öncü bir marka olarak, müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz. Modern teknolojiye dayalı çözümler geliştirerek markaların dijital dünyada güçlü bir konum elde etmesini sağlıyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A]">Misyonumuz</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Müşterilerimizin işlerini büyütmelerine yardımcı olmak için yenilikçi, kullanıcı dostu ve yüksek kaliteli dijital çözümler sunuyoruz. Teknolojinin gücünü kullanarak işletmelerin daha geniş kitlelere ulaşmasını ve rekabet avantajı elde etmesini sağlıyoruz.
                        </p>
                        <h2 className="text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A]">Vizyonumuz</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Teknoloji ve tasarımın mükemmel uyumunu yakalayarak, en yaratıcı ve yenilikçi çözümleri üretmek, sektörde fark yaratan projelere imza atmak ve müşterilerimize dijital dünyada en iyi deneyimi sunmak.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 1</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 2</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 3</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 4</div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-4xl font-bold text-[#E76F51] dark:text-[#E9C46A]">Ekibimiz</h2>
                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Engin Tasarım, farklı alanlarda uzmanlaşmış deneyimli bir ekipten oluşmaktadır. Yazılım mühendisleri, grafik tasarımcılar, dijital pazarlama uzmanları ve içerik üreticilerimiz, her projeye özel, yenilikçi çözümler sunarak markaların dijital dünyada başarılı olmasını sağlamaktadır.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 mt-12">
                        <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 1</div>
                        <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 2</div>
                        <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center">Resim 3</div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={handleClick}
                        className="bg-[#E76F51] dark:bg-[#E9C46A] hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] text-white px-9 py-4 rounded-tl-3xl rounded-br-3xl text-lg font-semibold transition-all duration-500 shadow-xl hover:opacity-90"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;