export const ECUADORIAN_FRAGMENT = `
  fragment EcuadorianFragment on Ecuadorian {
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
