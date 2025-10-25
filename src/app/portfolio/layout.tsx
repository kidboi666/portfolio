import Image from "next/image";
import { MDXLayout } from "@/components/mdx_layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MDXLayout>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center">
              <Image
                width="256"
                height="256"
                alt="moodlog"
                src="/images/portfolio/moodlog_cover.png"
              />
              <h1>MoodLog</h1>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center">
              <Image
                width="256"
                height="256"
                alt="moodlog"
                src="/images/portfolio/moodlog_cover.png"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {children}
    </MDXLayout>
  );
}
