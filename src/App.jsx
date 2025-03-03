import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import References from "./pages/References/References";
import Testimonial from "./pages/Testimonial";
import BlogsComp from "./pages/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductPage from "./pages/Products/ProductsPage";
import BlogDetail from "./pages/Blogs/BlogDetail";
import ServiceDetail from "./pages/Services/ServiceDetail";
import ProductDetail from "./pages/Products/ProductsDetail";
import AllServices from "./pages/Services/AllServicesPage";
import AllReferencesPage from "./pages/References/AllReferencesPage";
import ReferencesDetailPage from "./pages/References/ReferenceDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <References />
              <Services />
              <ProductPage />
              <Testimonial />
              <BlogsComp />
            </>
          }
        />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:id" element={<ServiceDetail />} />
        <Route path="/hizmetlerimiz" element={<AllServices />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/urunler" element={<ProductPage />} />
        <Route path="/urunler/:id" element={<ProductDetail />} />
        <Route path="/referanslar" element={<AllReferencesPage />} />
        <Route path="/referanslar/:id" element={<ReferencesDetailPage />} />
        <Route path="/" element={<BlogsComp />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;