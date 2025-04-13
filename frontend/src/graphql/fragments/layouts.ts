import { ECUADORIAN_FRAGMENT } from "./profile";
import { POST_FRAGMENT } from "./post";

export const BANNER_CAROUSEL_FRAGMENT = `
  fragment BannerCarouselFragment on PageBuilderFieldsLayoutsBannerCarouselLayout {
    fieldGroupName
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
`;

/*
 * The following code is used to create a fragment that can be used to query the fields for the Biography Tab layout.
 * This fragment is used in the BiographyTabDetails component to query the fields for the Biography Tab layout.
 */

export const BIOGRAPHY_TAB_FRAGMENT = `
  fragment BiographyTabFragment on PageBuilderFieldsLayoutsBiographyTabsLayout {
    fieldGroupName
    headingTitle
    headingSubtitle
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

export const SUMMARY_COLLECTION_FRAGMENT = `
  fragment SummaryCollectionFragment on PageBuilderFieldsLayoutsSummaryCollectionLayout {
    fieldGroupName
    headingSubtitle
    headingTitle
    marginBottom
    marginTop
    paddingBottom
    paddingTop
    items {
      nodes {
        databaseId
        slug
        uri
        contentTypeName
        ... on Post {
          ...PostFragment
        }
        ... on Ecuadorian {
          ...EcuadorianFragment
        }
      }
    }
  }
  ${POST_FRAGMENT}
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
      ... on PageBuilderFieldsLayoutsSummaryCollectionLayout {
        ...SummaryCollectionFragment
      }
    }
  }
  ${BANNER_CAROUSEL_FRAGMENT}
  ${BIOGRAPHY_TAB_FRAGMENT}
  ${SUMMARY_COLLECTION_FRAGMENT}
  ${ECUADORIAN_FRAGMENT}
`;
