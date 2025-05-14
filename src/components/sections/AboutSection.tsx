
import FeatureItem from "@/components/features/FeatureItem";

/**
 * Секция с преимуществами бетонных столешниц
 */
const AboutSection = () => (
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
);

export default AboutSection;
