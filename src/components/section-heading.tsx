import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" && "mx-auto text-center",
      )}
    >
      <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-cyan-300">
        <span className="h-px w-8 bg-cyan-400/70" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-cyan-400/70" />}
      </div>
      <h2 className="font-display text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
