
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/Button";
import getPageBySlug from "@/lib/queries/getPageBySlug";
import PageBuilder from "@/components/layouts/PageBuilder";

export default async  function Home() {
  const homepage = await getPageBySlug("homepage")
  if (!homepage) {
    notFound()
  }

  return (
    <div className="hompage-template">
        <PageBuilder layouts={homepage.pageBuilderFields?.layouts} />
    </div>
  );
}
