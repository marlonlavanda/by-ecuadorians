"use client";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Menu } from "@/types";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/NavigationMenu";
import { useMedia } from "@/hooks/useMedia";

const headerSectionStyles = cva(
  "section py-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border"
);
const headerContainerStyles = cva(
  "container flex justify-between items-center"
);

export default function Header({ menu }: { menu: Menu }) {
  const { isDesktop } = useMedia();

  return (
    <header className={cn("header__section", headerSectionStyles())}>
      <div className={cn("header__container", headerContainerStyles())}>
        <div className="text-2xl lowercase">
          by <span className="font-bold">ecuadorians</span>
        </div>
        {isDesktop && (
          <NavigationMenu>
            <NavigationMenuList>
              {menu.menuItems.nodes.map((item) => (
                <NavigationMenuItem key={item.databaseId}>
                  <Link href={item.uri} legacyBehavior passHref>
                    <NavigationMenuLink>{item.label}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
}
