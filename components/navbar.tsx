"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Values", href: "/values" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300",
          (scrolled || isOpen)
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-100 dark:border-white/10 shadow-sm py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="w-full px-4 md:px-10 lg:px-16">
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className="flex items-center -ml-2 md:-ml-4">
              <Link href="/" className="group" onClick={() => setIsOpen(false)}>
                <div className="relative h-14 w-48 md:h-16 md:w-64 overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Mythron Pharma"
                    className="h-full w-full object-contain scale-[1.5] transition-transform duration-300 group-hover:scale-[1.6]"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 ml-auto">
              <div className="flex items-center gap-4 xl:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold tracking-tight transition-all hover:text-primary relative py-2 group/nav whitespace-nowrap",
                      pathname === link.href ? "text-primary" : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
                      pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                    )} />
                  </Link>
                ))}
              </div>
              <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2" />
              <Button size="sm" className="rounded-xl px-7 font-bold h-10 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white border-none whitespace-nowrap">
                Inquire Now
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white hover:text-primary transition-all active:scale-90"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-slate-950 pt-28 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-10 px-6 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-4xl font-black uppercase tracking-tighter transition-all",
                      pathname === link.href 
                        ? "text-primary" 
                        : "text-slate-900 dark:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="w-full pt-10 px-4">
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-[2rem] h-20 text-xl font-black uppercase tracking-widest bg-primary text-white shadow-2xl shadow-primary/20"
                >
                  Inquire Now
                </Button>
                
                <div className="mt-12 text-center space-y-2 text-slate-400">
                  <p className="text-xs font-bold uppercase tracking-[0.3em]">Scientific Excellence</p>
                  <p className="text-sm font-medium">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
