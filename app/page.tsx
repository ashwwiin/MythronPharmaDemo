"use client";

import { Hero } from "@/components/hero";
import { Features, FocusAreas } from "@/components/features";
import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/section-title";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <FocusAreas />
      
      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle 
              title="Featured Products" 
              subtitle="Precision-crafted solutions for critical metabolic and reproductive needs."
              className="mb-0"
            />
            <Link href="/products">
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 rounded-full px-6">
                All Products <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}

