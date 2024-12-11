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