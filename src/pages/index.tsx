import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BitcoinIcon,
  BookUserIcon,
  CircleDollarSignIcon,
  LibraryIcon,
  ShieldCheckIcon,
  UserPenIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import token from "@/lib/sdk/tokens";
import { useEffect, useState } from "react";
import { ApiV3Token } from "@raydium-io/raydium-sdk-v2";

export default function Home() {
  const [tokenList, setTokenList] = useState<ApiV3Token[]>([]);
  const getTokenList = async () => {
    try {
      const data = await token.list(50);
      if (data) {
        setTokenList(data.filter(item => item.name !== '').slice(0, 4));
      }
    } catch (error) { }
  };

  useEffect(() => {
    getTokenList();
  }, []);

  return (
    <div className="w-full space-y-32 max-w-screen-xl xl:px-0 mx-auto">
      {/* Section CTA */}
      <div className={`lg:w-3/4 w-full mx-auto flex items-center lg:flex-row flex-col lg:gap-0 gap-16 justify-between lg:h-[85vh] py-8`}>
        <div className="space-y-8 text-left lg:w-1/2 w-full">
          <h1 className="text-5xl font-semibold leading-snug">
            Start and Build Your Crypto Portfolio Here
          </h1>
          <p className="opacity-70">
            Only at CryptoCap, you can build a good portfolio and learn <br />
            best practices about cryptocurrency.
          </p>
          <Button className="mt-5" size={"lg"}>
            Get Started
          </Button>
        </div>
        <div className="lg:w-1/2 w-full h-full flex justify-end items-center">
          <video className="first-img lg:w-[55%]" style={{ visibility: 'visible' }} autoPlay loop muted playsInline poster="https://www.okx.com/cdn/assets/imgs/243/F485DEA432C68FD9.png?x-oss-process=image/format,webp"><source src="https://www.okx.com/cdn/assets/files/243/79620084DA93114F.webm" type="video/webm" /><source src="https://www.okx.com/cdn/assets/files/243/78FBA21FD210816A.mp4" type="video/mp4" /><track kind="captions" /></video>
        </div>
      </div>

      {/* Section TRENDING */}
      <div className="w-full items-start flex flex-col gap-3">
        <h2 className="font-medium">Token Trends</h2>
        <div className="w-full grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
          {tokenList.map((value) => (
            <div className="w-full border rounded-md p-3 bg-foreground/5 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={value.logoURI}
                    alt=""
                    className="w-10 h-10 object-cover"
                  />
                  <p className="font-medium text-xs">{value.name && value.name.length > 10 ? value.name.slice(0, 10) + '...' : value.name}</p>
                  <Badge className="text-xs max-w-24">{value.symbol}</Badge>
                </div>
                <button className="bg-foreground/10 p-2 rounded-md hover:bg-foreground/20 transition-colors">
                  <ArrowUpRightIcon size={24} />
                </button>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{value.decimals}</p>
                  <p className="opacity-80">1.41%</p>
                </div>
                <img src="/chart-state 1.svg" alt="" />
              </div>
            </div>
          ))}
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
        <div className="grid lg:grid-cols-4 w-full gap-6 md:grid-cols-3 sm:grid-cols-2">
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

      {/* Section Register New Koin */}
      <div className="w-full flex py-5 items-center">
        <div className="w-full flex flex-col gap-3">
          <h2 className="font-semibold">Register your coins now!</h2>
          <p className="opacity-70">
            List your coins and enjoy skyrocketing profits, a strong community
            <br />
            and proven security. Don't miss this opportunity!
          </p>
        </div>
        <Button>Register Now</Button>
      </div>

      {/* Market Update */}
      <div className="w-full flex flex-col gap-8">
        <div className="w-full items-start">
          <h1 className="font-semibold text-2xl">Market Update</h1>
        </div>

        <div className="border rounded-lg p-3 bg-foreground/5">
          <Table>
            <TableCaption>
              <Link href={'/tokens'} className="text-sm">View All</Link>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px] lg:table-cell hidden">NO</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>LAST PRICE</TableHead>
                <TableHead className="lg:table-cell hidden  ">CHANGE</TableHead>
                <TableHead className="lg:table-cell hidden">MARKET STATS</TableHead>
                <TableHead className="text-right">TRADE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 4 }, (_v, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium lg:table-cell hidden">{i + 1}</TableCell>
                  <TableCell className="flex items-center gap-3">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                      alt=""
                      className="w-8 h-8 object-cover"
                    />
                    <p className="font-medium">Bitcoin | BTC</p>
                  </TableCell>
                  <TableCell>$56,623.54</TableCell>
                  <TableCell className="lg:table-cell hidden">1.4%</TableCell>
                  <TableCell className="lg:table-cell hidden">
                    <img src="/chart-btc-landingPage.svg" alt="" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size={'sm'}>Trade</Button>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </div>
      </div>

      {/* Get Started Tutorial */}
      <div className="w-full flex justify-between lg:flex-row flex-col gap-5">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl font-semibold">How To Get Started</h1>
          <p className="opacity-70">
            Simple and easy way to start your investment
            <br />
            in cryptocurrency
          </p>
          <div className="items-start">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 border rounded-lg bg-foreground/5 p-4">
            <div className="bg-foreground/20 p-5 border rounded-full">
              <UserPenIcon
                size={45}
                className="bg-foreground/100 text-[#434344] border rounded-full p-2"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">Create Your Account</h2>
              <p className="opacity-70">
                Your account and personal identity are <br />
                guaranteed safe.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border rounded-lg bg-foreground/5 p-4">
            <div className="bg-foreground/20 p-5 border rounded-full">
              <WalletIcon
                size={45}
                className="bg-foreground/100 text-[#434344] border rounded-full p-2"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">Create Your Account</h2>
              <p className="opacity-70">
                Connect the bank account to start transactions.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border rounded-lg bg-foreground/5 p-4">
            <div className="bg-foreground/20 p-5 border rounded-full">
              <CircleDollarSignIcon
                size={45}
                className="bg-foreground/100 text-[#434344] border rounded-full p-2"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">Create Your Account</h2>
              <p className="opacity-70">
                Buy and sell popular currencies and keep track <br />
                of them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
