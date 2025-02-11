import { BannerCarouselLayout, BiographyTabsLayout } from "./implementations";
// Define the NodeWithFeaturedImage type
export type NodeWithPageBuilderFields = {
  pageBuilderFields?: {
    layouts?: Array<BannerCarouselLayout | BiographyTabsLayout>;
  };
};
