export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const project = await params.then((params) => params.slug?.[0] || "onelog");
  const { default: Project } = await import(
    `@/app/portfolio/web/${project}.mdx`
  );
  return <Project />;
}

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["onelog"] }, { slug: ["mogazoa"] }];
}
