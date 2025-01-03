import { BannerCarousel } from "./BannerCarousel";
import { PersonTabDetails } from "@/components/layouts/PersonTabDetails";
function PageBuilder({ layouts }: { layouts: any }) {
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
      {/* {debugACF && (
        <pre>
          syng_page_layouts:
          <br />
          {JSON.stringify(layouts, null, 2)}
        </pre>
      )} */}
      {layouts.map((layout: any, index: number) => {
        switch (layout.fieldGroupName) {
          case "PageBuilderFieldsLayoutsBannerCarouselLayout":
            return (
              <BannerCarousel
                key={index}
                highlightedPosts={layout?.highlightedPosts}
              />
            );
          case "PageBuilderFieldsLayoutsBiographyTabsLayout":
            return (
              <PersonTabDetails
                key={index}
                addTab={layout?.addTab}
                paddingBottom={layout?.paddingBottom}
                paddingTop={layout?.paddingTop}
                marginBottom={layout?.marginBottom}
                marginTop={layout?.marginTop}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default PageBuilder;
