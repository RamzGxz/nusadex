import DialogLiquidityDetails from "@/components/details/dialogLiquidityDetails";
import HistoryTabs from "@/components/details/history-tabs";
import HolderTabs from "@/components/details/holder-tabs";
import LiquidityChangeTabs from "@/components/details/liq-change-tabs";
import SheetAudit from "@/components/details/sheetAudit";
import { Votes } from "@/components/details/votes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { TokenSearch } from "@/components/ui/search-input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import token from "@/lib/sdk/tokens";
import { ApiV3Token } from "@raydium-io/raydium-sdk-v2";
import {
  ChevronRight, Copy,
  Earth,
  LoaderCircle,
  Mouse,
  PlusCircle, ShieldAlertIcon,
  Star, User
} from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useEffect, useState } from "react";

export default function index() {
  const { id } = useRouter().query
  const [tokenInfo, setTokenInfo] = useState<ApiV3Token>({} as ApiV3Token)
  const [trendingToken, setTrendingToken] = useState<ApiV3Token[]>([])
  const [tokenPrice, setTokenPrice] = useState(0)

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Copied!')
      })
      .catch((error) => {
        toast.error("Failed to copy!");
      });
  }

  const getInfo = async () => {
    try {
      const data = await token.getTokenInfo(String(id && id))
      setTokenInfo(data[0])

    } catch (error) {
      console.log(error)
      toast.error('Failed to get token info!')
    }
  }

  const getTrendingToken = async () => {
    try {
      const data = await token.list(150)
      if (data) {
        setTrendingToken(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTokenPrice = async () => {
    try {
      const resp = await token.getPrice(String(id))
      setTokenPrice(Number(resp))
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      getInfo()
      getTrendingToken()
      getTokenPrice()
    }
  }, [id])

  return (
    <>
      {id !== undefined ? (
        <>
          <Head>
            <title>{tokenInfo.name} {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tokenPrice)} | Nusadex Trading</title>
          </Head>
          <div className="w-full h-full lg:pt-3 py-6 space-y-5">
            <div className="flex justify-between lg:items-center items-start">
              <div className="flex lg:items-end items-start lg:flex-row flex-col gap-3">
                <div className=" flex items-center gap-3">
                  <Button variant={'outline'} size={'icon'}>
                    <Star />
                  </Button>
                  <div className="flex items-center gap-2">
                    <img src={tokenInfo.logoURI} alt="" className="w-14 h-14 object-cover rounded-full p-1" />
                    <div className="space-y-0 leading-snug">
                      <p>{tokenInfo.name}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground font-light">{String(id).slice(0, 5) + '...' + String(id).slice(-5)}</p>
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger onClick={() => handleCopy(String(id && id))}><Copy strokeWidth={1} size={14} /></TooltipTrigger>
                            <TooltipContent>
                              <p>Copy</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Separator orientation="vertical" className="h-5 lg:block hidden" />
                  <div className="flex items-center gap-2">
                    <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                      <Mouse strokeWidth={1.5} size={14} />
                      <p className="text-xs lg:block hidden">Suspicious : </p>
                      <p className="text-[#95F121] text-xs">2.5%</p>
                    </div>
                    <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                      <PlusCircle strokeWidth={1.5} size={14} />
                      <p className="text-xs lg:block hidden">Sniper : </p>
                      <p className="text-[#95F121] text-xs">2.5%</p>
                    </div>
                    <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                      <User strokeWidth={1.5} size={14} />
                      <p className="text-xs lg:block hidden">Top holder :</p>
                      <p className="text-[#95F121] text-xs">2.5%</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#2e2e2e] px-2 py-1 rounded-md">
                      <button>
                        <Earth size={14} />
                      </button>
                      <Separator orientation="vertical" className="h-4 lg:block hidden" />
                      <button className="lg:block hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram text-sm h-[16px]">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                        </svg>
                      </button>
                      <Separator orientation="vertical" className="h-4 lg:block hidden" />

                      <button className="lg:block hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x text-sm h-[16px]">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="space-y-0 text-sm">
                  <p className="font-light">Price</p>
                  <p className="font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tokenPrice)}</p>
                </div>
                <div className="space-y-0 text-sm lg:block hidden">
                  <p className="font-light">Market Cap</p>
                  <p className="font-semibold">$174.58M</p>
                </div>
                <div className="space-y-0 text-sm lg:block hidden">
                  <p>Liquidity</p>
                  <p className="font-semibold">$174.58M</p>
                </div>
                <div className="space-y-0 text-sm lg:block hidden">
                  <p>Holders</p>
                  <p className="font-semibold">$174.58M</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex-row flex-col lg:gap-0 gap-5 flex items-start justify-between">
              {/* left */}
              <div className="w-[20%] h-[80vh] border-t border-r p-2 lg:block hidden">
                <Tabs defaultValue="trending" className="w-full space-y-3">
                  <TabsList className=" w-full justify-start">
                    <TabsTrigger value="trending" className="w-full data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                      Trending
                    </TabsTrigger>
                    <TabsTrigger value="watchlist" className=" w-full data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                      Watchlist
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="trending">
                    <div className="w-full space-y-3">
                      <TokenSearch />
                      <div className="w-full max-h-[50vh] overflow-auto">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="text-xs">Token/Mcap</TableHead>
                              <TableHead className="text-end text-xs">Price/Change</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {trendingToken && trendingToken.length > 0 && trendingToken.filter(item => item.name !== '').map((item, index) => (
                              <TableRow key={index} className="border-b-0 cursor-pointer" onClick={() => location.href = `/tokens/details/${item.address}`}>
                                <TableCell className="text-xs">
                                  <div className="flex items-center gap-2">
                                    <img src={item.logoURI} alt="" className="w-8 h-8 rounded-full object-cover" />
                                    <div>
                                      <p className="font-semibold">{item.symbol}</p>
                                      <p className="font-normal text-muted-foreground">$21.92M</p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="text-end">
                                  <div>
                                    <p className="font-semibold">$0.0025</p>
                                    <p className="text-xs text-green-500">+1,830.02%</p>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="w-full space-y-3">
                        <div className="flex w-full items-center justify-between">
                          <p>Votes</p>
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <p>0</p>
                          </div>
                        </div>
                        <Votes />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="watchlist">
                    <div className="">
                      <div className="flex items-center justify-center flex-col">
                        <div className="text-center">
                          <img src="/wallet-crypto.png" alt="wallet-cryptos" className="h-[72px] mx-auto" />
                          <div className="text-lg mt-2">Watchlist empty</div>
                          <div className="text-xs mt-2">
                            Connect your wallet to manage Watchlist.
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-5">
                        <Button className="mx-auto">Connect wallet</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

              </div>

              {/* middle */}
              <div className="lg:w-[60%] w-full lg:h-[80vh] h-full lg:border-t lg:border-r">
                <div className="w-full h-[40vh] ">
                  <iframe src={`https://birdeye.so/tv-widget/${id && id}?chain=solana&viewMode=pair&chartInterval=1&chartType=Candle&chartLeftToolbar=show&theme=dark&cssCustomProperties=--tv-color-platform-background%3A%2309090b&cssCustomProperties=--tv-color-pane-background%3A%2309090b&chartOverrides=paneProperties.backgroundType%3Asolid&chartOverrides=paneProperties.background%3Argba%289%2C+9%2C+11%2C+1%29`} className='w-full h-full' allowFullScreen loading='lazy' />
                </div>
                <div className="w-full p-2 h-fit">
                  <Tabs defaultValue="history" className="w-full">
                    <TabsList className="bg-transparent border-b-2 w-full justify-start rounded-none pb-2">
                      <TabsTrigger value="history" className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                        History
                      </TabsTrigger>
                      <TabsTrigger value="liquidity-change" className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                        Liquidity Change
                      </TabsTrigger>
                      <TabsTrigger value="my-position" className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                        My Position
                      </TabsTrigger>
                      <TabsTrigger value="holders" className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                        Holders
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="history">
                      <HistoryTabs />
                    </TabsContent>
                    <TabsContent value="liquidity-change">
                      <LiquidityChangeTabs />
                    </TabsContent>
                    <TabsContent value="my-position">
                      <div className="">
                        <div className="flex items-center justify-center flex-col">
                          <div className="text-center">
                            <img
                              src="/wallet-crypto.png"
                              alt="wallet-cryptos"
                              className="h-[72px] mx-auto"
                            />
                            <div className="text-lg mt-2">Watchlist empty</div>
                            <div className="text-xs mt-2">
                              Connect your wallet to manage Watchlist.
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-5">
                          <Button className="mx-auto">Connect wallet</Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="holders">
                      <HolderTabs />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* right */}
              <div className="lg:w-[20%] w-full lg:max-h-[80vh] overflow-auto border-t px-2 pt-2 space-y-3">
                <h1 className="text-lg font-semibold">Trade</h1>
                <Tabs defaultValue="buy" className="">
                  <TabsList className="w-full">
                    <TabsTrigger value="buy" className="w-full data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]">
                      Buy
                    </TabsTrigger>
                    <TabsTrigger value="sell" className="w-full data-[state=active]:bg-red-500 data-[state=active]:text-white">
                      Sell
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="buy">
                    <div className="space-y-3">
                      <h1 className="text-sm font-semibold">Total (SOL)</h1>
                      <Input type="number" placeholder="Enter amount of SOL" />
                      <div className="flex items-center w-full justify-between gap-3">
                        <Button variant={'outline'} size={'sm'} className="w-full">0.1</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">0.5</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">1</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">MAX</Button>
                      </div>
                      <Button className="w-full">Trade</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="sell">
                    <div className="space-y-3">
                      <h1 className="text-sm font-semibold">Amount ({tokenInfo.symbol})</h1>
                      <Input type="number" placeholder="Enter amount of DRUGS" />
                      <div className="flex items-center w-full justify-between gap-3">
                        <Button variant={'outline'} size={'sm'} className="w-full">25%</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">50%</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">75%</Button>
                        <Button variant={'outline'} size={'sm'} className="w-full">MAX</Button>
                      </div>
                      <h1 className="text-sm font-semibold">Total (SOL)</h1>
                      <Input type="number" placeholder="Total SOL Recieved" />
                      <Button className="w-full">Trade</Button>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="space-y-3 w-full border-t pt-3">
                  <h1 className="text-lg font-semibold">Transaction Info</h1>
                  <div className="w-full flex justify-between gap-3">
                    <Button variant={'secondary'} size={'sm'} className="w-full">5M</Button>
                    <Button variant={'secondary'} size={'sm'} className="w-full">15M</Button>
                    <Button variant={'secondary'} size={'sm'} className="w-full">1H</Button>
                    <Button variant={'secondary'} size={'sm'} className="w-full">24H</Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h1>Transactions: 33</h1>
                      <Progress value={33} />
                      <p className="text-xs font-light">Buys (33)</p>
                    </div>
                    <div className="space-y-1">
                      <h1>Turnover: 450K</h1>
                      <Progress value={88} />
                      <p className="text-xs font-light">Buy value (33k)</p>
                    </div>
                    <div className="space-y-1">
                      <h1>Trader: 33</h1>
                      <Progress value={33} />
                      <p className="text-xs font-light">Buyers (33)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <img src={tokenInfo.logoURI} alt="" className="w-14 h-14 object-cover rounded-full p-1" />
                    <div className="space-y-0 leading-snug">
                      <p className="">{tokenInfo.symbol}</p>
                      <p className="text-muted-foreground text-sm">{tokenInfo.name}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">

                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Audit</p>
                      <SheetAudit />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Market Cap</p>
                      <p className="text-xs">$133K</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Holders</p>
                      <p className="text-xs">100K</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Liquidity</p>
                      <DialogLiquidityDetails image={tokenInfo.logoURI} name={tokenInfo.name} />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Circulating Supply</p>
                      <p className="text-xs">$150K</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-0.5 p-2 bg-secondary rounded-md">
                      <p className="text-xs text-muted-foreground">Maximum Supply</p>
                      <p className="text-xs">$150K</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="flex items-center gap-3">
            <LoaderCircle size={32} className="animate-spin" />
            <p className="">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
}
