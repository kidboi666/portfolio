import type { MDXComponents } from "mdx/types";
import { MDXLayout } from "@/components/mdx_layout";
import Content from "./page.mdx";

function getId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const overrideComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1
      id={getId(children.toString())}
      className="mt-0 mb-0 scroll-mt-20 font-medium text-2xl text-heading-primary"
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      id={getId(children.toString())}
      className="mt-0 mb-0 scroll-mt-20 text-heading-primary"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={getId(children.toString())}
      className="mt-0 mb-0 scroll-mt-20 font-bold text-heading-secondary text-lg"
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      id={getId(children.toString())}
      className="mt-0 mb-0 scroll-mt-20 text-heading-secondary"
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mt-0 mb-0 text-muted-foreground">{children}</p>
  ),
  em: ({ children }) => <em className="text-heading-tertiary">{children}</em>,
  ul: ({ children }) => <ul className="mt-0 mb-0 list-disc">{children}</ul>,
  li: ({ children }) => (
    <li className="mt-0 mb-0 text-muted-foreground">{children}</li>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      rel="noopener noreferrer"
      className="text-heading-tertiary underline"
    >
      {children}
    </a>
  ),
};

export default function Resume() {
  return (
    <MDXLayout>
      <Content components={overrideComponents} />
    </MDXLayout>
  );
}
