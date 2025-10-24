import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose dark:prose-invert">{children}</article>
    ),
    ...components,
  };
}
