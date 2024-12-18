import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";
import { BANNER_CAROUSEL_FIELDS } from "@/lib/fragments";

/**
 * Fetch a page by slug.
 */
export default async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
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
          layouts {
            fieldGroupName
            ... on PageBuilderFieldsLayoutsBannerCarouselLayout {
              ...BannerCarouselFields
            }
          }
        }
      }
    }
    ${BANNER_CAROUSEL_FIELDS}
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.post as Post;
}
