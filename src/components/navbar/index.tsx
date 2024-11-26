import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto'>
      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-3'>

          <div className='lg:hidden block'>
            <Sheet >
              <SheetTrigger><MenuIcon size={28} /></SheetTrigger>
              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <h1 className='text-2xl font-bold'>Logo</h1>
        </div>

        <div className='flex items-start gap-3'>
          <div className='lg:flex hidden  items-center gap-3'>
          <Link href={'/'} className='font-medium hover:opacity-80 transition-opacity text-sm'>Tokens</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Trade</NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-foreground text-background'>
                    <NavigationMenuLink className='h-full'>Trade content</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>News</NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-foreground text-background'>
                    <NavigationMenuLink className='w-fit'>News Content</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button size={'sm'}>Connect Wallet</Button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;