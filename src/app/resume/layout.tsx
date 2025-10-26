import { MDXLayout } from "@/components/shared/mdx_layout";
import { ProseWrapper } from "@/components/shared/prose_wrapper";
import Content from "./page.mdx";

export default function Resume() {
  return (
    <MDXLayout>
      <ProseWrapper>
        <Content />
      </ProseWrapper>
    </MDXLayout>
  );
}
