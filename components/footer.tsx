import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Atom } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-10 md:pt-16 pb-6 md:pb-8 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Central Brand Section */}
          <div className="space-y-6 max-w-xl">
            <Link href="/" className="flex flex-col items-center group">
              <div className="relative h-16 w-64 overflow-hidden mb-1">
                <img
                  src="/logo.png"
                  alt="Mythron Pharma"
                  className="h-full w-full object-contain scale-[2.1] transition-transform duration-500 group-hover:scale-[2.2] brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                An agile bioscience startup dedicated to addressing complex metabolic health through innovation and clinical precision.
              </p>
            </Link>
            
            <div className="flex justify-center space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all hover:-translate-y-1 border border-white/10 hover:border-primary group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Central Navigation & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl py-6 md:py-10 border-y border-white/5">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Navigation</h4>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["Home", "Products", "Values", "Why Us", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Location</h4>
              <div className="flex items-center justify-center space-x-2 text-slate-500">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs font-semibold">Genome Valley, Bangalore, India</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Contact</h4>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2 text-slate-500">
                  <Mail size={14} className="text-primary" />
                  <span className="text-xs font-semibold">hello@mythronpharma.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col items-center space-y-4 w-full">
            <div className="flex flex-col items-center space-y-2 text-center">
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} Mythron Pharma.
              </p>
              <div className="flex space-x-8">
                {["Privacy Policy", "Terms"].map(t => (
                  <Link key={t} href="#" className="text-slate-600 hover:text-white text-[9px] font-black uppercase tracking-[0.3em] transition-colors">{t}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
