import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarUp from "./components/Navbar/NavbarUp";
import Templates from "./pages/Templates";
import ParallaxSection from "./components/Parallax/parallax";

const Hero = lazy(() => import("./pages/Hero"));
const Services = lazy(() => import("./pages/Services/Services"));
const About = lazy(() => import("./pages/AboutPage/About.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const AllServices = lazy(() =>
  import("./pages/Services/AllServicesPage")
);

// Sayfa değişince en üste çıkar
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading ekranı
const Loading = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f9f9f9] dark:bg-black">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-[#FF7F00] border-t-transparent rounded-full animate-spin"></div>

      <p className="text-lg font-semibold text-[#FF7F00] animate-pulse">
        Yükleniyor...
      </p>
    </div>
  </div>
);

const App = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Scroll yüzdesi
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollPercentage(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        text-black
        dark:bg-black
        dark:text-white
        transition-colors
        duration-300
      "
    >
      <ScrollToTop />

      <NavbarUp />
      <Navbar />

      {/* Scroll Progress Bar */}
      <div
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          h-1
          bg-white
          dark:bg-black
        "
      >
        <div
          className="h-full bg-[#FF7F00] transition-[width] duration-100"
          style={{
            width: `${scrollPercentage}%`,
          }}
        />
      </div>

      {/* Sayfalar */}
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Ana Sayfa */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Templates />
                <Services />
                <ParallaxSection />
                <Contact />
              </>
            }
          />

          {/* Hizmetler */}
          <Route path="/hizmetler" element={<Services />} />

          {/* Tüm Hizmetler */}
          <Route
            path="/hizmetlerimiz"
            element={<AllServices />}
          />

          {/* Hakkımızda */}
          <Route
            path="/hakkimizda"
            element={<About />}
          />

          {/* İletişim */}
          <Route
            path="/iletisim"
            element={<Contact />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;