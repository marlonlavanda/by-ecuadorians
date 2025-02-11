import { Page, LayoutOptions, MediaItem } from "./index";

export type BannerCarouselLayout = {
  fieldGroupName: string;
  highlightedPosts: {
    nodes: Page[];
  };
};

export type BiographyTabContent = {
  fieldGroupName: string;
  content: string;
  image: {
    node: MediaItem;
  };
};

export type BiographyTab = {
  tabTitle: string;
  tabContent: BiographyTabContent[];
};

export type BiographyTabsLayout = LayoutOptions & {
  headingTitle?: string;
  headingSubtitle?: string;
  addTab: BiographyTab[];
};
