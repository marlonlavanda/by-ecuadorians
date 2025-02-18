import { notFound } from "next/navigation";

import getProfileBySlug from "@/graphql/queries/getProfileBySlug";
import HeroBanner from "@/components/layouts/HeroBanner";
import PageBuilder from "@/components/layouts/PageBuilder";

interface ProfileProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Profile({ params }: ProfileProps) {
  const { slug } = await params;

  const profile = await getProfileBySlug(slug);
  if (!profile) {
    notFound();
  }

  return (
    <div className="profile-page-template">
      <HeroBanner
        title={profile?.title}
        featuredImage={profile?.featuredImage}
        categories={profile?.categories}
      />
      <PageBuilder layouts={profile.pageBuilderFields?.layouts} />
    </div>
  );
}
