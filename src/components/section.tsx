import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends PropsWithChildren {
  columnRatio?: 2 | 3 | 4;
  isResponsive?: boolean;
}

export function RowSection({
  columnRatio,
  isResponsive = true,
  children,
}: SectionProps) {
  const responsiveClasses = {
    2: "grid-cols-1 md:grid-cols-[1fr_2fr]",
    3: "grid-cols-1 md:grid-cols-[1fr_3fr]",
    4: "grid-cols-1 md:grid-cols-[1fr_4fr]",
  };

  const fixedClasses = {
    2: "grid-cols-[1fr_2fr]",
    3: "grid-cols-[1fr_3fr]",
    4: "grid-cols-[1fr_4fr]",
  };

  return (
    <div
      className={cn(
        "grid",
        isResponsive
          ? responsiveClasses[columnRatio || 2]
          : fixedClasses[columnRatio || 2],
      )}
    >
      {children}
    </div>
  );
}
