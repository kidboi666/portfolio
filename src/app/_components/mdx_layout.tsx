export function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-sm dark:prose-invert mx-auto max-w-3xl items-center px-4 py-8 md:w-md md:py-16 lg:w-lg xl:w-xl 2xl:w-2xl">
      {children}
    </article>
  );
}
