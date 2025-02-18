import {
  Node,
  ContentNode,
  HierarchicalContentNode,
  NodeWithPageBuilderFields,
  NodeWidthSEO,
} from "./index";

export type Page = Node &
  ContentNode &
  NodeWithPageBuilderFields &
  HierarchicalContentNode &
  NodeWidthSEO & {
    parent: Page;
    children: Page[];
  };
