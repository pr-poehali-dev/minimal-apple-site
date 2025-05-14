
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

// Компонент для анимированного появления
const AnimatedText = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

// Компонент для навигации
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

// Компонент для карточки продукта
const ProductCard = ({ image, title, price, description }) => (
  <motion.div 
    className="flex flex-col"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-[#F5F5F7] rounded-2xl overflow-hidden aspect-video mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-500 mb-2">{description}</p>
    <p className="text-xl font-semibold">{price} ₽</p>
  </motion.div>
);

// Компонент для секции "особенности"
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-4">
      <Icon name={icon} size={32} />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
            alt="Бетонная столешница" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <AnimatedText delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Столешницы из цветного бетона</h1>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Изысканный дизайн и непревзойденная прочность для вашего интерьера
            </p>
          </AnimatedText>
          <AnimatedText delay={0.6}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
                Смотреть каталог
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
      
      {/* Особенности */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Почему бетонные столешницы?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureItem 
              icon="Shield" 
              title="Высокая прочность" 
              description="Наши столешницы изготовлены из специального бетона, который превосходит по прочности многие аналоги."
            />
            <FeatureItem 
              icon="Palette" 
              title="Индивидуальный дизайн" 
              description="Широкий выбор цветов и фактур позволяет создать уникальную столешницу под ваш интерьер."
            />
            <FeatureItem 
              icon="ThumbsUp" 
              title="Экологичность" 
              description="Мы используем только безопасные материалы, не выделяющие вредных веществ."
            />
          </div>
        </div>
      </section>
      
      {/* Продукты */}
      <section id="products" className="py-20 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Наши столешницы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              title="Столешница «Классик»" 
              description="Минималистичный дизайн, подходит для любого интерьера" 
              price="24 000"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1556909114-44e3123e3d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              title="Столешница «Мрамор»" 
              description="Имитация мрамора с уникальными прожилками" 
              price="32 000"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              title="Столешница «Терраццо»" 
              description="С включениями цветного камня и стекла" 
              price="28 000"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-black hover:bg-black/80 text-white text-lg px-8 py-6">
              Смотреть все столешницы
            </Button>
          </div>
        </div>
      </section>
      
      {/* Призыв к действию */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы заказать свою идеальную столешницу?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Оставьте заявку, и наш менеджер свяжется с вами для консультации и замера
          </p>
          <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
            Оставить заявку
          </Button>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="py-12 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">BetonLux</h3>
              <p className="text-gray-500">Премиальные столешницы из цветного бетона для вашего дома и бизнеса</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Главная</a></li>
                <li><a href="#products" className="hover:text-black transition-colors">Столешницы</a></li>
                <li><a href="#about" className="hover:text-black transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-black transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} /> +7 (900) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} /> info@betonlux.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} /> г. Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
            <p>© 2025 BetonLux. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
