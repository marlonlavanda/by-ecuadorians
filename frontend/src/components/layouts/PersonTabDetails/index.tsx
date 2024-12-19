import Image from "next/image";

import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Separator } from "@/components/ui/Separator";
import { AspectRatio } from "@/components/ui/AspectRatio";
export default function PersonTabDetails() {
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
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardContent className="p-4 pt-4 flex flex-row">
                <div className="w-full">
                  <AspectRatio ratio={18 / 8}>
                    <Image
                      src="https://remezcla.com//wp-content/uploads/2018/09/jaramillo-918f07e42285bcdb63bb698f6b9c3d67-1200x800-1024x683.jpg"
                      alt="Jaramillo"
                      fill
                      className="object-cover object-top rounded-tl-md"
                    />
                  </AspectRatio>
                </div>
                <div className="pl-6">
                  <p>
                    Sidebars are one of the most complex components to build.
                    They are central to any application and often contain a lot
                    of moving parts.
                  </p>
                  <p>
                    I don’t like building sidebars. So I built 30+ of them. All
                    kinds of configurations. Then I extracted the core
                    components into sidebar.tsx.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
