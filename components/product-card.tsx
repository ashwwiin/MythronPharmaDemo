"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Pill } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden border-slate-100 flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-500 rounded-3xl">
        <div className="relative aspect-[4/3] bg-[#F8FAFC] overflow-hidden p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/600x400/f1f5f9/0ea5a4?text=${product.name}`;
            }}
          />
          <div className="absolute top-6 left-6">
            <Badge className="bg-primary/10 text-primary border-none font-bold px-3 py-1 rounded-lg">
              {product.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pt-6 pb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">
            {product.use}
          </p>
        </CardHeader>

        <CardContent className="flex-grow pt-2">
          <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed font-medium">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="pt-4 pb-8">
          <Link href={`/products/${product.slug}`} className="w-full px-6">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-lg shadow-slate-200 dark:shadow-none translate-y-0 hover:-translate-y-1 active:scale-95">
              Explore Product
              <ArrowRight size={16} />
            </button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
