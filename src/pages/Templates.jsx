import React from 'react';

const templates = [
    {
        id: 1,
        title: 'Portfolio Web Sitesi',
        description: 'Kişisel markanızı öne çıkaran modern ve sade tasarım.',
        imageUrl: '/images/portfolio-template.jpg',
    },
    {
        id: 2,
        title: 'Ajans Web Sitesi',
        description: 'Hizmetlerinizi profesyonelce sergileyen yaratıcı bir arayüz.',
        imageUrl: '/images/agency-template.jpg',
    },
    {
        id: 3,
        title: 'E-Ticaret Web Sitesi',
        description: 'Satış odaklı, kullanıcı dostu ve mobil uyumlu tasarım.',
        imageUrl: '/images/ecommerce-template.jpg',
    },
];

const Templates = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-12">Hazır Web Site Şablonları</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={template.imageUrl}
                            alt={template.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                            <p className="text-gray-600">{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Templates;