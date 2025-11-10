import { cn } from "@/lib/utils";

export function ProseWrapper({
  className,
  children,
  hasResponsiveGrid = false,
}: {
  className?: string;
  children: React.ReactNode;
  hasResponsiveGrid?: boolean;
}) {
  const styledResponsiveGrid = "prose-headings:mt-0 prose-li:mt-0 prose-p:mt-0";
  return (
    <div
      className={cn(
        "prose prose-sky dark:prose-invert prose-hr:mt-0 prose-hr:mb-6 max-w-full marker:text-sky-500 dark:marker:text-sky-400",
        hasResponsiveGrid && styledResponsiveGrid,
        className,
      )}
    >
      {children}
    </div>
  );
}
