import getPostBySlug from "@/lib/queries/getPostBySlug";
import PageBuilder from "@/components/layouts/PageBuilder";
import PersonHeroBanner from "@/components/layouts/PersonHeroBanner";
import PersonTabDetails from "@/components/layouts/PersonTabDetails";
export default async function Ecuatoriano({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const postDetails = await getPostBySlug(slug);

  if (!postDetails) {
    return (
      <div>
        <h1>Not content Found</h1>
      </div>
    );
  }

  return (
    <div className="ecuatorianos-page-template">
      <PersonHeroBanner
        title={postDetails?.title}
        featuredImage={postDetails?.featuredImage}
        categories={postDetails?.categories}
      />
      <PersonTabDetails />
      <PageBuilder layouts={postDetails?.pageBuilderFields?.layouts} />
    </div>
  );
}
