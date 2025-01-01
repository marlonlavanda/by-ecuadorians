export default async function Archive({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
