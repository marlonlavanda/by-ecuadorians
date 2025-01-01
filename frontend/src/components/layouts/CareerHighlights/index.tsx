import { Separator } from "@/components/ui/Separator";
export default function CareerHighlights() {
  return (
    <section className="section">
      <div className="container">
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Carrer Highlights
          </h2>
          <p className="text-sm text-muted-foreground">
            Your personal playlists. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
      </div>
    </section>
  );
}
