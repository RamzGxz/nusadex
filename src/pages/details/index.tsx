import {
  CirclePlusIcon,
  CopyIcon,
  EarthIcon,
  Mouse,
  SettingsIcon,
  StarIcon,
  UploadIcon,
  User,
  UsersIcon,
  Wallet,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { TokenSearch } from "@/components/ui/search-input";
import { Votes } from "@/components/details/votes";
import TransactionTable from "@/components/details/transaction-table";
import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

export default function index() {
  return (
    <>
      <div className="w-full flex items-center justify-between py-2 ">
        <div className="flex flex-1 items-center justify-between ">
          <div className="flex items-center pr-4 ">
            <div className="flex relative ">
              <div className="flex-wrap ">
                <img
                  src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex absolute  -bottom-1 -right-1 ">
                <img
                  src="https://logos-world.net/wp-content/uploads/2024/01/Solana-Logo.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="flex flex-col shrink ml-5 ">
              <div className=" flex items-center">
                <div className="inline-flex text-xl font-bold text-[#fff]">
                  PavoCoin
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <StarIcon width={16} height={16} className="text-[#909090]" />
                  <UploadIcon
                    width={16}
                    height={16}
                    className="text-[#909090]"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <div className="flex items-center text-sm">
                  <span className="text-[#909090]">GzY1Kbkg...dDVuvPma</span>
                  <CopyIcon
                    width={16}
                    height={16}
                    className="ml-1 text-[#909090]"
                  />
                </div>
                <div className="bg-[#2e2e2e] h-3 w-[1px] mx-1"></div>
                <div className="flex flex-wrap text-xs font-medium gap-2">
                  <div className="flex items-center gap-1 rounded bg-[#1a1a1a] py-1 px-2  ">
                    <Mouse className="text-sm h-[14px]" />
                    <div>
                      Suspicious : <span className="text-[#95F121]">2.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-[#1a1a1a] py-1 px-2  ">
                    <CirclePlusIcon className="text-sm h-[14px]" />
                    <div>
                      Snipers : <span className="text-[#95F121]">0 / 1</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-[#1a1a1a] py-1 px-2  ">
                    <UsersIcon className="text-sm h-[14px]" />
                    <div>
                      Top Holders :{" "}
                      <span className="text-[#95F121]">15.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center rounded bg-[#1a1a1a]  gap-0 p-0">
                    <div className="py-1 px-[6px]">
                      <a href="">
                        <EarthIcon className="text-sm h-[14px]" />
                      </a>
                    </div>
                    <div className="bg-[#6c6c6c] h-3 w-[1px]"></div>
                    <div className="py-1 px-[6px]">
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram text-sm h-[16px]"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                        </svg>
                      </a>
                    </div>
                    <div className="bg-[#6c6c6c] h-3 w-[1px]"></div>
                    <div className="py-1 px-[6px]">
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x text-sm h-[16px]"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold overflow-hidden text-right text-ellipsis">
              $0.124
            </span>
            <div className="text-sm text-right">
              <div className="text-[#ca3f64]">+25.15%</div>
            </div>
          </div>
        </div>
        <div className="ml-0 pl-80">
          <SettingsIcon />
        </div>
      </div>
      <div className="flex flex-row h-[calc(100vh - 118px)] mt-[2px] min-[500px] border-t-2 border-b-2 border-[#6c6c6c]">
        <div className="flex flex-1 gap-[2px]">
          <div className="flex flex-col gap-1 w-[280px] order-1  border-r-2 border-[#6c6c6c]">
            <div className="flex-1 pt-4">
              <div className="min-h-[120px] overflow-hidden">
                <Tabs defaultValue="trending" className="w-[280px] px-2">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="trending"
                      className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                    >
                      Trending
                    </TabsTrigger>
                    <TabsTrigger
                      value="watchlist"
                      className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                    >
                      Watchlist
                    </TabsTrigger>
                  </TabsList>
                  <div className="mt-2 mx-4 mb-4">
                    <div className="bg-[#1a1a1a] border-transparent box-s"></div>
                  </div>
                  <div className="max-w-xl mx-auto">
                    <TokenSearch
                      className="w-full"
                      onSearch={(value) => {
                        console.log("Searching for: ", value);
                      }}
                    />
                  </div>
                  <TabsContent value="trending">
                    <div className="flex justify-between cursor-default py-2">
                      <div className="text-xs font-normal text-ellipsis text-[#909090]">
                        Nama
                      </div>
                      <div className="text-xs font-normal text-ellipsis text-[#909090]">
                        Harga/perubahan 24 jam
                      </div>
                    </div>
                    <div className="h-[calc(100vh - 400px)] overflow-auto">
                      <a href="">
                        <div className="grid grid-col-[calc(64% - 8px) 36%] gap-2 cursor-pointer py-2">
                          <div className="flex items-center h-7">
                            <StarIcon className="text-[#6c6c6c] cursor-pointer text-sm h-[16px]" />
                            <div className="flex flex-1 w-full max-w-full ml-2">
                              <div className="flex relative">
                                <div className="flex-wrap">
                                  <img
                                    src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                  />
                                </div>
                                <div className="flex absolute bottom-1 -right-1">
                                  <img
                                    src="https://logos-world.net/wp-content/uploads/2024/01/Solana-Logo.png"
                                    alt=""
                                    width={22}
                                    height={22}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col ml-3 overflow-hidden">
                                <div className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap	text-[#fff]">
                                  PavoCoin
                                </div>
                                <div className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap	text-[#909090]">
                                  Solana
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold overflow-hidden text-right text-ellipsis">
                                $0.124
                              </span>
                              <div className="text-sm text-right">
                                <div className="text-[#ca3f64]">+25.15%</div>
                              </div>
                            </div>
                            <div className="text-right"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </TabsContent>
                  <TabsContent value="watchlist">
                    <div className="my-14">
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
                </Tabs>
              </div>
            </div>
            <div className="min-h-[120px] overflow-hidden border-t-2 border-[#6c6c6c]">
              <div className="px-2 py-5">
                <div className="">
                  <div className="flex justify-between mb-4">
                    <div className="text-base font-bold ">Suara</div>
                    <div className="flex items-center text-base font-bold">
                      <User className="mr-1 text-sm h-[16px]" />
                      <span className="text-sm font-medium">200</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <Votes />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mid */}
          <div className="flex flex-col w-[790px] order-2">
            <div className="flex flex-1 m-2 pt-4 border border-white justify-center items-center">
              Chart
            </div>
            <div className="min-h-[120px] overflow-hidden p-2">
              <Tabs defaultValue="history" className="w-full">
                <TabsList>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                  >
                    History
                  </TabsTrigger>
                  <TabsTrigger
                    value="liquidity-change"
                    className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                  >
                    Liquidity Change
                  </TabsTrigger>
                  <TabsTrigger
                    value="my-position"
                    className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                  >
                    My Position
                  </TabsTrigger>
                  <TabsTrigger
                    value="holders"
                    className="data-[state=active]:bg-[#95F121] data-[state=active]:text-[#09090B]"
                  >
                    Holders
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="history">
                  <TransactionTable />
                </TabsContent>
                <TabsContent value="liquidity-change">
                  Change your password here.
                </TabsContent>
                <TabsContent value="my-position">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="holders">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
          {/* Right */}
          <div className="order-3 border border-white">Hai</div>
        </div>
      </div>
    </>
  );
}
