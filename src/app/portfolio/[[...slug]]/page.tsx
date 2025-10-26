export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const project = await params.then((params) => params.slug?.[0] || "moodlog");
  const { default: Project } = await import(`@/app/portfolio/${project}.mdx`);
  return <Project />;
}

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["moodlog"] }, { slug: ["mogazoa"] }];
}
