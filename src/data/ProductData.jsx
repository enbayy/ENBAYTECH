import pixmart from '../assets/pixmartReady.png';
import encrm from '../assets/crm2.png';
import b2b from '../assets/b2b.png';

export const products = [
    {
        id: 1,
        title: "Pixmart Ready",
        description: "Pixmart Ready, estetik açıdan modern ve fonksiyonel bir tasarıma sahip, yüksek performanslı bir cihazdır. Gelişmiş donanımı sayesinde hem profesyonel hem de günlük kullanım için mükemmel bir çözüm sunar. 4K çözünürlüklü geniş ekranı, keskin görüntüler ve zengin renklerle üst düzey bir deneyim sağlar. Güçlü işlemcisi ve yüksek hızlı SSD depolama birimi ile çoklu görevleri rahatça yerine getirir. Kullanıcı dostu arayüzü sayesinde herkes için kolay kullanım imkanı sunan Pixmart Ready, dayanıklı yapısı ve şık tasarımıyla ofis ve ev ortamlarında vazgeçilmez bir teknolojik araçtır.",
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
        description: "EnCRM, işletmelerin müşteri ilişkilerini en verimli şekilde yönetmesini sağlayan akıllı bir yazılımdır. Müşteri bilgilerini düzenli ve güvenli bir şekilde saklarken, gelişmiş analiz araçlarıyla detaylı raporlama ve stratejik planlama imkanı sunar. Otomatikleştirilmiş süreçler sayesinde müşteri taleplerine hızlı yanıt vermeyi kolaylaştırır ve iş akışlarını optimize eder. EnCRM, farklı sektörlerdeki firmaların satışlarını ve müşteri memnuniyetini artırmalarına yardımcı olmak için tasarlanmıştır. Kolay entegrasyon seçenekleri sayesinde mevcut iş süreçlerine hızla adapte edilebilir.",
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
        description: "B2B E-Ticaret, büyük ölçekli işletmeler ve toptan satış yapan firmalar için geliştirilmiş güvenilir bir ticaret platformudur. Gelişmiş sipariş yönetimi, kullanıcı dostu envanter takibi ve entegre ödeme sistemleri sayesinde iş süreçlerini hızlandırır. Platform, alıcılar ve satıcılar arasındaki iletişimi kolaylaştırarak ticaret deneyimini daha verimli hale getirir. SAP, Oracle ve ERP sistemleri ile sorunsuz entegrasyon sağlayarak, iş süreçlerini otomatize eder. Güçlü güvenlik önlemleri ve yedekleme çözümleri ile verilerinizi her zaman güvende tutar. B2B E-Ticaret, dijital dünyada rekabetçi kalmak isteyen işletmeler için vazgeçilmez bir çözümdür.",
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