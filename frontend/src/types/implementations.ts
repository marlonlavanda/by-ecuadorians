import { Page } from "./index";

export type BannerCarouselLayout = {
  fieldGroupName: string;
  highlightedPosts: {
    nodes: Page[];
  };
};
