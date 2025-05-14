
import Icon from "@/components/ui/icon";

/**
 * Компонент футера сайта
 */
const Footer = () => (
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
        <p>© {new Date().getFullYear()} BetonLux. Все права защищены.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
