
import { Button } from "@/components/ui/button";

/**
 * Секция с призывом к действию для контакта
 */
const ContactSection = () => (
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
);

export default ContactSection;
