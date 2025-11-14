import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveGridProps extends PropsWithChildren {
  columnRatio?: 1 | 2 | 3 | 4;
  className?: string;
}

export function ResponsiveGrid({
  columnRatio = 2,
  className,
  children,
}: ResponsiveGridProps) {
  const responsiveClasses = {
    1: "md:grid-cols-[1fr_1fr]",
    2: "md:grid-cols-[1fr_2fr]",
    3: "md:grid-cols-[1fr_3fr]",
    4: "md:grid-cols-[1fr_4fr]",
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8",
        responsiveClasses[columnRatio],
        "[&>*:nth-child(odd)]:md:text-right",
        className,
      )}
    >
      {children}
    </div>
  );
}
