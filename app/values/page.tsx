import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Sparkles, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Our Vision",
    content: "To be a trusted partner in providing high-precision therapeutic solutions that transform lives, particularly in underserved metabolic and reproductive health sectors.",
    icon: Compass,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Our Mission",
    content: "To leverage bioscience innovation and precision synthesis to deliver products that redefine benchmarks for purity and efficacy, ensuring better health outcomes for our patients.",
    icon: Target,
    gradient: "from-indigo-600 to-primary"
  },
  {
    title: "Our Purpose",
    content: "We exist to bridge the gap between complex health needs and accessible pharmacological solutions, driven by rapid innovation and guided by the highest ethical standards.",
    icon: Sparkles,
    gradient: "from-primary to-secondary"
  }
];

const pillars = [
  { title: "Empathy", icon: Heart, desc: "Putting patient needs at the center of our synthesis pipeline." },
  { title: "Innovation", icon: Lightbulb, desc: "Continuously refining our formulations through agile research." },
  { title: "Collaboration", icon: Users, desc: "Growing through strong clinical and strategic clinical trials." }
];

export default function ValuesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32 bg-slate-50 dark:bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,164,0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle 
            title="Our Values & Identity" 
            subtitle="The core principles that guide our journey toward therapeutic innovation."
            align="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {values.map((v) => (
              <Card key={v.title} className="border-none shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none dark:bg-slate-900 rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className={`h-2 w-full bg-gradient-to-r ${v.gradient}`} />
                <CardContent className="p-10 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <v.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{v.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {v.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">The <span className="text-primary italic">MYTHRON</span> Way</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pillars.map((p) => (
                <div key={p.title} className="space-y-6 group">
                  <div className="mx-auto w-20 h-20 border-2 border-primary/20 rounded-3xl flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                    <p.icon size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
