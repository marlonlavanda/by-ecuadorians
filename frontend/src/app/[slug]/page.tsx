export default async function Archive({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>{params?.slug}</h1>
    </div>
  );
}
