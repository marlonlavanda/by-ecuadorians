import { fetchGraphQL } from "@/lib/functions";
import { Ecuadorian } from "@/lib/types";
import {
  PAGE_BUILDER_FIELDS_FRAGMENT,
  BANNER_CAROUSEL_FRAGMENT,
  BIOGRAPHY_TAB_FRAGMENT,
} from "@/lib/fragments";

/**
 * Fetch a page by slug.
 */
export default async function getEcuadorianBySlug(slug: string) {
  const query = `
    query getEcuadorianBySlug($slug: ID = "URI") {
      ecuadorian(id: $slug, idType: SLUG) {
        databaseId
        content
        slug
        title
        excerpt
        featuredImage {
          node {
            databaseId
            sourceUrl
            uri
            altText
          }
        }
        categories {
          nodes {
            databaseId
            name
            slug
          }
        }
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

  return response.data.ecuadorian as Ecuadorian;
}
