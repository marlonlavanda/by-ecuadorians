import { BannerCarouselLayout } from "./implementations";
// Define the NodeWithFeaturedImage type
export type NodeWithPageBuilderFields = {
  pageBuilderFields?: {
    layouts?: Array<BannerCarouselLayout>;
  };
};
