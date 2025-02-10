import { notFound } from "next/navigation";

import getPageByURI from "@/lib/queries/getPageByURI";
import PageBuilder from "@/components/layouts/PageBuilder";

interface PageProps {
  params: {
    segments?: string[];
  };
}

export default async function Home({ params: { segments } }: PageProps) {
  const segmentName = segments?.length ? segments?.join("/") : "/";
  console.log(segmentName);
  const page = await getPageByURI(segmentName);
  if (!page) {
    notFound();
  }

  return (
    <div className="hompage-template">
      <PageBuilder layouts={page.pageBuilderFields?.layouts} />
    </div>
  );
}
