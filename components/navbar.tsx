"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Microscope } from "lucide-react";
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

  // Handle body scroll locking
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

  // Handle scroll state for desktop
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
          "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out",
          // Solid background on mobile or when scrolled/open
          (scrolled || isOpen)
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 shadow-sm py-3" 
            : "bg-white/40 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-b border-white/20 md:border-none py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="relative h-10 w-40 md:h-12 md:w-64 overflow-hidden flex items-center">
                  <img
                    src="/logo.png"
                    alt="Mythron Pharma"
                    loading="eager"
                    className="h-full w-full object-contain scale-[1.8] md:scale-[2.2] transition-transform duration-300 group-hover:scale-[1.9] md:group-hover:scale-[2.3] min-h-[40px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement?.classList.add('hidden');
                      (e.target as HTMLImageElement).parentElement?.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </div>
                {/* Fallback Branding if image fails */}
                <div className="hidden items-center gap-2">
                  <div className="bg-primary p-1.5 md:p-2 rounded-xl text-white">
                    <Microscope size={18} />
                  </div>
                  <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 dark:text-white">MYTHRON</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              <div className="flex items-center gap-6 xl:gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-bold tracking-tight transition-all hover:text-primary relative py-1 group/nav",
                      pathname === link.href ? "text-primary" : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
                      pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                    )} />
                  </Link>
                ))}
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />
              <Button size="sm" className="rounded-xl px-7 font-bold h-10 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Inquire Now
              </Button>
            </div>

            {/* Mobile/Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white transition-all active:scale-90"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-slate-950 flex flex-col md:hidden"
          >
            <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full text-center"
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

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full pt-8 space-y-8 border-t border-slate-100 dark:border-white/10"
              >
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-2xl h-16 text-lg font-black uppercase tracking-widest bg-primary text-white shadow-xl shadow-primary/20"
                >
                  Inquire Now
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Scientific Excellence</p>
                  <p className="text-sm font-bold text-slate-500">Bangalore, Karnataka, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
