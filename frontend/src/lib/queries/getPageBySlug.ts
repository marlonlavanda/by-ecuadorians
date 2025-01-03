import { fetchGraphQL } from "@/lib/functions";
import { Page } from "@/lib/types";
import {
  PAGE_BUILDER_FIELDS_FRAGMENT,
  BANNER_CAROUSEL_FRAGMENT,
  BIOGRAPHY_TAB_FRAGMENT,
} from "@/lib/fragments";
/**
 * Fetch a page by slug.
 */
export default async function getPageBySlug(slug: string) {
  const query = `
    query GetPageBySlug($slug: ID = "URI") {
      page(id: $slug, idType: URI) {
        databaseId
        content
        pageBuilderFields {
          ...PageBuilderFieldsFragment
        }
      }
    }
    ${PAGE_BUILDER_FIELDS_FRAGMENT}
    ${BANNER_CAROUSEL_FRAGMENT}
    ${BIOGRAPHY_TAB_FRAGMENT}
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.page as Page;
}
