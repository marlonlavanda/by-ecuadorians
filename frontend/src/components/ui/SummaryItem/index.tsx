import Image from "next/image";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { SummaryItemProps } from "./SummaryItem.types";

export default function SummaryItem({ item }: SummaryItemProps) {
  return (
    <Card key={item.id} className="border-none shadow-none">
      <CardContent className="p-0">
        <div>
          <AspectRatio ratio={1 / 1}>
            <Image
              fill
              src={item?.featuredImage?.node?.sourceUrl}
              alt={item?.featuredImage?.node?.altText}
              className="object-cover object-top"
            />
          </AspectRatio>
        </div>
        <div className="mt-4">
          <CardTitle className="text-xl">{item.title}</CardTitle>
          <CardDescription className="mt-4 text-secondary-foreground font-light">
            {item.excerpt}
          </CardDescription>
          <div className="mt-2">
            <span className="text-muted-foreground text-sm font-bold">
              by Marlon Lavanda
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
