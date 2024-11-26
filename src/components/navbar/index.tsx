import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRightLeft, MenuIcon, NewspaperIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto">
      <div className="flex items-center justify-between">
        <img src="/logo-nusadex-text.svg" alt="" className="w-[150px]" />
        <div className="flex items-start gap-3">
          <div className="lg:flex hidden  items-center gap-3">
            <Link
              href={"/"}
              className="font-medium hover:opacity-80 transition-opacity text-sm"
            >
              Tokens
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Trade</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-foreground text-background">
                    <NavigationMenuLink className="h-full">
                      <Link href={""}>
                        <div className="w-80 h-20 flex px-4 py-2 gap-5 justify-center items-center">
                          <div>
                            <ArrowRightLeft />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-medium">Swap</h4>
                            <p className="opacity-50 leading-snug">
                              exchange any token with our dex
                            </p>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>News</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-foreground text-background">
                    <NavigationMenuLink className="w-fit">
                      <Link href={""}>
                        <div className="flex h-20 w-52 px-4 py-2 gap-3 items-center justify-center">
                          <NewspaperIcon />
                          <p className="font-medium">All Trending News</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-3 items-center">
            <Button size={"sm"}>Connect Wallet</Button>
            <div className="lg:hidden block">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon size={28} />
                </SheetTrigger>
                <SheetContent side={"right"}>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="w-full flex flex-col items-start">
                        <h1 className="font-semibold">Menu</h1>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <h1 className="font-semibold opacity-50 hover:opacity-100 transition-opacity">
                                Tokens
                              </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                              <Link href={""}>
                                <h4 className="">View All Tokens</h4>
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>
                              <h1 className="font-semibold opacity-50 hover:opacity-100 transition-opacity">
                                Trade
                              </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                              <Link href={""}>
                                <h4 className="">Swap</h4>
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>
                              <h1 className="font-semibold opacity-50 hover:opacity-100 transition-opacity">
                                News
                              </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                              <Link href={""}>
                                <h4 className="">All Trending News</h4>
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
