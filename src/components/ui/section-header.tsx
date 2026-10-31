interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  const words = title.trim().split(" ");
  const lastWord = words.pop() || "";
  const mainTitle = words.join(" ");

  return (
    <div className={`mb-10 text-center md:mb-14 ${className}`}>
      <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {mainTitle ? `${mainTitle} ` : ""}
        <span className="text-primary">{lastWord}.</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
