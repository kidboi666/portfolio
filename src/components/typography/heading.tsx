import type { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

export function H1({ className, children }: HeadingProps) {
  return (
    <h1
      className={`scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children }: HeadingProps) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children }: HeadingProps) {
  return (
    <h3
      className={`scroll-m-20 font-semibold text-2xl tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children }: HeadingProps) {
  return (
    <h4
      className={`scroll-m-20 font-semibold text-xl tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ className, children }: HeadingProps) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
