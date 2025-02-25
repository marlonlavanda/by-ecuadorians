import { Separator } from "@/components/ui/Separator";
import SummaryItem from "@/components/ui/SummaryItem";
import { SummaryCollectionProps } from "./SummaryCollectionGrid.types";

const collection = [
  {
    id: 1,
    title:
      "BBC's Funboys are taking the Northern Irish culture boom in a fresh, weird direction",
    excerpt:
      "The lads behind the new comedy series tell us how they went from putting sketches on YouTube to mainstream success",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzoxouU7Y-PCj5GGO9DOUnSyvs3NYaU8TjA&s",
  },
  {
    id: 2,
    title: "Is it styled?",
    excerpt:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    coverImage:
      "https://codiscos-web-prd-files.panterweb.co/photos/77bf133c-0a94-4bf1-832e-d95c32cc6276.jpeg",
  },
  {
    id: 3,
    title: "Is it animated?",
    excerpt:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    coverImage:
      "https://www.ecuadortimes.net/wp-content/uploads/2017/08/ECUADORTIMES_ECUADORNEWS_JULIO_JARAMILLO_SALON_DE_LA_FAMA_COMPOSITORES_LATINOS_MIAMI.jpeg",
  },
  {
    id: 4,
    title:
      "BBC's Funboys are taking the Northern Irish culture boom in a fresh, weird direction",
    excerpt:
      "The lads behind the new comedy series tell us how they went from putting sketches on YouTube to mainstream success",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzoxouU7Y-PCj5GGO9DOUnSyvs3NYaU8TjA&s",
  },
];

export const SummaryCollectionGrid = ({
  headingTitle,
  headingSubtitle,
  items,
}: SummaryCollectionProps) => {
  return (
    <div className="section mt-8">
      <div className="container">
        <div className="space-y-1">
          <h3 className="tracking-tight mb-0">{headingTitle}</h3>
          {headingSubtitle && (
            <p className="text-sm text-muted-foreground">{headingSubtitle} </p>
          )}
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6">
          {items.nodes.map((item) => (
            <SummaryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
