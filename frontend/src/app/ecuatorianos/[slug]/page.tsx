import getEcuadorianBySlug from "@/lib/queries/getEcuadorianBySlug";
import PageBuilder from "@/components/layouts/PageBuilder";
import PersonHeroBanner from "@/components/layouts/PersonHeroBanner";
import ProfileAccordion from "@/components/layouts/ProfileAccordion";
export default async function Ecuatoriano({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const ecuadorianDetails = await getEcuadorianBySlug(slug);
  console.log(ecuadorianDetails);
  if (!ecuadorianDetails) {
    return (
      <div>
        <h1>Not content Found</h1>
      </div>
    );
  }

  return (
    <div className="ecuatorianos-page-template">
      <PersonHeroBanner
        title={ecuadorianDetails?.title}
        featuredImage={ecuadorianDetails?.featuredImage}
        categories={ecuadorianDetails?.categories}
      />
      <PageBuilder layouts={ecuadorianDetails?.pageBuilderFields?.layouts} />
    </div>
  );
}
