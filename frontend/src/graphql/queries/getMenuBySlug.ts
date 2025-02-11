import { fetchGraphQL } from "@/lib/functions";
import { Menu } from "@/types";

/**
 * Fetch a menu by slug.
 */
export default async function getMenuBySlug(slug: string) {
  const query = `
    query GetMenuBySlug($slug: ID = "URI") {
      menu(id: $slug, idType: SLUG) {
        menuItems {
          nodes {
            id
            databaseId
            uri
            target
            title
            cssClasses
            label
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.menu as Menu;
}
