import { notFound } from "next/navigation"

export default async function Archive({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}