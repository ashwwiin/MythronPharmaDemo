import { ProductGrid } from "@/components/product-grid";
import { SectionTitle } from "@/components/section-title";

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Product Portfolio" 
          subtitle="Explore our range of precision-crafted generic solutions designed for metabolic and reproductive disorders."
          align="center"
          className="mb-16"
        />
        
        <ProductGrid />
      </div>
    </div>
  );
}
