import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { RiWhatsappFill } from "react-icons/ri";
import { AboutSection } from "./pages/AboutSection";
import NavbarUp from "./components/Navbar/NavbarUp";
import { DrawCircleText } from "./pages/CTAPage";

const Hero = lazy(() => import("./pages/Hero"));
const Services = lazy(() => import("./pages/Services/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const AllServices = lazy(() => import("./pages/Services/AllServicesPage"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#f9f9f9] dark:bg-[#000003]">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg font-semibold text-[#10b981] dark:text-[#10b981] animate-pulse">
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

  useEffect(() => {
    import("./pages/Services/Services");
  }, []);

  return (
    <div className="bg-white dark:bg-[#1a1f1c] dark:text-white text-black overflow-x-hidden">
      <ScrollToTop />
      <NavbarUp />
      <Navbar />
      <div className="fixed top-0 left-0 right-0 h-1 bg-white dark:bg-black z-30">
        <div
          className="h-full bg-[#10b981]"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <AboutSection />
                <DrawCircleText />
                <Contact />
              </>
            }
          />
          <Route
            path="/hizmetler"
            element={
              <Suspense fallback={<Loading />}>
                <Services />
              </Suspense>
            }
          />
          <Route path="/hizmetlerimiz" element={<AllServices />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
      <a
        href="https://wa.me/905522312086?text=Merhaba%2C%20web%20siteniz%20üzerinden%20sizinle%20iletişime%20geçiyorum.%20Bilgi%20alabilir%20miyim%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 z-50 flex flex-col items-center space-y-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full"
      >
        <RiWhatsappFill size={25} />
      </a>
    </div>
  );
};

export default App;