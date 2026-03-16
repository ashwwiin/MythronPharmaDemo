import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = "left", 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "space-y-6 mb-16",
      align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
      className
    )}>
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
      <div className={cn(
        "h-2 w-24 bg-gradient-to-r from-primary to-primary/40 rounded-full",
        align === "center" ? "mx-auto" : ""
      )} />
    </div>
  );
}
