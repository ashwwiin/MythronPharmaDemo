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
      <Card className="h-full overflow-hidden border-slate-100 flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/600x400/f1f5f9/0ea5a4?text=${product.name}`;
            }}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 backdrop-blur-sm text-secondary border-none font-semibold">
              {product.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pt-6">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {product.use}
          </p>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="pt-0 pb-6">
          <Link href={`/products/${product.slug}`} className="w-full">
            <button className="w-full flex items-center justify-between px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all group/btn">
              Explore Product
              <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
