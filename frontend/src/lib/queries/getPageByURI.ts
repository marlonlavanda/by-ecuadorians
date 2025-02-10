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
export default async function getPageByURI(uri: string) {
  const query = `
    query GetPageByURI($uri: ID = "URI") {
      page(id: $uri, idType: URI) {
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
    uri: uri,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.page as Page;
}
