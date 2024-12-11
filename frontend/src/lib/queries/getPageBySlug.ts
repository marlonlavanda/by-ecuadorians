import { fetchGraphQL } from "@/lib/functions"
import { Page } from "@/lib/types"
import { BANNER_CAROUSEL_FIELDS } from "@/lib/fragments"
/**
 * Fetch a page by slug.
 */
export default async function getPageBySlug(slug: string) {
  const query = `
    query GetPageBySlug($slug: ID = "URI") {
      page(id: $slug, idType: URI) {
        databaseId
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
  `

  const variables = {
    slug: slug,
  }

  const response = await fetchGraphQL(query, variables)

  return response.data.page as Page
}
