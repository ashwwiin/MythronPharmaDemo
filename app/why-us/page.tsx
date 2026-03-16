import { SectionTitle } from "@/components/section-title";
import { ShieldCheck, Award, Zap, Microscope, HeartHandshake, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Agile Quality Control",
    desc: "Every batch undergoes rigorous quality control to ensure exacting safety protocols are met with precision.",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Precision Synthesis",
    desc: "Next-gen therapeutic solutions crafted with exactness to optimize efficacy and absorption.",
    icon: Zap,
    color: "text-teal-600 bg-teal-50"
  },
  {
    title: "Research Pipeline",
    desc: "Our responsive research lab in Bangalore is dedicated to specialized metabolic breakthroughs.",
    icon: Microscope,
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "Clinical Rigor",
    desc: "Built on a foundation of evidence-based research and comprehensive therapeutic documentation.",
    icon: FlaskConical,
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    title: "99.8% Purity",
    desc: "Utilizing advanced chromatography and purification techniques for high-grade compound quality.",
    icon: Award,
    color: "text-orange-600 bg-orange-50"
  },
  {
    title: "Focused Care",
    desc: "We design our products with a deep understanding of metabolic and hormonal wellness.",
    icon: HeartHandshake,
    color: "text-red-600 bg-red-50"
  }
];

export default function WhyUsPage() {
  return (
    <div className="pt-28 pb-24 md:pt-40 md:pb-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="The Mythron Edge" 
          subtitle="Discover the scientific rigor and agile foundation that sets us apart in the bioscience industry."
          align="center"
          className="mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative h-full border-none shadow-none bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 rounded-[2.5rem] p-6">
                <CardContent className="pt-8 space-y-6">
                  <div className={`p-5 rounded-2xl w-fit ${f.color} shadow-lg shadow-black/5`}>
                    <f.icon size={36} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{f.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm">
                      {f.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-gradient-to-br from-slate-900 to-black rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-1/3 h-1/2 bg-secondary/10 blur-[100px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Scientific Integrity <br/><span className="text-primary italic">at Our Core</span></h2>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                We believe that precision is not just a regulatory requirement, but a fundamental right of every patient. 
                Our agile team of dedicated scientists works tirelessly to ensure that Mythron Pharma products are synonymous with trust and reliability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Traceable Pipeline</div>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">Zero</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Compromise Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
