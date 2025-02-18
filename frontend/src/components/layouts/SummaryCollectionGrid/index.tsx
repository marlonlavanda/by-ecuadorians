import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";

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
export default function SummaryCollectionGrid() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl">Summary Collection Grid</h1>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 gap-6">
          {collection.map((item) => (
            <Card key={item.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div>
                  <img src={item.coverImage} alt={item.title} />
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
