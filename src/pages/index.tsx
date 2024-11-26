import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BitcoinIcon,
  BookUserIcon,
  LibraryIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full space-y-32">
      {/* Section CTA */}

      <div className="flex flex-col w-full justify-center items-center gap-8 pt-20">
        <h1 className="text-2xl font-semibold">
          Start and Build Your Crypto Portfolio Here
        </h1>
        <p className="opacity-70 text-center">
          Only at CryptoCap, you can build a good portfolio and learn <br />
          best practices about cryptocurrency.
        </p>
        <Button className="mt-5" size={"lg"}>
          Get Started
        </Button>
      </div>

      {/* Section TRENDING */}

      <div className="w-full items-start flex flex-col gap-3">
        <h2 className="font-medium">Token Trends</h2>
        <div className="w-full grid grid-cols-4 gap-6">
          <div className="w-full border rounded-md p-3 bg-foreground/5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <p className="font-medium">PVO</p>
                <Badge>Pavo Coin</Badge>
              </div>
              <button className="bg-foreground/10 p-2 rounded-md hover:bg-foreground/20 transition-colors">
                <ArrowUpRightIcon size={24} />
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">$56,623.54</p>
                <p className="opacity-80">1.41%</p>
              </div>
              <img src="/chart-state 1.svg" alt="" />
            </div>
          </div>
          <div className="w-full border rounded-md p-3 bg-foreground/5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2F78v65lm9dbzcs74ne2vyra9zj3k2&w=64&q=75"
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <p className="font-medium">MUDA</p>
                <Badge>Mudapedia</Badge>
              </div>
              <button className="bg-foreground/10 p-2 rounded-md hover:bg-foreground/20 transition-colors">
                <ArrowUpRightIcon size={24} />
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">$56</p>
                <p className="opacity-80">5.41%</p>
              </div>
              <img src="/chart-state 1.svg" alt="" />
            </div>
          </div>
          <div className="w-full border rounded-md p-3 bg-foreground/5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2Fam67zirk2xbaw0hhwupmxqdx7kgm&w=64&q=75"
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <p className="font-medium">UTR</p>
                <Badge>UIStellar</Badge>
              </div>
              <button className="bg-foreground/10 p-2 rounded-md hover:bg-foreground/20 transition-colors">
                <ArrowUpRightIcon size={24} />
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">$59</p>
                <p className="opacity-80">3.51%</p>
              </div>
              <img src="/chart-state 1.svg" alt="" />
            </div>
          </div>
          <div className="w-full border rounded-md p-3 bg-foreground/5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2Fgx0p0a456zfixw9q34uwakay9qtc&w=64&q=75"
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <p className="font-medium">GASVIN</p>
                <Badge>Gasvin Coin</Badge>
              </div>
              <button className="bg-foreground/10 p-2 rounded-md hover:bg-foreground/20 transition-colors">
                <ArrowUpRightIcon size={24} />
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">$56,623</p>
                <p className="opacity-80">3.41%</p>
              </div>
              <img src="/chart-state 1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section Feature */}

      <div className="w-full flex flex-col justify-center items-center gap-[69px]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-semibold text-2xl">CryptoCap Amazing Faetures</h1>
          <p className="opacity-70">
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </p>
        </div>
        <div className="grid grid-cols-4 w-full gap-6">
          <div className="w-full border rounded-md bg-foreground/5 flex flex-col gap-10 p-3">
            <div className="flex flex-col items-start gap-7">
              <div className="flex border rounded-full bg-foreground/20 p-4 justify-center items-center">
                <LibraryIcon
                  className="text-background bg-foreground/80 border rounded-full p-2"
                  size={55}
                />
              </div>
              <h2 className="font-medium">Manage Portfolio</h2>
              <p className="opacity-80">
                Buy and sell popular digital
                <br />
                currencies, keep track of them in the one place.
              </p>
            </div>
            <Link href={""}>
              <div className="flex items-center gap-6 hover:text-foreground/50 transition-colors">
                <p>See Explained</p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div className="w-full border rounded-md bg-foreground/5 flex flex-col gap-10 p-3">
            <div className="flex flex-col items-start gap-7">
              <div className="flex border rounded-full bg-foreground/20 p-4 justify-center items-center">
                <ShieldCheckIcon
                  className="text-background bg-foreground/80 border rounded-full p-2"
                  size={55}
                />
              </div>
              <h2 className="font-medium">Protected Securely</h2>
              <p className="opacity-80">
                All cash balances are covered by <br />
                FDIC insurance, up to a maximum of $250,000.
              </p>
            </div>
            <Link href={""}>
              <div className="flex items-center gap-6 hover:text-foreground/50 transition-colors">
                <p>See Explained</p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div className="w-full border rounded-md bg-foreground/5 flex flex-col gap-10 p-3">
            <div className="flex flex-col items-start gap-7">
              <div className="flex border rounded-full bg-foreground/20 p-4 justify-center items-center">
                <BitcoinIcon
                  className="text-background bg-foreground/80 border rounded-full p-2"
                  size={55}
                />
              </div>
              <h2 className="font-medium">Cryptocurrency Variety</h2>
              <p className="opacity-80">
                Supports a variety of the most
                <br />
                popular digital currencies and always uptodate.
              </p>
            </div>
            <Link href={""}>
              <div className="flex items-center gap-6 hover:text-foreground/50 transition-colors">
                <p>See Explained</p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div className="w-full border rounded-md bg-foreground/5 flex flex-col gap-10 p-3">
            <div className="flex flex-col items-start gap-7">
              <div className="flex border rounded-full bg-foreground/20 p-4 justify-center items-center">
                <BookUserIcon
                  className="text-background bg-foreground/80 border rounded-full p-2"
                  size={55}
                />
              </div>
              <h2 className="font-medium">Learn Best Practice</h2>
              <p className="opacity-80">
                Easy to know how to
                <br />
                cryptocurrency works and friendly to newbie.
              </p>
            </div>
            <Link href={""}>
              <div className="flex items-center gap-6 hover:text-foreground/50 transition-colors">
                <p>See Explained</p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Market Update */}
    </div>
  );
}
