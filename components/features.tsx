"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Building2, FlaskConical, Award, Microscope, Users, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "WHO-GMP Quality",
    description: "Our manufacturing processes adhere to exacting safety protocols for safety and efficacy.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Bangalore Hub",
    description: "Located in the heart of India's 'Genome Valley', leveraging world-class scientific infrastructure.",
    icon: Building2,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "99.8% Purity",
    description: "Rigorous batch testing ensures our products meet the most demanding pharmaceutical purity specs.",
    icon: FlaskConical,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "R&D Driven",
    description: "Continuous research pipeline focusing on specialized metabolic and reproductive care.",
    icon: Microscope,
    color: "bg-orange-50 text-orange-600",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-none group hover:bg-slate-50 transition-colors">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl ${item.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FocusAreas() {
  const areas = [
    {
      title: "Metabolic Healthcare",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      description: "Managing conditions like diabetes and insulin resistance with precision."
    },
    {
      title: "Reproductive Wellness",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      description: "Support for PCOS, fertility, and hormonal balance."
    },
    {
      title: "Patient Excellence",
      image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&q=80&w=800",
      description: "Generic solutions that prioritize accessibility without compromising on quality."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-4">Focus Areas</h2>
            <p className="text-muted-foreground">Expertise-driven solutions for critical health challenges.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-lg"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 transition-colors duration-500 group-hover:from-primary/90">
                <h3 className="text-2xl font-black text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{area.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-slate-200 text-sm font-medium leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
