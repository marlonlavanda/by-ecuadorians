export type Sizing = "xs" | "sm" | "md" | "lg" | "xl";

export type Node = {
  id: string;
};

// Define the UniformResourceIdentifiable type
export type UniformResourceIdentifiable = {
  uri: string;
};

// Define the ContentNode type
export type ContentNode = Node &
  UniformResourceIdentifiable & {
    title: string;
    content: string;
    status: string;
  };

// Define the MediaItem type
export type MediaItem = {
  id: string;
  sourceUrl: string;
  altText: string;
  title: string;
  caption: string;
  description: string;
};

// Define the TermNode type
export type TermNode = Node &
  UniformResourceIdentifiable & {
    name: string;
    description: string;
  };

// Define the HierarchicalContentNode type
export type HierarchicalContentNode = ContentNode & {
  parent: HierarchicalContentNode;
  children: HierarchicalContentNode[];
};

// Define the NodeWithFeaturedImage type
export type NodeWithFeaturedImage = {
  featuredImage?: {
    node: MediaItem;
  };
};
