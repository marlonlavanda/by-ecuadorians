import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Separator } from "@/components/ui/Separator";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { BiographyTabsFragment } from "@/lib/types";

type PersonTabDetailsProps = BiographyTabsFragment;

export const PersonTabDetails = ({
  addTab,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
}: PersonTabDetailsProps) => {
  return (
    <section className="section">
      <div className="container">
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Biografía</h2>
          <p className="text-sm text-muted-foreground">
            Your personal playlists. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
        <Tabs defaultValue={addTab[0].tabTitle}>
          <TabsList>
            {addTab.map((tab) => (
              <TabsTrigger value={tab.tabTitle}>{tab.tabTitle}</TabsTrigger>
            ))}
          </TabsList>
          {addTab.map((tab) => (
            <TabsContent value={tab.tabTitle}>
              <Card>
                <CardContent className="p-4 pt-4 ">
                  {tab.tabContent.map((item) => (
                    <div className="flex flex-row">
                      <div className="w-1/2">
                        <AspectRatio ratio={1 / 1}>
                          <Image
                            src={item.image.node.sourceUrl}
                            alt={item.image.node.altText}
                            fill
                            className="object-cover object-top rounded-tl-md"
                          />
                        </AspectRatio>
                      </div>
                      <div className="w-1/2 pl-6">
                        <div
                          className="wysiwyg"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
