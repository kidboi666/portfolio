import { CarouselSection } from "@/app/portfolio/_components/carousel_section";
import { TransitionContainer } from "@/components/shared/transition_container";

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
    <TransitionContainer>
      <CarouselSection platform="flutter" projects={projects} />
      {children}
    </TransitionContainer>
  );
}
