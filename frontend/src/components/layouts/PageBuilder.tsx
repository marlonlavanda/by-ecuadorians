import { BannerCarousel } from "./BannerCarousel";
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
                highlightedPosts={layout.highlightedPosts}
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
