import { JSX } from "react";
import { BannerCarousel } from "./BannerCarousel";
import { PersonTabDetails } from "@/components/layouts/PersonTabDetails";
import { BannerCarouselLayout, BiographyTabsLayout } from "@/types";

type Layout = BannerCarouselLayout | BiographyTabsLayout;

// Define the props for the PageBuilder component.
interface PageBuilderProps {
  layouts?: Layout[];
}

// Helper render function for BannerCarousel layout.
const renderBannerCarousel = (
  layout: BannerCarouselLayout,
  index: number
): JSX.Element => (
  <BannerCarousel key={index} highlightedPosts={layout.highlightedPosts} />
);

// Helper render function for BiographyTabs layout.
const renderBiographyTabs = (
  layout: BiographyTabsLayout,
  index: number
): JSX.Element => (
  <PersonTabDetails
    key={index}
    headingTitle={layout.headingTitle}
    headingSubtitle={layout.headingSubtitle}
    addTab={layout.addTab}
    paddingBottom={layout.paddingBottom}
    paddingTop={layout.paddingTop}
    marginBottom={layout.marginBottom}
    marginTop={layout.marginTop}
  />
);

// Mapping layout type identifiers to their respective rendering functions.
const layoutRenderers: Record<
  string,
  (layout: Layout, index: number) => JSX.Element | null
> = {
  PageBuilderFieldsLayoutsBannerCarouselLayout: (layout, index) =>
    renderBannerCarousel(layout as BannerCarouselLayout, index),
  PageBuilderFieldsLayoutsBiographyTabsLayout: (layout, index) =>
    renderBiographyTabs(layout as BiographyTabsLayout, index),
  // ...add new layout renderers here...
};

const PageBuilder: React.FC<PageBuilderProps> = ({ layouts }) => {
  if (!layouts) {
    return (
      <section className="section">
        <div className="container">
          <h4>Oops!</h4>
          <h1>No layouts found</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      {layouts.map((layout, index) =>
        layoutRenderers[layout.fieldGroupName]
          ? layoutRenderers[layout.fieldGroupName](layout, index)
          : null
      )}
    </>
  );
};

export default PageBuilder;
