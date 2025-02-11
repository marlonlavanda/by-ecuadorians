export type MenuItem = {
  id: string;
  databaseId: string;
  target: string;
  label: string;
  title: string;
  uri: string;
  cssClasses: string[];
};

export type Menu = {
  id: string;
  slug: string;
  name: string;
  locations: string[];
  menuItems: {
    nodes: MenuItem[];
  };
};
