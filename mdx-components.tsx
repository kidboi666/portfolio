import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/shared/code_block";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    pre: ({ children }) => <>{children}</>,
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock
          code={String(children).replace(/\n$/, "")}
          language={match[1]}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    ...components,
  };
}
