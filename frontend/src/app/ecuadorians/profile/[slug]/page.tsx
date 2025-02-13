export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl">{slug}</h1>
      </div>
    </div>
  );
}
