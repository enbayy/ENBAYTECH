import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/iletisim")
    }
    return (
        <div data-aos="fade-up" className="w-full bg-white dark:bg-black py-24 relative overflow-hidden text-black dark:text-white">
            <div className="container mx-auto text-center px-6 sm:px-10 md:px-20 lg:px-40">
                <p className="text-4xl sm:text-5xl font-bold mb-6 relative">
                    Hakkımızda
                </p>
                <p className="text-lg sm:text-xl leading-relaxed">
                    Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. İstanbul tasarım şirketleri arasında 20 yılı aşkın deneyimiyle dijital ajans olarak hizmet vermektedir.
                </p>
            </div>

            <div className="container mx-auto px-6 lg:px-20 mt-12">
                <div className="space-y-8 text-lg leading-relaxed">
                    <p>Engin Tasarım, web tasarım, e-ticaret, dijital pazarlama ve yazılım alanlarında 20 yılı aşkın tecrübeyle hizmet vermektedir.</p>
                    <p>Türkiye, Amerika, Belçika, Almanya, Hollanda ve Avusturya gibi birçok ülkede özel çözümler sunmaktadır.</p>
                    <p>Yüksek kaliteli butik çözümler sunarak, müşterilerinin markalaşma ve ihracat süreçlerine katkıda bulunmaktadır.</p>
                </div>
            </div>

            <div className="mt-12 container mx-auto px-6 lg:px-20">
                <h3 className="text-2xl font-semibold text-[#FF8C00] text-center mb-4">Engin Tasarım Neler Yapar?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                    {["Anahtar teslim projeler", "Tasarım & Yazılım", "Mobil Uygulama", "Kreatif Hizmetler", "Dijital Ajans Hizmetleri"].map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center gap-2 bg-black dark:bg-gray-100 text-white dark:text-black p-4 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <FaCheckCircle className="text-[#FF8C00]" /> {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6 mt-12 px-6 lg:px-20 container mx-auto">
                <h3 className="text-2xl font-semibold text-[#FF8C00]">Nasıl Başlıyoruz ve Nasıl İlerliyoruz?</h3>
                <p>Öncelikle sizi anlamak ve dinlemekle başlamayı tercih ediyoruz. Sizi iyi anlamak, ihtiyaçlarınızı belirlemek, hangi hizmetin sizin için daha uygun olabileceğine karar vermek için sizinle yapacağımız ilk görüşmede mevcut durumunuzu ve hedeflerinizi anlamaya çalışıyoruz.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Ar-Ge</h3>
                <p>Araştırma ve geliştirme gerektiren bir çözüm sunmamız gerekecekse öncelikle mevcut bir örnek üzerinden size somut bir çözüm sunarak çalışmalarımıza başlamak isteriz.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Önce Beğeni ve Onay</h3>
                <p>Sunulan örnek çalışmalar ve modeller üzerinden projenin gereksinimleri tam olarak karşılanana kadar geliştirme hizmetlerimiz devam eder.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Çalışma Takviminin Belirlenmesi</h3>
                <p>Çalışmalarımızı belirli bir takvime bağlı kalarak sürdürmeye gayret ediyoruz. Aynı anda birçok firmanın projesi üzerinde çalışmalarımız sürebilmekte. Herkesin işine verilmesi gereken azami özeni ve önemi vererek zamanında teslim edebilmek için çalışma takviminin belirlenmesi üzerinde hassasiyetle durmaktayız.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-8">Vizyon</h3>
                <p>Engin Tasarım, yüksek kaliteli web çözümleri ve dijital hizmetler sunarak küresel ölçekte müşterilerinin başarılarını artırmayı hedefler.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Misyon</h3>
                <p>Müşterilerine dijital alanda yenilikçi, etkili ve ölçeklenebilir çözümler sağlayarak, onların işlerini dijital dünyada dönüştürür ve büyütür.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Değerler</h3>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Mükemmeliyet ve kalite odaklılık</li>
                    <li>Sürekli yenilik ve gelişim</li>
                    <li>Müşteri memnuniyeti ve güven</li>
                    <li>Takım çalışması ve işbirliği</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Ekip Tanıtımları</h3>
                <p>Engin Tasarım, yazılım ve tasarım konularında uzmanlaşmış dinamik bir ekipten oluşur. Her proje, uzman ekibimiz tarafından titizlikle yönetilerek zamanında ve yüksek kalitede teslim edilir.</p>

                <h3 className="text-2xl font-semibold text-[#FF8C00] mt-6">Şirket Kültürü</h3>
                <p>Yaratıcılığı teşvik eden, açık iletişim ve sürekli gelişimi destekleyen bir çalışma ortamı yaratmayı amaçlıyoruz.</p>
            </div>
            <div className="mt-12 mb-12 relative w-3/4 mx-auto">
                <iframe
                    className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/wcsFv3oVQ3Q"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={handleClick}
                    className="bg-[#FF8C00] text-black py-3 px-10 rounded-full text-lg font-semibold hover:bg-[#FF9A30] hover:text-white transition-all duration-500 shadow-lg transform hover:scale-105"
                >
                    İletişime Geç
                </button>
            </div>
        </div>

    );
};

export default About;