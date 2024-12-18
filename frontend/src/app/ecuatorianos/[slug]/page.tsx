import getPostBySlug from "@/lib/queries/getPostBySlug";
import PageBuilder from "@/components/layouts/PageBuilder";
import PersonHeroBanner from "@/components/layouts/PersonHeroBanner/page";
export default async function Ecuatoriano({
  params,
}: {
  params: { slug: string };
}) {
  const postDetails = await getPostBySlug(params?.slug);

  const markup = { __html: postDetails?.content };
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
      <PageBuilder layouts={postDetails?.pageBuilderFields?.layouts} />
    </div>
  );
}
