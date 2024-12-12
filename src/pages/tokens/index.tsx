import React from "react";

import {
  ChartNoAxesCombined,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  Copy,
  Filter,
  Flame,
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import "@/styles/noscrollbar.css"


const CoinsDetails = () => {
  return (
    <div className="flex gap-2 items-center">
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

interface TableSortProps {
  label: string;
}

const TableSort = ({ label }: TableSortProps) => {
  return(
    <>
      <Button variant={"ghost"}>
      <div className="flex items-center gap-1">
        <div className="-ml-4">
          {label}
        </div>
        <div className="flex flex-col">
          <ChevronUp className="w-4 h-4 -mb-1"/>
          <ChevronDown className="w-4 h-4"/>
        </div>
      </div>
      </Button>
    </>
  )
}

const TokensTable = () => {
  return(
    <div>
    <Table className="overflow-auto no-scrollbar">
      <TableHeader>
        <TableRow>             
          <TableHead className="min-w-52"><span className="mr-4">#</span>Name</TableHead>
          <TableHead>
            <TableSort label="Price"/>
          </TableHead>
          <TableHead>
            <TableSort label="Change (%)"/>
          </TableHead>
          <TableHead>
            <TableSort label="Txns"/>
          </TableHead>
          <TableHead>
            <TableSort label="Unique traders"/>
          </TableHead>
          <TableHead>
            <TableSort label="Holders"/>
          </TableHead>
          <TableHead>
            <TableSort label="Turnover"/>
          </TableHead>
          <TableHead>
            <TableSort label="Market cap"/>
          </TableHead>
          <TableHead>
            <TableSort label="Liquidity"/>
          </TableHead>
          <TableHead>
            <TableSort label="Token Age"/>
          </TableHead>
          <TableHead>
            Auidit
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex gap-5 items-center">
              <Star className="flex-shrink-0 w-4"/>
              <CoinsDetails/>
            </div>
          </TableCell>
          <TableCell >
            $123.25K
          </TableCell>
          <TableCell >
            -18.93%
          </TableCell>
          <TableCell >
            <Txns/>
          </TableCell>
          <TableCell >
            32.02K
          </TableCell>
          <TableCell >
            90.88K
          </TableCell>
          <TableCell >
            150.88M
          </TableCell>
          <TableCell >
            400.88M
          </TableCell>
          <TableCell >
            650.88M
          </TableCell>
          <TableCell >
            4M
          </TableCell>
          <TableCell>
            <ShieldCheck className="text-green-600"/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
  )
}

const SearchTokens = () => {
  return(
    <Sheet>
    <SheetTrigger>
      <div className="flex w-fit sm:w-80 py-1 sm:border-[0.5px] border-opacity-10 border-white rounded-full items-center sm:hover:outline sm:hover:outline-1 hover:outline-white">
        <span className="ml-[8px] mr-1">
          <Search className="w-5"/>
        </span>
        <input
          className="hidden sm:block bg-transparent text-sm sm:w-full  focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search token name or address"
        />
      </div>
    </SheetTrigger>
    <SheetContent side="bottom" className="h-4/5">
      <div className="flex w-full mb-5 py-1 border-b-[0.5px] border-opacity-10 border-white items-center">
        <span className="ml-[8px] mr-1">
          <Search className="w-5"/>
        </span>
        <input
          className="bg-transparent text-sm w-60 focus:outline-none "
          type="search"
          name=""
          id=""
          placeholder="Search token name or address"
        />
      </div>
      <div className="mb-2">
        Top Search
      </div>
      <Table className="overflow-auto no-scrollbar">
        <TableHeader>
          <TableHead className="w-10">
            #
          </TableHead>
          <TableHead className="min-w-52">
            Name
          </TableHead>
          <TableHead className="w-1/5 min-w-24">
            Price
          </TableHead>
          <TableHead className="w-1/5 min-w-32">
            24h Change
          </TableHead>
          <TableHead className="w-1/5 min-w-24">
            Watchlist
          </TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              1
            </TableCell>
            <TableCell>
              <CoinsDetails/>
            </TableCell>
            <TableCell>
              111k
            </TableCell>
            <TableCell>
              -4.5%
            </TableCell>
            <TableCell>
              <Star className="w-4"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </SheetContent>
  </Sheet>
  )
}

const SortingTokens = () => {
  return(
    <div className="flex items-center justify-between overflow-auto no-scrollbar">
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
  )
}


const Tokens = () => {
  return (
    <>
      <div className="flex w-full justify-between mt-10">
        <div className="flex gap-6 text-xl">
          <a href="" className="hover:border-b-2 hover:border-white text-white">Tokens</a>
          <a href="" className="text-slate-400 hover:border-b-2 hover:border-white hover:text-white">Watchlist</a>
        </div>
      <SearchTokens/>
      </div>
      <SortingTokens/>
      <TokensTable/>
    </>
  );
};

export default Tokens;