import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveGridProps extends PropsWithChildren {
  columnRatio?: 1 | 2 | 3 | 4;
  hasCode?: boolean;
  className?: string;
  hasImage?: boolean;
}

export function ResponsiveGrid({
  columnRatio = 2,
  hasCode = false,
  hasImage = false,
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
        hasCode
          ? "h-[400px] md:grid-cols-[2fr_1fr]"
          : "[&>*:nth-child(odd)]:md:text-right",
        hasImage ? "[&>*:first-child]:justify-self-center" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
