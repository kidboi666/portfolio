import { MDXLayout } from "@/components/shared/mdx_layout";
import { ProseWrapper } from "@/components/shared/prose_wrapper";
import Content from "./page.mdx";

export default function Resume() {
  return (
    <MDXLayout>
      <ProseWrapper className="prose-headings:mt-0 prose-li:mt-0 prose-p:mt-0">
        <Content />
      </ProseWrapper>
    </MDXLayout>
  );
}
