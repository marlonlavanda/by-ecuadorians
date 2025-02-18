import { fetchGraphQL } from "@/lib/functions";
import { Ecuadorian } from "@/types";
import {
  PAGE_BUILDER_FIELDS_FRAGMENT,
  BANNER_CAROUSEL_FRAGMENT,
  BIOGRAPHY_TAB_FRAGMENT,
} from "@/graphql/fragments";

/**
 * Fetch a page by slug.
 */
export default async function getProfileBySlug(slug: string) {
  const query = `
    query getProfileBySlug($slug: ID = "URI") {
      ecuadorian(id: $slug, idType: SLUG) {
        databaseId
        content
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            databaseId
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

  const response = (await fetchGraphQL(query, variables)) as {
    data: { ecuadorian: Ecuadorian };
  };

  return response.data.ecuadorian as Ecuadorian;
}
