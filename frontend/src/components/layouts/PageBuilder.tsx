import { BannerCarousel } from "./BannerCarousel";
function PageBuilder({ layouts }: { layouts: any }) {
  if (!layouts) {
    return <p>No layouts found</p>;
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
