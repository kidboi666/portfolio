import { ProseWrapper } from "@/components/shared/prose_wrapper";
import Content from "./page.mdx";

export default function AboutMe() {
  return (
    <ProseWrapper hasResponsiveGrid className="p-4">
      <Content />
    </ProseWrapper>
  );
}
