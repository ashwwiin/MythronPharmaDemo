"use client";

import * as React from "react";
import { products, Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Metabolic Health",
  "Cellular Energy",
  "Antioxidant Support",
  "Reproductive Health",
] as const;

export function ProductGrid() {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<typeof categories[number]>("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                         product.use.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input 
            placeholder="Search products or indications..." 
            className="pl-10 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button 
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <div className="flex items-center mr-2 text-sm font-bold text-secondary">
            <Filter size={16} className="mr-2" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all border",
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-secondary border-slate-200 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="inline-flex p-6 bg-slate-50 rounded-full mb-6">
            <Search size={48} className="text-slate-200" />
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          <button 
            onClick={() => {setSearch(""); setSelectedCategory("All");}}
            className="mt-6 text-primary font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
