export const POST_FIELDS = `
  fragment PostFields on Post {
    id
    content(format: RAW)
    databaseId
    excerpt
    title
    slug
    uri
    categories {
      nodes {
        databaseId
        name
        slug
      }
    }
    featuredImage {
      node {
        databaseId
        sourceUrl
        uri
        altText
      }
    }
  }
`;

export const BANNER_CAROUSEL_FIELDS = `
  fragment BannerCarouselFields on PageBuilderFieldsLayoutsBannerCarouselLayout {
    highlightedPosts {
      nodes {
        databaseId
        slug
        uri
        ... on Post {
          ...PostFields
        }
      }
    }
  }
  ${POST_FIELDS}
`;
