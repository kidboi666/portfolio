"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { PLATFORM } from "@/app/portfolio/layout";
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

export function CarouselSection({
  platform,
  projects,
}: {
  platform: PLATFORM;
  projects: Record<string, any>[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!api) return;

    setIndex(api.selectedScrollSnap());

    api.on("select", () => {
      const currentIndex = api.selectedScrollSnap();
      setIndex(currentIndex);
      const slug = projects[currentIndex].slug;
      router.push(`/portfolio/${platform}/${slug}`);
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
