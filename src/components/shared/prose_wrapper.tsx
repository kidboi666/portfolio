import { cn } from "@/lib/utils";

export function ProseWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "prose prose-sky dark:prose-invert max-w-full marker:text-sky-500 dark:marker:text-sky-400",
        className,
      )}
    >
      {children}
    </div>
  );
}
