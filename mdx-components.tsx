import type { MDXComponents } from "mdx/types";
import { H1, H2, H3, H4, Paragraph } from "@/components/typography/heading";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    ...components,
  };
}
