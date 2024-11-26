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
import { ArrowRightLeft, MenuIcon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <MenuIcon size={28} />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="">
            <Image src="/logo-nusadex-text.svg" alt="" width={150} height={300}/>
          </div>
        </div>

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
                        <div className="w-80 flex px-4 py-2  gap-3 items-center">
                          <div>
                            <ArrowRightLeft />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-medium">Swap</h4>
                            <p className="opacity-50">
                              swap any token across any network with OUR DEX
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
                        <div className="w-80 Flex"></div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button size={"sm"}>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
