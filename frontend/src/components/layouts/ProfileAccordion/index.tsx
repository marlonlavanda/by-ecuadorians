"use client";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/Separator";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const profileData = [
  {
    id: 1,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzoxouU7Y-PCj5GGO9DOUnSyvs3NYaU8TjA&s",
  },
  {
    id: 2,
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    coverImage:
      "https://codiscos-web-prd-files.panterweb.co/photos/77bf133c-0a94-4bf1-832e-d95c32cc6276.jpeg",
  },
  {
    id: 3,
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    coverImage:
      "https://www.ecuadortimes.net/wp-content/uploads/2017/08/ECUADORTIMES_ECUADORNEWS_JULIO_JARAMILLO_SALON_DE_LA_FAMA_COMPOSITORES_LATINOS_MIAMI.jpeg",
  },
];
export default function ProfileAccordion() {
  const [coverImage, setCoverImage] = useState(profileData[0].coverImage);
  const changeCoverImage = (id: number) => {
    profileData.map((item) => {
      if (item.id === id) {
        setCoverImage(item.coverImage);
      }
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Career Accordion
          </h2>
          <p className="text-sm text-muted-foreground">
            This component will be used to show professuibal career
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row">
          <div className="w-1/2">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={coverImage}
                alt="Jaramillo"
                fill
                className="object-cover object-top"
              />
            </AspectRatio>
          </div>
          <div className="w-1/2 pl-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {profileData.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger
                    onClick={() => changeCoverImage(item.id)}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-gray-300 mb-1"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
