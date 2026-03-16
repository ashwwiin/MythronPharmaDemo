"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Microscope, Beaker } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-64 pb-24 md:pt-56 md:pb-32">
      {/* Seamless Blend Background */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 -z-10 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-20 -z-10 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" 
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-10"
          >
            <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md border border-primary/20 text-primary px-5 py-2 rounded-2xl w-fit shadow-sm shadow-primary/5">
              <Sparkles size={18} className="animate-pulse" />
              <span className="text-sm font-bold tracking-tight">Revolutionizing Metabolic Wellness</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.95]">
              Science that <span className="text-primary italic">Empowers</span> Life.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
              Mythron Pharma is an agile bioscience startup crafting high-precision solutions for complex metabolic and reproductive health challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/products">
                <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  Explore Products <ArrowRight className="ml-2" size={22} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold bg-white/50 backdrop-blur-sm border-slate-200 text-slate-900 hover:bg-white hover:-translate-y-1 transition-all">
                  Collaborate
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="space-y-1">
                <p className="text-4xl font-black text-slate-900 dark:text-white">99.8%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Purity</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black text-slate-900 dark:text-white">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Formulations</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black text-slate-900 dark:text-white">35ms</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Binding Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[12px] border-white dark:border-slate-900 group">
              <img
                src="https://media.istockphoto.com/id/1387090964/photo/doctor-working-with-microplate-for-elisa-analysis.jpg?s=612x612&w=0&k=20&c=sbADxpHinS4j7MUZUh1LROB-4qRnTLmE0Oln_upD7iA="
                alt="Mythron Pharma R&D"
                className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 right-8 p-8 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-3 bg-white rounded-2xl text-primary shadow-lg">
                    <Beaker size={24} />
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">Precision R&D</p>
                    <p className="text-white/80 text-sm">Next-gen synthesis methodologies</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-6 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl z-20 border border-slate-100 dark:border-white/10"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <Microscope size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white leading-none">Agile</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Manufacturing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
