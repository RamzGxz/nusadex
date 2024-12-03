import React from "react";

import {
  ChartNoAxesCombined,
  CircleAlert,
  Copy,
  Filter,
  Flame,
  Ghost,
  Search,
  ShieldCheck,
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
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";


const CoinsDetails = () => {
  return (
    <div className="flex gap-2 items-center min-w-52">
      <div className="flex-shrink-0">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png" alt="" className="h-10 w-10 rounded-full"/>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Coin Name</div>
        <div className="text-sm text-slate-600 flex gap-1 box-content items-center">
          Coin Address
          <span className="">
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
      <div className="flex items-center justify-between overflow-auto">
        <div className="flex items-center text-sm">
          <div className="flex">
            <Button variant={'ghost'}>1m</Button>
            <Button variant={'ghost'}>1h</Button>
            <Button variant={'ghost'}>4h</Button>
            <Button variant={'ghost'}>24</Button>
          </div>
          <div className="text-slate-500">
            |
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
          <div className="text-slate-500">
            |
          </div>

          <div className="flex">
            <Select>
              <SelectTrigger className="w-auto border-none">
                <SelectValue placeholder="Liquidity" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col p-2">
                  <div className="text-xs text-gray-600 mb-2">
                    Liquidity
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button variant={"outline"}>
                      ≥ $10k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $50k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $100k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $500k
                    </Button>
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={"outline"} size={"icon"} className="rounded-full flex-shrink-0">
                      <Trash className="w-5 h-5"/>
                    </Button>
                    <Button className="w-full rounded-full" variant={"outline"}>Aplly</Button>
                  </div>
                </div>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-auto border-none">
                <SelectValue placeholder="Turnover" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col p-2">
                  <div className="text-xs text-gray-600 mb-2">
                    Turnover
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button variant={"outline"}>
                      ≥ $10k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $50k
                    </Button>
                    <Button variant={"outline"}>
                        ≥ $100k
                    </Button>
                    <Button variant={"outline"}>
                        ≥ $500k
                    </Button>
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={"outline"} size={"icon"} className="rounded-full flex-shrink-0">
                      <Trash className="w-5 h-5"/>
                    </Button>
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
                    Market cap
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                    <Button variant={"outline"}>
                      ≥ $10k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $50k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $100k
                    </Button>
                    <Button variant={"outline"}>
                      ≥ $500k
                    </Button>
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={"outline"} size={"icon"} className="rounded-full flex-shrink-0">
                      <Trash className="w-5 h-5"/>
                    </Button>
                    <Button className="w-full rounded-full" variant={"outline"}>Aplly</Button>
                  </div>
                </div>
              </SelectContent>
            </Select>
          </div>
          </div>
        </div>
        
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'}>
                <span className="box-content">
                  <Filter className="w-5 h-5"/>
                </span>
                <div>Filter</div>
              </Button>
            </SheetTrigger>
            <SheetContent className="!w-[500px] !max-w-full overflow-auto" >
              <SheetHeader>
                <SheetTitle className="mb-6 text-xl">
                  Custom filters
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 mb-3">
                <div className="flex justify-between items-center">
                  <div>
                    Period
                  </div>
                    <div className="flex">
                      <Button variant={'ghost'}>1m</Button>
                      <Button variant={'ghost'}>1h</Button>
                      <Button variant={'ghost'}>4h</Button>
                      <Button variant={'ghost'}>24</Button>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Charge (%)
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Transactions
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Unique traders
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Trading volume
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Holders
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Turnover ($)
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Market cap ($)
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    FDV ($)
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Liquidity ($)
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    Token age
                  </div>
                  <div className="flex gap-2 w-2/3">
                    <Input type="text" placeholder="Min"/>
                    <Input type="text" placeholder="Max"/>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Periode"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="m">
                            Minutes
                          </SelectItem>
                          <SelectItem value="h">
                            Hours
                          </SelectItem>
                          <SelectItem value="W">
                            Day
                          </SelectItem>
                          <SelectItem value="M">
                            Month
                          </SelectItem>
                          <SelectItem value="Y">
                            Year
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <label htmlFor="riskTokens" className="flex gap-2 items-center">
                    Hide risky tokens 
                    <span> 
                      <CircleAlert className="w-4 h-4"/> 
                    </span>
                  </label>
                  <Switch id="riskTokens"/>
                </div>

                <div className="flex justify-between">
                  <label htmlFor="riskTokens" className="flex gap-2 items-center">
                    Hide stablecoins
                    <span> 
                      <CircleAlert className="w-4 h-4"/> 
                    </span>
                  </label>
                  <Switch id="riskTokens"/>
                </div>
              </div>

              <SheetFooter>
                <div className="w-full flex items-center gap-2">
                  <Button variant={"outline"} size={"icon"} className="rounded-full flex-shrink-0">
                    <Trash className="w-5 h-5"/>
                  </Button>
                  <div className="flex-grow grid grid-cols-2 gap-2">
                    <Button variant={"outline"} className="rounded-full">
                      Riset
                    </Button>
                    <Button variant={"outline"} className="rounded-full">
                      Filter
                    </Button>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    {/* table */}
      <div>
        <Table className="overflow-auto">
          <TableHeader>
            <TableRow>             
              <TableHead className="whitespace-nowrap"><span className="mr-4">#</span>Name</TableHead>
              <TableHead className="whitespace-nowrap">Price</TableHead>
              <TableHead className="whitespace-nowrap">Change (%)</TableHead>
              <TableHead className="whitespace-nowrap">Txns</TableHead>
              <TableHead className="whitespace-nowrap">Unique traders</TableHead>
              <TableHead className="whitespace-nowrap">Holders</TableHead>
              <TableHead className="whitespace-nowrap">Turnover</TableHead>
              <TableHead className="whitespace-nowrap">Market cap</TableHead>
              <TableHead className="whitespace-nowrap">Liquidity</TableHead>
              <TableHead className="whitespace-nowrap">Liquidity</TableHead>
              <TableHead className="whitespace-nowrap">Token Age</TableHead>
              <TableHead className="whitespace-nowrap">Auidit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                <div className="flex gap-5 items-center">
                  <Star className="flex-shrink-0 w-4"/>
                  <CoinsDetails/>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">
                $123.25K
              </TableCell>
              <TableCell className="whitespace-nowrap">
                -18.93%
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <Txns/>
              </TableCell>
              <TableCell className="whitespace-nowrap">
                32.02K
              </TableCell>
              <TableCell className="whitespace-nowrap">
                90.88K
              </TableCell>
              <TableCell className="whitespace-nowrap">
                150.88M
              </TableCell>
              <TableCell className="whitespace-nowrap">
                400.88M
              </TableCell>
              <TableCell className="whitespace-nowrap">
                650.88M
              </TableCell>
              <TableCell className="whitespace-nowrap">
                4M
              </TableCell>
              <TableCell className="whitespace-nowrap">
                4M
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <ShieldCheck className="text-green-600"/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Tokens;