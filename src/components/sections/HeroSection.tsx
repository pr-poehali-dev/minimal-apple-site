
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";

/**
 * Главная герой-секция с призывом к действию
 */
const HeroSection = () => (
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
);

export default HeroSection;
