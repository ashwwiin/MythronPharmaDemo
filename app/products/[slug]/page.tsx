"use client";

import { products } from "@/data/products";
import { useParams, useRouter } from "next/navigation";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Download, 
  Pill, 
  CheckCircle2, 
  Thermometer, 
  Stethoscope 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => router.push("/products")}>Back to Products</Button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          href="/products" 
          className="inline-flex items-center text-primary font-bold mb-8 hover:translate-x-1 transition-transform"
        >
          <ChevronLeft size={20} className="mr-1" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:sticky md:top-32"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 border-8 border-white shadow-2xl p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x1000/f1f5f9/0ea5a4?text=${product.name}`;
                }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">{product.name}</h1>
              <p className="text-xl font-medium text-primary uppercase tracking-wider">{product.use}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary flex items-center">
                <Thermometer className="mr-2 text-primary" size={20} /> Description
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-primary pl-6">
                &quot;{product.description}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary flex items-center">
                  <Pill className="mr-2 text-primary" size={20} /> Composition
                </h3>
                <ul className="space-y-2">
                  {product.composition.map((item) => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary flex items-center">
                  <CheckCircle2 className="mr-2 text-primary" size={20} /> Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((item) => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary flex items-center">
                <Stethoscope className="mr-2 text-primary" size={20} /> Medical Indications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.indications.map((item) => (
                  <Badge key={item} variant="secondary" className="bg-slate-100 text-secondary border-none px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 font-bold shadow-lg shadow-primary/20">
                Contact For Bulk Inquiry
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 bg-white border-slate-200">
                <Download className="mr-2" size={20} /> Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
