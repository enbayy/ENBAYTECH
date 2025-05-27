import React from 'react';
import 'aos/dist/aos.css';
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";

const templates = [
    {
        id: 1,
        title: 'Portföy Web Sitesi',
        description: 'Kendinizi tanıtmak, projelerinizi sergilemek ve dijital varlığınızı güçlendirmek için şık ve modern bir kişisel web sitesi.',
        imageUrl: t1
    },
    {
        id: 2,
        title: 'Ajans Web Sitesi',
        description: 'Dijital ajanslar, tasarım stüdyoları ve yaratıcı ekipler için hizmetlerinizi ve portföyünüzü etkileyici bir şekilde sunabileceğiniz profesyonel tasarım.',
        imageUrl: t2
    },
    {
        id: 3,
        title: 'Açılış Sayfası (Landing Page)',
        description: 'Tek ürün, hizmet ya da kampanya tanıtımı için yüksek dönüşüm sağlayan, sade ve etkili açılış sayfası tasarımı.',
        imageUrl: t3
    },
    {
        id: 4,
        title: 'E-Ticaret Web Sitesi',
        description: 'Ürünlerinizi çevrim içi olarak sergileyip satış yapabileceğiniz, kullanıcı dostu ve mobil uyumlu bir e-ticaret çözümü.',
        imageUrl: t4
    },
    {
        id: 5,
        title: 'Blog Web Sitesi',
        description: 'Yazılarınızı paylaşabileceğiniz, sade ve okunabilirliği yüksek bir blog arayüzü.',
        imageUrl: t5
    },
    {
        id: 6,
        title: 'Kurumsal Web Sitesi',
        description: 'Yazılarınızı paylaşabileceğiniz, sade ve okunabilirliği yüksek bir blog arayüzü.',
        imageUrl: t6
    },
];

const Templates = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-12 font-inter">ÇALIŞMALARIMIZ</h2>
            <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="bg-white rounded-2xl overflow-hidden duration-300 flex flex-col aspect-[9/16] w-full max-w-sm mx-auto"
                        data-aos="flip-left"
                    >
                        <img
                            src={template.imageUrl}
                            alt={template.title}
                            className="w-full h-2/3 object-contain"
                        />
                        <div className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold mb-2 font-inter">{template.title}</h3>
                            <p className="text-gray-600 text-sm font-poppins">{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Templates;