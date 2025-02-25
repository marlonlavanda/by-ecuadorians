"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

import { AspectRatio } from "@/components/ui/AspectRatio";
import { BannerCarouselProps } from "./BannerCarousel.types";

export const BannerCarousel = ({ highlightedPosts }: BannerCarouselProps) => {
  return (
    <div className="section">
      <div className="container w-full overflow-hidden">
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
                    <Link href={`/ecuadorians/profile/${banner.slug}`}>
                      <h2>{banner.title}</h2>
                    </Link>
                    {banner.excerpt && (
                      <div
                        className="wysiwyg"
                        dangerouslySetInnerHTML={{ __html: banner.excerpt }}
                      ></div>
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
