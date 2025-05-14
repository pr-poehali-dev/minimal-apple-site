
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

/**
 * Секция отображения продуктов (столешниц)
 */
const ProductsSection = () => {
  // Можно в будущем вынести эти данные в отдельный файл или получать с API
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Столешница «Классик»",
      description: "Минималистичный дизайн, подходит для любого интерьера",
      price: "24 000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556909114-44e3123e3d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Столешница «Мрамор»",
      description: "Имитация мрамора с уникальными прожилками",
      price: "32 000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Столешница «Терраццо»",
      description: "С включениями цветного камня и стекла",
      price: "28 000"
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Наши столешницы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-black hover:bg-black/80 text-white text-lg px-8 py-6">
            Смотреть все столешницы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
