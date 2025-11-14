import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/shared/code_block";
import { cn } from "@/lib/utils";

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
    h1: ({ children, className }) => (
      <h1 className={cn(className, "text-sky-900 dark:text-slate-200")}>
        {children}
      </h1>
    ),
    h2: ({ children, className }) => (
      <h2 className={cn(className, "text-sky-600 dark:text-slate-300")}>
        {children}
      </h2>
    ),
    h3: ({ children, className }) => (
      <h3
        className={cn(className, "font-bold text-sky-900 dark:text-slate-300")}
      >
        {children}
      </h3>
    ),
    h4: ({ children, className }) => (
      <h4
        className={cn(className, "font-bold text-sky-900 dark:text-slate-400")}
      >
        {children}
      </h4>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-sky-900 dark:text-slate-400">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-slate-400 italic dark:text-slate-500">{children}</em>
    ),
    ...components,
  };
}
