import { Suspense, lazy } from "react";
import Navigation from "@/components/layout/Navigation";

// Ленивая загрузка компонентов секций для лучшей производительности
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProductsSection = lazy(
  () => import("@/components/sections/ProductsSection"),
);
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection"),
);
const Footer = lazy(() => import("@/components/layout/Footer"));

/**
 * Главная страница сайта
 */
const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />

      <Suspense fallback={<div className="h-screen bg-gray-100" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-white" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-[#F5F5F7]" />}>
        <ProductsSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-black" />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-[#F5F5F7]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
