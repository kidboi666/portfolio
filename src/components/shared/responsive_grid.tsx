import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveGridProps extends PropsWithChildren {
  columnRatio?: 2 | 3 | 4;
  className?: string;
}

export function ResponsiveGrid({
  columnRatio,
  className,
  children,
}: ResponsiveGridProps) {
  const responsiveClasses = {
    2: "grid-cols-1 md:grid-cols-[1fr_2fr]",
    3: "grid-cols-1 md:grid-cols-[1fr_3fr]",
    4: "grid-cols-1 md:grid-cols-[1fr_4fr]",
  };

  return (
    <div className={cn("grid", responsiveClasses[columnRatio || 2], className)}>
      {children}
    </div>
  );
}
