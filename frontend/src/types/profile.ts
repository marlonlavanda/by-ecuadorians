import { Page, Categories, MediaItem } from "./index";

export type Ecuadorian = Page & {
  categories: Categories;
  featuredImage: {
    node: MediaItem;
  };
};
