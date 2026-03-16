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
      "space-y-4 mb-12",
      align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 bg-primary rounded-full",
        align === "center" ? "mx-auto" : ""
      )} />
    </div>
  );
}
