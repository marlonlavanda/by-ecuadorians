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
import { title } from "process";

const profileData = [
  {
    id: 1,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    image:
      "https://remezcla.com//wp-content/uploads/2018/09/jaramillo-918f07e42285bcdb63bb698f6b9c3d67-1200x800-1024x683.jpg",
  },
  {
    id: 2,
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    image:
      "https://remezcla.com//wp-content/uploads/2018/09/jaramillo-918f07e42285bcdb63bb698f6b9c3d67-1200x800-1024x683.jpg",
  },
  {
    id: 3,
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    image:
      "https://remezcla.com//wp-content/uploads/2018/09/jaramillo-918f07e42285bcdb63bb698f6b9c3d67-1200x800-1024x683.jpg",
  },
];
export default function ProfileAccordion() {
  const [image, setImage] = useState("");
  return (
    <section className="section">
      <div className="container">
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Profile Accordion
          </h2>
          <p className="text-sm text-muted-foreground">
            Your personal playlists. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row">
          <div className="w-1/2">
            <AspectRatio ratio={1 / 1}>
              <Image
                src="https://remezcla.com//wp-content/uploads/2018/09/jaramillo-918f07e42285bcdb63bb698f6b9c3d67-1200x800-1024x683.jpg"
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
                  <AccordionTrigger className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-gray-300 mb-1">
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
