import pixmart from '../assets/pixmartReady.jpg';
import encrm from '../assets/crm.jpg';
import b2b from '../assets/ai.jpg';

export const products = [
    {
        id: 1,
        title: "Pixmart Ready",
        description: "Pixmart Ready, estetik açıdan modern ve fonksiyonel bir tasarıma sahip, yüksek performanslı bir cihazdır. Kullanıcı dostu arayüzü ile her yaştan kullanıcıya hitap eder.",
        imageUrl: pixmart,
        price: "4,999 ₺",
        technicalSpecs: [
            "Ekran: 15.6\" 4K LCD",
            "İşlemci: Intel i7 11. Nesil",
            "RAM: 16 GB",
            "Depolama: 512 GB SSD",
            "Bağlantı: Wi-Fi 6, Bluetooth 5.0",
        ],
        userReviews: [
            {
                reviewer: "Ali V.",
                rating: 5,
                review: "Harika bir cihaz! Hem şık hem de çok güçlü, özellikle ofiste çok verimli kullanıyorum."
            },
            {
                reviewer: "Zeynep S.",
                rating: 4,
                review: "Görsel tasarımı çok hoş, ancak pil ömrü biraz daha uzun olabilir."
            }
        ],
        sections: [
            {
                heading: "Ürün Detayları",
                content: "Pixmart Ready, estetik açıdan modern ve fonksiyonel bir tasarıma sahip, yüksek performanslı bir cihazdır. Kullanıcı dostu arayüzü ile her yaştan kullanıcıya hitap eder.",
            },
            {
                heading: "Görseller",
                content: "Pixmart Ready, şık ve modern bir tasarıma sahiptir. Görselleri, cihazın zarif ve dayanıklı yapısını yansıtarak estetik açıdan mükemmel bir deneyim sunar.",
            },
            {
                heading: "Kullanım Senaryoları",
                content: "Pixmart Ready, ofislerde, evde ve ticari alanlarda kullanım için ideal bir çözümdür. E-ticaret siteleri için yüksek hızda veri işleme ve görsel düzenleme gereksinimlerini karşılar.",
            },
            {
                heading: "Demo Talebi",
                content: "Pixmart Ready ile ilgili bir demo talep etmek için bizimle iletişime geçin. Deneyimleyin ve nasıl yüksek verimlilik sağlayacağını görün.",
            },
        ],
    },
    {
        id: 2,
        title: "EnCRM",
        description: "EnCRM, müşteri ilişkilerini etkin bir şekilde yönetmenizi sağlayan bir yazılımdır. Hızlı veri analizi ve entegrasyonu ile işletmenizin müşteri ilişkilerini en üst seviyeye çıkarır.",
        imageUrl: encrm,
        price: "2,499 ₺/ay",
        technicalSpecs: [
            "Veritabanı: MySQL",
            "Sunucu: AWS Cloud",
            "API: RESTful API",
            "Entegrasyonlar: Gmail, Microsoft Outlook, Slack",
            "Destek: 7/24 canlı destek",
        ],
        userReviews: [
            {
                reviewer: "Emre K.",
                rating: 5,
                review: "Çok hızlı ve kullanımı kolay. Müşteri verilerini yönetmek artık çok daha pratik."
            },
            {
                reviewer: "Meryem T.",
                rating: 4,
                review: "Başarılı bir yazılım, fakat bazı küçük hata düzeltmeleri yapılmalı."
            }
        ],
        sections: [
            {
                heading: "Ürün Detayları",
                content: "EnCRM, müşteri ilişkilerini etkin bir şekilde yönetmenizi sağlayan bir yazılımdır. Hızlı veri analizi ve entegrasyonu ile işletmenizin müşteri ilişkilerini en üst seviyeye çıkarır.",
            },
            {
                heading: "Görseller",
                content: "EnCRM, kullanıcı dostu arayüzü ve görsel olarak çekici dashboard'ları ile kolay kullanım sağlar. Tasarımı, verilerin net bir şekilde görselleştirilmesini sağlar.",
            },
            {
                heading: "Kullanım Senaryoları",
                content: "EnCRM, küçük işletmelerden büyük firmalara kadar her büyüklükteki şirket için uygundur. Müşteri bilgileri, satış takibi ve pazarlama verileri yönetimi gibi birçok alanda kullanılır.",
            },
            {
                heading: "Demo Talebi",
                content: "EnCRM hakkında daha fazla bilgi almak ve sistemin nasıl çalıştığını görmek için demo talebinde bulunun.",
            },
        ],
    },
    {
        id: 3,
        title: "B2B E-Ticaret",
        description: "B2B E-Ticaret, toptan satışlar için özel olarak tasarlanmış, güçlü ve güvenli bir platformdur. Entegre ödeme sistemleri, müşteri yönetim araçları ve sipariş takibi gibi bir dizi özellik sunar.",
        imageUrl: b2b,
        price: "5,499 ₺/yıl",
        technicalSpecs: [
            "Sunucu: Google Cloud",
            "Veritabanı: PostgreSQL",
            "Ödeme Sistemleri: Stripe, PayPal, Banka Transferi",
            "Entegrasyonlar: SAP, Oracle, ERP Sistemleri",
            "Destek: 24/7 e-posta desteği",
        ],
        userReviews: [
            {
                reviewer: "Fatma P.",
                rating: 5,
                review: "B2B E-Ticaret platformu mükemmel. Ürünleri hızlıca yönetebiliyorum ve sipariş takibi çok kolay."
            },
            {
                reviewer: "Ahmet Y.",
                rating: 4,
                review: "Platform çok güçlü fakat bazı ödeme sistemlerinde küçük gecikmeler yaşanabiliyor."
            }
        ],
        sections: [
            {
                heading: "Ürün Detayları",
                content: "B2B E-Ticaret, toptan satışlar için özel olarak tasarlanmış, güçlü ve güvenli bir platformdur. Entegre ödeme sistemleri, müşteri yönetim araçları ve sipariş takibi gibi bir dizi özellik sunar.",
            },
            {
                heading: "Görseller",
                content: "B2B E-Ticaret, kullanıcıların ürünlerini hızlıca bulmalarını sağlayan modern ve şık bir tasarıma sahiptir. Web sitesi arayüzü, kullanıcıların rahatça gezinebilmesi için optimize edilmiştir.",
            },
            {
                heading: "Kullanım Senaryoları",
                content: "B2B E-Ticaret, toptan satış yapan firmalar, büyük tedarikçiler ve ürün satıcıları için ideal bir platformdur. Ürün kataloğu yönetimi, sipariş takibi ve toplu ödeme seçenekleri gibi özellikler sunar.",
            },
            {
                heading: "Demo Talebi",
                content: "B2B E-Ticaret platformunun nasıl çalıştığını görmek ve kullanmaya başlamak için demo talebinde bulunun. Sizin için en iyi çözümü sunalım.",
            },
        ],
    },
];