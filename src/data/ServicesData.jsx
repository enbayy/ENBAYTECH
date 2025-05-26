import {
    Code,
    PenTool,
    Server,
    LayoutDashboard,
    TrendingUp,
    RefreshCcw,
    Users,
    Megaphone,
    ShoppingCart,
    Github,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Web Tasarımı",
        name: "Profesyonel Web Tasarımı",
        description:
            "Modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive, hızlı ve SEO uyumlu çözümlerle işletmenizi dijitalde öne çıkarıyoruz.",
        icon: <Code className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 2,
        title: "Logo Tasarımı",
        name: "Özgün Logo Tasarımı",
        description:
            "Markanıza özel, akılda kalıcı ve yaratıcı logo tasarımları sunuyoruz. Kurumsal kimliğinizi güçlendirecek tasarımlar için buradayız.",
        icon: <PenTool className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 3,
        title: "Hosting & Domain Hizmetleri",
        name: "Güvenilir Hosting ve Domain",
        description:
            "Web siteleriniz için hızlı ve güvenilir hosting çözümleri ile alan adı yönetimini sağlıyoruz.",
        icon: <Server className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 4,
        title: "UX/UI Tasarım",
        name: "Kullanıcı Deneyimi & Arayüz Tasarımı",
        description:
            "Dijital projeleriniz için kullanıcı dostu, estetik ve işlevsel arayüzler tasarlıyoruz.",
        icon: <LayoutDashboard className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 5,
        title: "SEO Çalışması",
        name: "Etkili SEO Hizmetleri",
        description:
            "Arama motorlarında üst sıralara çıkmanız için kapsamlı SEO analizleri ve optimizasyonları yapıyoruz. Organik trafik ve görünürlüğünüzü artırıyoruz.",
        icon: <TrendingUp className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 6,
        title: "Web Sitesi Bakım ve Güncelleme",
        name: "Sürekli Destek ve Güncellemeler",
        description:
            "Web sitenizin güvenliğini, hızını ve güncelliğini sağlamak için düzenli bakım hizmetleri sunuyoruz.",
        icon: <RefreshCcw className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 7,
        title: "Sosyal Medya Yönetimi",
        name: "Sosyal Medya Stratejileri",
        description:
            "Sosyal medya platformlarında markanızın görünürlüğünü artırıyor, etkili kampanyalar ve içeriklerle hedef kitlenize ulaşıyoruz.",
        icon: <Users className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 8,
        title: "Dijital Reklamcılık",
        name: "Google & Sosyal Medya Reklamları",
        description:
            "Google Ads, Facebook ve Instagram reklamları ile hedef kitlenize hızlı ve etkili şekilde ulaşmanızı sağlıyoruz.",
        icon: <Megaphone className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 9,
        title: "E-Ticaret Çözümleri",
        name: "Özel E-Ticaret Siteleri",
        description:
            "Satışlarınızı artırmak için güvenli, hızlı ve ölçeklenebilir e-ticaret platformları kuruyoruz.",
        icon: <ShoppingCart className="w-8 h-8 text-[#10b981]" />,
    },
    {
        id: 10,
        title: "Marka ve Kurumsal Kimlik",
        name: "Kurumsal Kimlik Tasarımı",
        description:
            "Kartvizit, broşür, antetli kağıt ve diğer kurumsal materyallerle markanızın bütünlüğünü güçlendiriyoruz.",
        icon: <Github className="w-8 h-8 text-[#10b981]" />,
    },
];