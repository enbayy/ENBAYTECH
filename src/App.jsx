import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CtaPage from "./pages/CtaPage";

const Hero = lazy(() => import("./pages/Hero"));
const References = lazy(() => import("./pages/References/References"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const BlogsComp = lazy(() => import("./pages/Blogs/BlogsComp"));
const Services = lazy(() => import("./pages/Services/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductPage = lazy(() => import("./pages/Products/ProductsPage"));
const BlogDetail = lazy(() => import("./pages/Blogs/BlogDetail"));
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));
const ProductDetail = lazy(() => import("./pages/Products/ProductsDetail"));
const AllServices = lazy(() => import("./pages/Services/AllServicesPage"));
const AllReferencesPage = lazy(() => import("./pages/References/AllReferencesPage"));
const ReferencesDetailPage = lazy(() => import("./pages/References/ReferenceDetail"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
        Yükleniyor...
      </p>
    </div>
  </div>
);

const App = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <div className="fixed top-0 left-0 right-0 h-1 bg-white z-30">
        <div
          className="h-full bg-primary"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<><Hero /><References /><Services /><ProductPage /><Testimonial /><BlogsComp /><CtaPage /></>} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/hizmetler/:id" element={<ServiceDetail />} />
          <Route path="/hizmetlerimiz" element={<AllServices />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/urunler" element={<ProductPage />} />
          <Route path="/urunler/:id" element={<ProductDetail />} />
          <Route path="/referanslar" element={<AllReferencesPage />} />
          <Route path="/referanslar/:id" element={<ReferencesDetailPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Suspense>

      <Footer />

      <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center space-y-2">
        <button
          onClick={() => setShowSocialIcons(!showSocialIcons)}
          className="bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-lg transition-transform"
        >
          {showSocialIcons ? <IoIosArrowForward size={25} /> : <IoIosArrowBack size={25} />}
        </button>
        <div
          className={`flex flex-col space-y-2 transition-all duration-500 ${showSocialIcons ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"
            }`}
        >
          <a href="https://wa.me/905522312086" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-primary"><RiWhatsappFill size={25} />
          </a>
          <a href="https://www.instagram.com/engin_tasarim/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-primary"><FaInstagram size={25} />
          </a>
          <a href="https://www.linkedin.com/company/engintasarim/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-primary"><FaLinkedin size={25} />
          </a>
          <a href="https://x.com/engintasarim" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-primary"><FaSquareXTwitter size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;