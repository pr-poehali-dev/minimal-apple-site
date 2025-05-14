
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Компонент навигации с эффектом прозрачности при скролле
 */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Отслеживаем скролл для изменения стиля навигации
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">BetonLux</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-500 transition-colors">Главная</a>
          <a href="#products" className="hover:text-gray-500 transition-colors">Столешницы</a>
          <a href="#about" className="hover:text-gray-500 transition-colors">О нас</a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">Контакты</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
