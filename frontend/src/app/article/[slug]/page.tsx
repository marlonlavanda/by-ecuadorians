interface ArticleProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;

  return (
    <div className="profile-page-template">
      <h1 className="text-3xl">{slug}</h1>
    </div>
  );
}
