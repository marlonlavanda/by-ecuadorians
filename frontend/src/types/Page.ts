import {
  Node,
  ContentNode,
  NodeWithFeaturedImage,
  HierarchicalContentNode,
  NodeWithPageBuilderFields,
} from "./index";

export type Page = Node &
  ContentNode &
  NodeWithFeaturedImage &
  NodeWithPageBuilderFields &
  HierarchicalContentNode & {
    parent: Page;
    children: Page[];
  };
