import Image from "next/image";
import type { PropsWithChildren } from "react";
import { ResponsiveGrid } from "@/components/responsive_grid";
import { cn } from "@/lib/utils";

interface ImageResponsiveGridProps extends PropsWithChildren {
  src: string;
  imageHeight?: number;
}

export function ImageResponsiveGrid({
  src,
  imageHeight = 300,
  children,
}: ImageResponsiveGridProps) {
  return (
    <ResponsiveGrid>
      <div className={cn("relative")}>
        <Image
          src={src}
          alt={src}
          width={300}
          height={imageHeight}
          style={{ objectFit: "contain" }}
        />
      </div>
      {children}
    </ResponsiveGrid>
  );
}
