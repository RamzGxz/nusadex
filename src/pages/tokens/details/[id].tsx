import {
  Circle,
  CirclePlus,
  Copy,
  Earth,
  Mouse,
  PlusCircle,
  Settings,
  Star,
  Upload,
  User,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { TokenSearch } from "@/components/ui/search-input";
import { Votes } from "@/components/details/votes";
import { Button } from "@/components/ui/button";
import HistoryTabs from "@/components/details/history-tabs";
import LiquidityChangeTabs from "@/components/details/liq-change-tabs";
import HolderTabs from "@/components/details/holder-tabs";
import Head from "next/head";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SwapComponents from "@/components/swap";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
// import { useEffect, useState } from "react";

export default function index() {
  const textToCopy = "GzY1Kbkg...dDVuvPma"
  const handleCopy = () => {
    // Salin teks ke clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Teks berhasil disalin!");
      })
      .catch((error) => {
        console.error("Gagal menyalin teks: ", error);
      });
  };

  const { id } = useRouter().query

  return (
    <>
      <Head>
        <title>VANA $1010 (Vana) | Nusadex Trading</title>
      </Head>
      <div className="w-full h-full pt-3 space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button variant={'outline'} size={'icon'}>
              <Star />
            </Button>
            <div className="flex items-center gap-2">
              <img src="https://www.okx.com/cdn/web3/currency/token/default-logo/token_custom_logo_default_V.png/type=default_350_0" alt="" className="w-14 h-14 object-cover rounded-full p-1" />
              <div className="space-y-0 leading-snug">
                <p>Token Name</p>
                <div className="flex items-center gap-2">
                  <p className="text-muted-foreground font-light">2b1k...oawowo</p>
                  <TooltipProvider delayDuration={50}>
                    <Tooltip>
                      <TooltipTrigger><Copy strokeWidth={1} size={14} /></TooltipTrigger>
                      <TooltipContent>
                        <p>Copy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Separator orientation="vertical" className="h-5" />
                  <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                    <Mouse strokeWidth={1.5} size={14} />
                    <p className="text-xs">Suspicious : <span className="text-[#95F121]">2.5%</span></p>
                  </div>
                  <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                    <PlusCircle strokeWidth={1.5} size={14} />
                    <p className="text-xs">Sniper : <span className="text-[#95F121]">2.5%</span></p>
                  </div>
                  <div className="px-2 flex items-center gap-1 py-1 bg-[#2e2e2e] rounded-md">
                    <User strokeWidth={1.5} size={14} />
                    <p className="text-xs">Top holder : <span className="text-[#95F121]">2.5%</span></p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#2e2e2e] px-2 py-1 rounded-md">
                    <button>
                      <Earth size={14} />
                    </button>
                    <Separator orientation="vertical" className="h-4" />
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram text-sm h-[16px]">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                      </svg>
                    </button>
                    <Separator orientation="vertical" className="h-4" />

                    <button>
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
          </div>
          <div className="flex items-center gap-5">
            <div className="space-y-0 text-sm">
              <p className="font-light">Price</p>
              <p className="font-semibold">$0.1</p>
            </div>
            <div className="space-y-0 text-sm">
              <p className="font-light">Market Cap</p>
              <p className="font-semibold">$174.58M</p>
            </div>
            <div className="space-y-0 text-sm">
              <p>Liquidity</p>
              <p className="font-semibold">$174.58M</p>
            </div>
            <div className="space-y-0 text-sm">
              <p>Holders</p>
              <p className="font-semibold">$174.58M</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-between">
          {/* left */}
          <div className="w-[20%] h-[80vh] border-t border-r p-2">
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
                        {Array.from({ length: 10 }, (_v, i) => (
                          <TableRow key={i} className="border-b-0">
                            <TableCell className="text-xs">
                              <div className="flex items-center gap-2">
                                <img src="https://www.okx.com/cdn/web3/currency/token/501-CX9YDTED9TWgVXVoFy8JL9gSSAEWcTv4mzjLSv17LQsj-98.png/type=default_350_0?v=1734151286849" alt="" className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                  <p className="font-semibold">DRUGS</p>
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
                        <User size={16} />
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
          <div className="w-[60%] h-[80vh] border-t border-r">
            <div className="w-full h-[40vh] ">
              {/* <iframe src={`https://birdeye.so/tv-widget/${id && id}?chain=solana&viewMode=pair&chartInterval=1&chartType=Candle&chartLeftToolbar=show&theme=dark&cssCustomProperties=--tv-color-platform-background%3A%2309090b&cssCustomProperties=--tv-color-pane-background%3A%2309090b&chartOverrides=paneProperties.backgroundType%3Asolid&chartOverrides=paneProperties.background%3Argba%289%2C+9%2C+11%2C+1%29`} className='w-full h-full' allowFullScreen loading='lazy' /> */}
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
          <div className="w-[20%] h-[80vh] border-t ps-2 pt-2 space-y-3">
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
                  <h1 className="text-sm font-semibold">Amount (DRUGS)</h1>
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
          </div>
        </div>
      </div>
    </>
  );
}
