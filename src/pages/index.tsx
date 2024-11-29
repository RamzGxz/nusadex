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
import Charts from "@/components/ui/charts";

export default function Home() {
  const [tokenList, setTokenList] = useState<ApiV3Token[]>([]);
  const getTokenList = async () => {
    try {
      const data = await token.list(50);
      if (data) {
        setTokenList(data.slice(0, 4));
      }
    } catch (error) {}
  };

  useEffect(() => {
    getTokenList();
  }, []);

  return (
    <div className="w-full space-y-32">
      {/* Section CTA */}

      <div
        className={`w-full flex items-center max-w-screen-lg mx-auto lg:flex-row flex-col lg:gap-0 gap-16 justify-between lg:h-[85vh] py-8`}
      >
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
        <div className="lg:w-1/2 w-full h-full flex justify-center items-center">
          <video
            className="first-img lg:w-[58%]"
            style={{ visibility: "visible" }}
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.okx.com/cdn/assets/imgs/243/F485DEA432C68FD9.png?x-oss-process=image/format,webp"
          >
            <source
              src="https://www.okx.com/cdn/assets/files/243/79620084DA93114F.webm"
              type="video/webm"
            />
            <source
              src="https://www.okx.com/cdn/assets/files/243/78FBA21FD210816A.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
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
                  <p className="font-medium text-xs">
                    {value.name && value.name.length > 10
                      ? value.name.slice(0, 10) + "..."
                      : value.name}
                  </p>
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
                <Charts />
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
        <div className="w-full flex flex-col gap-3">
          <p>Cryptocurrency Categories</p>
          <div className="w-full flex">
            <div className="flex gap-3 flex-wrap">
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Popular
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Metaverse
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Gaming
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Energy
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Meme
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                Music
              </button>
              <button className="border rounded-md p-2 bg-foreground/5 hover:bg-white hover:text-black hover:font-semibold">
                See All 12+
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-8 bg-foreground/5">
          <Table>
            <TableCaption>
              <button>View All</button>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">NO</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>LAST PRICE</TableHead>
                <TableHead>CHANGE</TableHead>
                <TableHead>MARKET STATS</TableHead>
                <TableHead className="text-right">TRADE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell className="flex items-center gap-3">
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="font-medium">Bitcoin | BTC</p>
                </TableCell>
                <TableCell>$56,623.54</TableCell>
                <TableCell>1.4%</TableCell>
                <TableCell>
                  <Charts />
                </TableCell>
                <TableCell className="text-right">
                  <Button>Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell className="flex items-center gap-3">
                  <img
                    src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="font-medium">Pavo Coin | PVO</p>
                </TableCell>
                <TableCell>$56,623</TableCell>
                <TableCell>1.5%</TableCell>
                <TableCell>
                  <Charts />
                </TableCell>
                <TableCell className="text-right">
                  <Button>Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell className="flex items-center gap-3">
                  <img
                    src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2F78v65lm9dbzcs74ne2vyra9zj3k2&w=64&q=75"
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="font-medium">Mudapedia | MUDA</p>
                </TableCell>
                <TableCell>$56</TableCell>
                <TableCell>5.41%</TableCell>
                <TableCell>
                  <Charts />
                </TableCell>
                <TableCell className="text-right">
                  <Button>Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell className="flex items-center gap-3">
                  <img
                    src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2Fam67zirk2xbaw0hhwupmxqdx7kgm&w=64&q=75"
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="font-medium">UIStellar | UTR</p>
                </TableCell>
                <TableCell>$59</TableCell>
                <TableCell>1.4%</TableCell>
                <TableCell>
                  <Charts />
                </TableCell>
                <TableCell className="text-right">
                  <Button>Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell className="flex items-center gap-3">
                  <img
                    src="https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2Fgx0p0a456zfixw9q34uwakay9qtc&w=64&q=75"
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="font-medium">Gasvin Coin | GASVIN</p>
                </TableCell>
                <TableCell>$59</TableCell>
                <TableCell>3.41%</TableCell>
                <TableCell>
                  <Charts />
                </TableCell>
                <TableCell className="text-right">
                  <Button>Trade</Button>
                </TableCell>
              </TableRow>
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
