import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

export function H1({ className, children }: HeadingProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-balance font-extrabold text-4xl tracking-tight",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children }: HeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children }: HeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-semibold text-2xl tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children }: HeadingProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 font-semibold text-xl tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ className, children }: HeadingProps) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}
