import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftRight, ChevronDown, MenuIcon, NewspaperIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModalConnectWallet from "../modals/connectWallet";


const Navbar = () => {

  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto">
      <div className="flex items-center justify-between">
        <img src="/logo-nusadex-text.svg" alt="" className="w-[150px]" />
        <div className="flex items-center gap-3">
          <div className="lg:flex hidden  items-center gap-3">
            <Link href={"/"} className="font-medium hover:opacity-80 transition-opacity text-sm pb-0" >
              Tokens
            </Link>
            <Link href={"/"} className="font-medium hover:opacity-80 transition-opacity text-sm pb-0" >
              Exchange
            </Link>
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 hover:opacity-80">
                    <p className="font-medium text-sm">Trade</p>
                    <ChevronDown size={20} strokeWidth={2} className="" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="mt-3">
                  <div className="space-y-5">
                    <Link href={'/'} className="flex items-center gap-3 hover:bg-muted-foreground/10 p-2 rounded-md">
                      <ArrowLeftRight strokeWidth={2} size={20} />
                      <div className="">
                        <p className="font-medium">Swap</p>
                        <p className="text-muted-foreground">Swap your token with low fee</p>
                      </div>
                    </Link>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 hover:opacity-80">
                    <p className="font-medium text-sm">News</p>
                    <ChevronDown size={20} strokeWidth={2} className="" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="mt-3">
                  <div className="space-y-5">
                    <Link href={'/'} className="flex items-center gap-3 hover:bg-muted-foreground/10 p-2 rounded-md">
                      <NewspaperIcon strokeWidth={2} size={20} />
                      <div className="">
                        <p className="font-medium">Trending</p>
                        <p className="text-muted-foreground">News trending of token</p>
                      </div>
                    </Link>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>

          <div className="flex gap-3 items-center">
            <ModalConnectWallet/>

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
