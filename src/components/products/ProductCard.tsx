
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

/**
 * Компонент карточки продукта с эффектами наведения
 */
const ProductCard = ({ image, title, price, description }: ProductCardProps) => (
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

export default ProductCard;
