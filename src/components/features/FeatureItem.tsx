
import Icon from "@/components/ui/icon";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

/**
 * Компонент отображения преимущества продукта
 */
const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-4">
      <Icon name={icon} size={32} />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default FeatureItem;
