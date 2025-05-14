
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Компонент для анимированного появления текста или элементов
 */
const AnimatedText = ({ children, delay = 0, className = "" }: AnimatedTextProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default AnimatedText;
