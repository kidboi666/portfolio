"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselItemContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    slug: "moodlog",
    title: "MoodLog",
    description: "Personal Project",
    src: "/images/portfolio/moodlog_cover.png",
  },
  {
    slug: "mogazoa",
    title: "Mogazoa",
    description: "Team Project",
    src: "/images/portfolio/mogazoa_cover.png",
  },
];

export function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!api) return;

    setIndex(api.selectedScrollSnap());

    api.on("settle", () => {
      const currentIndex = api.selectedScrollSnap();
      setIndex(currentIndex);
      const slug = projects[currentIndex].slug;
      router.push(`/portfolio/${slug}`);
    });
  }, [api, router]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.slug}>
            <CarouselItemContent
              title={project.title}
              description={project.description}
              src={project.src}
              slug={project.slug}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDot current={index} length={projects.length} />
    </Carousel>
  );
}
