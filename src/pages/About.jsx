import React from 'react';
import { useNavigate } from 'react-router-dom';
import malzeme from '../assets/hero2.png';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/iletisim");
    };

    return (
        <section id="about-detail">
            <div className="dark:bg-dark bg-slate-100 sm:min-h-[800px] sm:grid sm:place-items-center duration-300">
                <div data-aos="zoom-in" data-aos-once="true" className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        <div>
                            <div className="space-y-6 sm:p-16 pb-6">
                                <h1 className="text-3xl sm:text-4xl font-bold font-sans">
                                    Hakkımızda
                                </h1>
                                <p className="leading-8 tracking-wide font-poppins">
                                    Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. İstanbul tasarım şirketleri arasında 20 yılı aşkın deneyimiyle dijital ajans olarak hizmet vermektedir. Bu süre zarfında, birçok başarılı projeye imza atmış ve müşterilerinin dijital dünyada kendilerini güçlü bir şekilde temsil etmelerini sağlamıştır.
                                </p>
                                <p className="leading-8 tracking-wide font-poppins">
                                    Engin Tasarım, web tasarım, e-ticaret, dijital pazarlama ve yazılım alanlarında 20 yılı aşkın tecrübeyle hizmet vermektedir. Teknolojik gelişmeleri yakından takip ederek, müşterilerine her zaman en güncel ve etkili dijital çözümleri sunmaktadır.
                                </p>
                                <p className="leading-8 tracking-wide font-poppins">
                                    Her projede yenilikçi ve özgün yaklaşımlar benimseyerek, dijital dünyada güçlü ve uzun vadeli başarılar elde edilmesine katkı sağlamaktadır. Her aşamada kaliteli hizmet anlayışıyla çalışarak, müşteri memnuniyetini ön planda tutmaktadır.
                                </p>

                                <div className="space-y-5">
                                    <h2 className="text-2xl font-semibold text-black">
                                        Vizyon ve Misyon
                                    </h2>
                                    <p className="leading-8 tracking-wide font-poppins">
                                        Engin Tasarım, yüksek kaliteli web çözümleri ve dijital hizmetler sunarak küresel ölçekte müşterilerinin başarılarını artırmayı hedefler. Teknolojik inovasyonla birleşen deneyim, her projenin güçlü bir temel üzerine inşa edilmesini sağlar.
                                    </p>
                                    <p className="leading-8 tracking-wide font-poppins">
                                        Müşterilerine dijital alanda yenilikçi, etkili ve ölçeklenebilir çözümler sağlayarak, onların işlerini dijital dünyada dönüştürür ve büyütür. Engin Tasarım, her zaman müşteri odaklı yaklaşım sergileyerek, iş ortaklarının gelişimine katkı sağlar.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-black">
                                        Ekibimiz
                                    </h2>
                                    <p className="leading-8 tracking-wide font-poppins">
                                        Engin Tasarım, yazılım ve tasarım konularında uzmanlaşmış dinamik bir ekipten oluşur. Her proje, uzman ekibimiz tarafından titizlikle yönetilerek zamanında ve yüksek kalitede teslim edilir. Ekip üyelerimiz, her projede müşteri beklentilerini aşmak için birlikte çalışmaktadır.
                                    </p>
                                </div>

                                <button
                                    onClick={handleClick}
                                    className="bg-primary hover:bg-orange-600 text-white py-3 px-10 rounded-full text-lg font-semibold transition-all duration-500 shadow-lg"
                                >
                                    İletişime Geç
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src={malzeme}
                                alt="Company Image"
                                className="sm:scale-125 sm:-translate-x-11 max-h-[500px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mb-8 sm:mb-0 sm:-mt-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;