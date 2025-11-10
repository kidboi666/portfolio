import * as motion from "motion/react-client";
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CarouselSection platform="flutter" projects={projects} />
      {children}
    </motion.div>
  );
}
