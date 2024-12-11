"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { HighlightedPost } from "@/lib/types";

type BannerCarouselProps = {
  highlightedPosts: {
    nodes: Array<HighlightedPost>;
  };
};

export const BannerCarousel = ({ highlightedPosts }: BannerCarouselProps) => {
  return (
    <div className="section">
      <div className="container overflow-hidden">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {highlightedPosts?.nodes.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-4">
                  <div>
                    <AspectRatio ratio={18 / 8}>
                      <Image
                        src={banner.featuredImage?.node.sourceUrl}
                        alt={banner.featuredImage?.node.altText}
                        fill
                        className="object-cover object-top"
                      />
                    </AspectRatio>
                  </div>
                  <div>
                    {banner.categories && (
                      <h6 className="mb-2">
                        {banner.categories.nodes[0].name}
                      </h6>
                    )}
                    <h2>{banner.title}</h2>
                    {banner.excerpt && (
                      <p
                        className="wysiwyg"
                        dangerouslySetInnerHTML={{ __html: banner.excerpt }}
                      ></p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
