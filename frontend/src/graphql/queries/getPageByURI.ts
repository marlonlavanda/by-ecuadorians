import { fetchGraphQL } from "@/lib/functions";
import { Page } from "@/types";

import { PAGE_BUILDER_FIELDS_FRAGMENT } from "@/graphql/fragments";
/**
 * Fetch a page by slug.
 */
export default async function getPageByURI(uri: string) {
  const query = `
    query GetPageByURI($uri: ID = "URI") {
      page(id: $uri, idType: URI) {
        databaseId
        title
        slug
        content
        pageBuilderFields {
          ...PageBuilderFieldsFragment
        }
      }
    }
    ${PAGE_BUILDER_FIELDS_FRAGMENT}
  `;

  const variables = {
    uri: uri,
  };

  const response = (await fetchGraphQL(query, variables)) as {
    data: { page: Page };
  };

  return response.data.page as Page;
}
