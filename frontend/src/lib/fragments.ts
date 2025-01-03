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

export const BANNER_CAROUSEL_FRAGMENT = `
  fragment BannerCarouselFragment on PageBuilderFieldsLayoutsBannerCarouselLayout {
    highlightedPosts {
      nodes {
        databaseId
        slug
        uri
        ... on Ecuadorian {
          ...EcuadorianFragment
        }
      }
    }
  }
  ${ECUADORIAN_FRAGMENT}
`;

/*
 * The following code is used to create a fragment that can be used to query the fields for the Biography Tab layout.
 * This fragment is used in the BiographyTabDetails component to query the fields for the Biography Tab layout.
 */

export const BIOGRAPHY_TAB_FRAGMENT = `
  fragment BiographyTabFragment on PageBuilderFieldsLayoutsBiographyTabsLayout {
    addTab {
      tabTitle
      tabContent {
        content
        image {
          node {
            sourceUrl
            databaseId
            altText
          }
        }
      }
    }
    marginBottom
    marginTop
    paddingBottom
    paddingTop
  }
`;

export const PAGE_BUILDER_FIELDS_FRAGMENT = `
  fragment PageBuilderFieldsFragment on PageBuilderFields {
    layouts {
      fieldGroupName
      ... on PageBuilderFieldsLayoutsBannerCarouselLayout {
        ...BannerCarouselFragment
      }
      ... on PageBuilderFieldsLayoutsBiographyTabsLayout {
        ...BiographyTabFragment
      }
    }
  }
`;
