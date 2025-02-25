import { notFound } from "next/navigation";

import getPageByURI from "@/graphql/queries/getPageByURI";
import PageBuilder from "@/components/layouts/PageBuilder";
interface PageProps {
  params: Promise<{
    segments?: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { segments } = await params;
  const segmentName = segments?.length ? segments.join("/") : "/";
  const page = await getPageByURI(segmentName);
  if (!page) {
    notFound();
  }

  return (
    <div className={`${page.slug}-template`}>
      <PageBuilder layouts={page.pageBuilderFields?.layouts} />
    </div>
  );
}
