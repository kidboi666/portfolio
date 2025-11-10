import { CarouselSection } from "@/app/portfolio/_components/carousel_section";

export default function Layout({ children }: { children: React.ReactNode }) {
  const projects = [
    {
      slug: "moodlog",
      title: "MoodLog",
      description: "Personal Project",
      src: "/images/portfolio/moodlog_cover.png",
    },
  ];
  return (
    <>
      <CarouselSection projects={projects} />
      {children}
    </>
  );
}
