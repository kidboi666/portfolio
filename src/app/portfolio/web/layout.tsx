import { CarouselSection } from "@/app/portfolio/_components/carousel_section";

export default function Layout({ children }: { children: React.ReactNode }) {
  const projects = [
    {
      slug: "mogazoa",
      title: "Mogazoa",
      description: "Team Project",
      src: "/images/portfolio/mogazoa_cover.png",
    },
  ];

  return (
    <>
      <CarouselSection projects={projects} />
      {children}
    </>
  );
}
