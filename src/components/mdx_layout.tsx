export function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-sm dark:prose-invert mx-auto max-w-full items-center px-4 py-8 md:py-16 lg:w-3xl">
      {children}
    </article>
  );
}
