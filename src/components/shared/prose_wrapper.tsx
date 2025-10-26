import { cn } from "@/lib/utils";

export function ProseWrapper({ children }: { children: React.ReactNode }) {
  const styledHeading =
    "prose-h1:text-slate-600 dark:prose-h1:text-slate-400 prose-h2:text-slate-600 dark:prose-h2:text-slate-400 prose-h3:text-slate-600 dark:prose-h3:text-slate-400 prose-h4:text-slate-600 dark:prose-h4:text-slate-400";
  const styledList = "prose-ul:text-slate-600 dark:prose-ul:text-slate-300";
  const styledLink = "prose-a:text-slate-700 dark:prose-a:text-slate-400";
  const styledParagraph = "prose-p:text-slate-800 dark:prose-p:text-slate-300";
  const styledStrong =
    "prose-strong:text-slate-600 dark:prose-strong:text-slate-400";
  const styledEm = "prose-em:text-slate-600 dark:prose-em:text-slate-400";

  return (
    <div
      className={cn(
        "prose prose-sm dark:prose-invert max-w-full",
        styledHeading,
        styledLink,
        styledList,
        styledParagraph,
        styledStrong,
        styledEm,
      )}
    >
      {children}
    </div>
  );
}
