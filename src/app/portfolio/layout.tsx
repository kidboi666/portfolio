import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { MDXLayout } from "@/components/mdx_layout";
import Content from "./page.mdx";

const overrideComponents: MDXComponents = {
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ margin: 0, marginBottom: 0, marginTop: 0 }}
      {...(props as ImageProps)}
    />
  ),
};

export default function Portfolio() {
  return (
    <MDXLayout>
      <Content components={overrideComponents} />
    </MDXLayout>
  );
}
