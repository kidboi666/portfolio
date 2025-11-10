import * as motion from "motion/react-client";
import { CarouselSection } from "@/app/portfolio/_components/carousel_section";

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CarouselSection platform="web" projects={projects} />
      {children}
    </motion.div>
  );
}
