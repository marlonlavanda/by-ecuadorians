export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export interface Menu {
  menuItems: {
    edges: [
      {
        node: {
          target: string;
          label: string;
          databaseId: string;
          uri: string;
          cssClasses: Array<string>;
        };
      }
    ];
  };
}

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

type BiographyTabContent = {
  content: string;
  image: FeaturedImage;
};

type BiographyTab = {
  tabTitle: string;
  tabContent: Array<BiographyTabContent>;
};
export interface BiographyTabsFragment {
  addTab: Array<BiographyTab>;
  fieldGroupName: string;
  marginBottom: string;
  marginTop: string;
  paddingBottom: string;
  paddingTop: string;
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
