import {
  CirclePlusIcon,
  CopyIcon,
  EarthIcon,
  Mouse,
  SettingsIcon,
  StarIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { TokenSearch } from "@/components/ui/search-input";
// import { useEffect, useState } from "react";

export default function index() {
  return (
    <>
      <div className="w-full flex items-center justify-between py-2 border border-white">
        <div className="flex flex-1 items-center justify-between border border-white">
          <div className="flex items-center pr-4 border-white">
            <div className="flex relative border border-white">
              <div className="flex-wrap border border-white">
                <img
                  src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex absolute  -bottom-1 -right-1 border border-white">
                <img
                  src="https://logos-world.net/wp-content/uploads/2024/01/Solana-Logo.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="flex flex-col shrink ml-5 border border-white">
              <div className=" flex items-center">
                <div className="inline-flex text-xl font-bold">PavoCoin</div>
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
      <div className="flex flex-row h-[calc(100vh - 118px)] mt-[2px] min-[500px] border-t-2 border-[#6c6c6c]">
        <div className="flex flex-1 gap-[2px] border border-white">
          <div className="flex flex-col gap-1 w-[280px] order-1 border border-white">
            <div className="flex-1 pt-4 border border-white"></div>
            <div className="min-h-[120px] overflow-hidden border border-white">
              <Tabs defaultValue="trending" className="w-[280px]">
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
                <TabsContent value="trending"></TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
