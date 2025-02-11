import {
  Node,
  ContentNode,
  NodeWithFeaturedImage,
  HierarchicalContentNode,
} from "./index";

export type Page = Node &
  ContentNode &
  NodeWithFeaturedImage &
  HierarchicalContentNode & {
    parent: Page;
    children: Page[];
  };
