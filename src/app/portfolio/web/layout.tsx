import { CarouselSection } from "@/app/portfolio/_components/carousel_section";
import { TransitionContainer } from "@/components/shared/transition_container";

export default function Layout({ children }: { children: React.ReactNode }) {
  const projects = [
    {
      slug: "onelog",
      title: "OneLog",
      description: "Personal Project",
      src: "/images/portfolio/onelog_cover.png",
    },
    {
      slug: "mogazoa",
      title: "Mogazoa",
      description: "Team Project",
      src: "/images/portfolio/mogazoa_cover.png",
    },
  ];

  return (
    <TransitionContainer>
      <CarouselSection platform="web" projects={projects} />
      {children}
    </TransitionContainer>
  );
}
