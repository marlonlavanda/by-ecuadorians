import "./globals.css";
import getMenuBySlug from "@/graphql/queries/getMenuBySlug";

import Header from "@/components/ui/Header";
import Fotoer from "@/components/ui/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenuBySlug("header-menu");

  return (
    <html lang="es">
      <body>
        <div className="grid grid-rows-[auto_1fr] min-h-dvh">
          <Header menu={menu} />
          <main>{children}</main>
          <Fotoer />
        </div>
      </body>
    </html>
  );
}
