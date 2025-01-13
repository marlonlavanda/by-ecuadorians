import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Separator } from "@/components/ui/Separator";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { BiographyTabsFragment } from "@/lib/types";
import { cn } from "@/lib/utils";

type PersonTabDetailsProps = BiographyTabsFragment;

const TabContent = ({
  tabContent,
}: {
  tabContent: BiographyTabsFragment["addTab"][0]["tabContent"];
}) => (
  <>
    {tabContent.map((item, index) => (
      <div
        key={index}
        className="flex gap-4 odd:flex-row even:flex-row-reverse mb-4 last:mb-0"
      >
        <div className="w-1/2">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.image.node.sourceUrl}
              alt={item.image.node.altText}
              fill
              className="object-cover object-top"
            />
          </AspectRatio>
        </div>
        <div className="w-1/2">
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></div>
        </div>
      </div>
    ))}
  </>
);

export const PersonTabDetails = ({
  headingTitle,
  headingSubtitle,
  addTab,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
}: PersonTabDetailsProps) => {
  if (!addTab || addTab.length === 0) {
    return null; // Handle case where addTab is empty or undefined
  }

  const optionsClasses = [
    paddingTop ? `pad-top-${paddingTop}` : "",
    paddingBottom ? `pad-bot-${paddingBottom}` : "",
    marginTop ? `mar-top-${marginTop}` : "",
    marginBottom ? `mar-bot-${marginBottom}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={cn("section", optionsClasses)}>
      <div className="container">
        {(headingTitle || headingSubtitle) && (
          <>
            <div className="space-y-1">
              {headingTitle && (
                <h2 className="text-2xl font-semibold tracking-tight">
                  {headingTitle}
                </h2>
              )}
              {headingSubtitle && (
                <p className="text-sm text-muted-foreground">
                  {headingSubtitle}
                </p>
              )}
            </div>
            <Separator className="my-4" />
          </>
        )}
        <Tabs defaultValue={addTab[0].tabTitle}>
          <TabsList>
            {addTab.map((tab, index) => (
              <TabsTrigger key={index} value={tab.tabTitle}>
                {tab.tabTitle}
              </TabsTrigger>
            ))}
          </TabsList>
          {addTab.map((tab, index) => (
            <TabsContent key={index} value={tab.tabTitle}>
              <Card>
                <CardContent className="p-4 pt-4">
                  <TabContent tabContent={tab.tabContent} />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
