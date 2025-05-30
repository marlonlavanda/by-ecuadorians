export interface Page {
  author: {
    node: {
      avatar: {
        url: string;
      };
      name: string;
    };
  };
  databaseId: string;
  date: string;
  modified: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: FeaturedImage;
  seo: {
    metaDesc: string;
    title: string;
  };
  pageBuilderFields: {
    layouts: Array<BannerCarouselFragment>;
  };
}

export interface Category {
  databaseId: string;
  name: string;
  slug: string;
}
export interface EcuadorianCategory extends Category {
  databaseId: string;
  name: string;
  slug: string;
}

export interface FeaturedImage {
  node: {
    altText: string;
    databaseId: number;
    sourceUrl: string;
  };
}

export interface HighlightedPost {
  id: string;
  databaseId: string;
  slug: string;
  uri: string;
  content: string; // Assuming `RAW` format content is a string
  excerpt: string;
  title: string;
  categories: {
    nodes: Array<Category>;
  };
  featuredImage: FeaturedImage;
}

export interface BannerCarouselFragment {
  highlightedPosts: {
    nodes: Array<HighlightedPost>;
  };
  fieldGroupName: string;
}

export type BiographyTabContent = {
  content: string;
  image: FeaturedImage;
};

export type BiographyTab = {
  tabTitle: string;
  tabContent: Array<BiographyTabContent>;
};
export interface BiographyTabsFragment {
  headingTitle?: string;
  headingSubtitle?: string;
  addTab: Array<BiographyTab>;
  paddingTop?: "xs" | "sm" | "md" | "lg" | "xl";
  paddingBottom?: "xs" | "sm" | "md" | "lg" | "xl";
  marginTop?: "xs" | "sm" | "md" | "lg" | "xl";
  marginBottom?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface Post {
  slug: string;
  databaseId: string;
  content: string;
  title: string;
  excerpt?: string;
  featuredImage: FeaturedImage;
  categories: {
    nodes: Array<Category>;
  };
  pageBuilderFields?: {
    layouts?: Array<BannerCarouselFragment | BiographyTabsFragment>;
  };
}

export type Ecuadorian = Post;
