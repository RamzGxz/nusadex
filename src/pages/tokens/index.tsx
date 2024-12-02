import React from "react";

import {
  ChartNoAxesCombined,
  Copy,
  Filter,
  Flame,
  Search,
  Sprout,
  Star,
  Trash,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button";


const CoinsDetails = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png" alt="" className="h-10 w-10 rounded-full"/>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Coin Name</div>
        <div className="text-sm text-slate-600 flex gap-1 box-content items-center">
          Coin Address
          <span className="box-content">
            <Copy className="h-4 w-4 "/>
          </span>
        </div>
      </div>
    </div>
  );
};

const Txns = () => {
  return (
    <div>
      <div>
        155.49K
      </div>
      <div>
        <span className="text-xs text-green-600">
          77.10K
        </span>
        /
        <span className="text-xs text-red-600">
          74.66K
        </span>
      </div>
    </div>
  );
};



const Tokens = () => {
  return (
    <>
    {/* tokens search */}
      <div className="flex w-full justify-between">
        <div className="flex gap-4 text-xl">
          <a href="">Tokens</a>
          <a href="">Watchlist</a>
        </div>

        <div className="flex border-2 border-white rounded-full items-center">
          <span className="mx-1">
            <Search />
          </span>
          <input
            className="bg-transparent text-sm w-60 focus:outline-none"
            type="search"
            name=""
            id=""
            placeholder="Search token name or address"
          />
        </div>
      </div>
    {/* shorting bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <div className="flex">
            <Button variant={'ghost'}>1m</Button>
            <Button variant={'ghost'}>1h</Button>
            <Button variant={'ghost'}>4h</Button>
            <Button variant={'ghost'}>24</Button>
          </div>

          <div className="flex gap-1 items-center">
            <div className="flex px-4 py-2 gap-1">
              <Button variant="ghost">
                <Flame />
                <div>Trending</div>
              </Button>
              <Button variant="ghost">
                <ChartNoAxesCombined />
                <div>Top searches</div>
              </Button>
              <Button variant="ghost">
                <Sprout/>
                <div>Newest</div>
              </Button>
            </div>

          <div className="flex">
            <Select>
              <SelectTrigger className="w-auto border-none">
                <SelectValue placeholder="Liquidity ≥ $5K" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col p-2">
                  <div className="text-xs text-gray-600 mb-2">
                    Liquidity $10k
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button className="border-white" variant={"outline"}>
                      $10k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $50k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $100k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $500k
                    </Button>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="box-content p-2 border-[1px] rounded-full flex justify-center items-center">
                      <Trash className="w-auto h-auto" />
                    </div>
                    <Button className="w-full rounded-full" variant={"outline"}>Aplly</Button>
                  </div>
                </div>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-auto border-none">
                <SelectValue placeholder="Turnover ≥ $10K" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col p-2">
                  <div className="text-xs text-gray-600 mb-2">
                    Liquidity $10k
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button className="border-white" variant={"outline"}>
                      $10k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $50k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $100k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $500k
                    </Button>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="box-content p-2 border-[1px] rounded-full flex justify-center items-center">
                      <Trash className="w-auto h-auto" />
                    </div>
                    <Button className="w-full rounded-full" variant={"outline"}>Aplly</Button>
                  </div>
                </div>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-auto border-none">
                <SelectValue placeholder="Market cap" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col p-2">
                  <div className="text-xs text-gray-600 mb-2">
                    Liquidity $10k
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button className="border-white" variant={"outline"}>
                      $10k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $50k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $100k
                    </Button>
                    <Button className="border-white" variant={"outline"}>
                      $500k
                    </Button>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <input
                        className="focus:outline-none w-full py-1 px-2 rounded-sm"
                        type="text"
                        name=""
                        id=""
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="box-content p-2 border-[1px] rounded-full flex justify-center items-center">
                      <Trash className="w-auto h-auto" />
                    </div>
                    <Button className="w-full rounded-full" variant={"outline"}>Aplly</Button>
                  </div>
                </div>
              </SelectContent>
            </Select>
          </div>
          </div>

        </div>
        
        <div className="flex gap-1 items-end">
          <Button variant={'ghost'}>
          <span className="box-content">
            <Filter className="w-5 h-5"/>
          </span>
          <div>Filter</div>
          </Button>
        </div>

      </div>
    {/* table */}
      <div>
        <Table>
          <TableHeader>
            <TableHead><span className="mr-4">#</span>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change %</TableHead>
            <TableHead>Txns</TableHead>
            <TableHead>Unique traders</TableHead>
            <TableHead>Holders</TableHead>
            <TableHead>Turnover</TableHead>
            <TableHead>Market cap</TableHead>
            <TableHead>Liquidity</TableHead>
            <TableHead>Liquidity</TableHead>
            <TableHead>Token Age</TableHead>
            <TableHead>Auidit</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <Star/>
                  <CoinsDetails/>
                </div>
              </TableCell>
              <TableCell>
                $123.25K
              </TableCell>
              <TableCell>
                -18.93%
              </TableCell>
              <TableCell>
                <Txns/>
              </TableCell>
              <TableCell>
                32.02K
              </TableCell>
              <TableCell>
                90.88K
              </TableCell>
              <TableCell>
                150.88M
              </TableCell>
              <TableCell>
                400.88M
              </TableCell>
              <TableCell>
                650.88M
              </TableCell>
              <TableCell>
                4M
              </TableCell>
              <TableCell>
                4M
              </TableCell>
              <TableCell>
                Audit??
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Tokens;