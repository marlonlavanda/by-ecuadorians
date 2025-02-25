import { Categories, LayoutOptions, MediaItem } from "./index";

export type HighlightedPost = {
  id: string;
  databaseId: string;
  slug: string;
  uri: string;
  content: string; // Assuming `RAW` format content is a string
  excerpt: string;
  title: string;
  categories: Categories;
  featuredImage: {
    node: MediaItem;
  };
};

export type BannerCarouselLayout = {
  fieldGroupName: string;
  highlightedPosts: {
    nodes: HighlightedPost[];
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
  fieldGroupName: string;
  headingTitle?: string;
  headingSubtitle?: string;
  addTab: BiographyTab[];
};

export type SummaryItem = {
  id: number;
  title: string;
  excerpt: string;
  featuredImage: {
    node: MediaItem;
  };
};
export type SummaryCollectionLayout = LayoutOptions & {
  fieldGroupName: string;
  headingTitle?: string;
  headingSubtitle?: string;
  items: {
    nodes: SummaryItem[];
  };
};
