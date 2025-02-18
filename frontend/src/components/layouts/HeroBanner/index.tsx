import Image from "next/image";
import { cva } from "class-variance-authority";

import { AspectRatio } from "@/components/ui/AspectRatio";
import { cn } from "@/lib/utils";
import { MediaItem, Categories } from "@/types";

type PersonHeroBannerProps = {
  title: string;
  featuredImage: {
    node: MediaItem;
  };
  categories: Categories;
};

const sectionStyles = cva("section");
const conatinerStyles = cva("container");
const heroBanerStyles = cva(
  "relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-primary after:from-25% after:to-transparent after:to-100%"
);
const detailsStyles = cva("absolute z-10 bottom-[40px] left-[40px] right-0 ");

export default function HeroBanner({
  title,
  featuredImage,
  categories,
}: PersonHeroBannerProps) {
  return (
    <section className={cn("person-hero-banner", sectionStyles())}>
      <div className={cn("person-hero-banner__container", conatinerStyles())}>
        <div className={cn("hero-banner", heroBanerStyles())}>
          {featuredImage && (
            <div className="hero-image">
              <AspectRatio ratio={18 / 8}>
                <Image
                  src={featuredImage?.node.sourceUrl}
                  alt={featuredImage?.node.altText}
                  fill
                  className="object-cover object-top"
                />
              </AspectRatio>
            </div>
          )}
          <div className={cn("hero-banner__details", detailsStyles())}>
            {categories?.nodes && (
              <h6 className="text-white font-light">
                {categories?.nodes[0]?.name}
              </h6>
            )}
            <h1 className="m-0 text-white">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
