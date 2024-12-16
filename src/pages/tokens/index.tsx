
import {
  ChartNoAxesCombined,
  ChevronDown, CircleAlert,
  Copy,
  Edit2Icon,
  Filter,
  Flame,
  Search,
  ShieldCheck,
  Sprout,
  Star,
  Trash
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem, SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWallet } from "@solana/wallet-adapter-react";
import ModalConnectWallet from "@/components/modals/connectWallet";
import { ApiV3Token } from "@raydium-io/raydium-sdk-v2";
import token from "@/lib/sdk/tokens";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";




interface TableSortProps {
  label: string;
}

const TableSort = ({ label }: TableSortProps) => {
  return (
    <>
      <Button variant={"ghost"} className="hover:bg-transparent p-0 w-fit">
        <div className="flex items-center gap-1">
          <div className="font-light">
            {label}
          </div>
          <div className="flex flex-col gap-0">
            {/* <ChevronUp size={10} className="w-1 h-2 -mb-1" /> */}
            <ChevronDown size={10} className="w-1 h-2 font-light " strokeWidth={1} />
          </div>
        </div>
      </Button>
    </>
  )
}

const TokensTable = ({ data }: { data: ApiV3Token[] }) => {
  return (
    <div className="max-h-[70vh] overflow-auto">
      <Table className="">
        <TableHeader className="sticky top-0 bg-background">
          <TableRow>
            {/* <TableHead className="lg:table-cell hidden"></TableHead> */}
            <TableHead className="font-light">Name</TableHead>
            <TableHead className="text-end"><TableSort label="Price" /></TableHead>
            <TableHead className="text-end"><TableSort label="Change (%)" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Txns" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Unique traders" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Holders" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Turnover" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Market cap" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Liquidity" /></TableHead>
            <TableHead className="lg:table-cell hidden text-end"><TableSort label="Token Age" /></TableHead>
            <TableHead className="font-light lg:table-cell hidden text-end">Auidit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? data.filter(item => item.name !== '').map((item, index) => (
            <TableRow key={index} className="cursor-pointer" onClick={() => location.href = `/tokens/details/${item.address}`}>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink-0">
                      <img src={item.logoURI} alt={item.name} className="h-8 w-8 rounded-full" />
                    </div>
                    <div className=" space-y-0">
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-slate-600 flex gap-1 box-content items-center">
                        {item.address.slice(0, 5) + '...' + item.address.slice(-5)}
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end">$123.25K</TableCell>
              <TableCell className="text-end">-18.93%</TableCell>
              <TableCell className="lg:table-cell hidden text-end">
                <div className="space-y-1.5">
                  <p>155.49K</p>
                  <p className="text-xs"><span className="text-xs text-green-500">77.10K</span> / <span className="text-red-500">4.66K</span></p>
                </div>
              </TableCell>
              <TableCell className="lg:table-cell hidden text-center">32.02K</TableCell>
              <TableCell className="lg:table-cell hidden text-center">90.88K</TableCell>
              <TableCell className="lg:table-cell hidden text-center">150.88M</TableCell>
              <TableCell className="lg:table-cell hidden text-center">400.88M</TableCell>
              <TableCell className="lg:table-cell hidden text-center">650.88M</TableCell>
              <TableCell className="lg:table-cell hidden text-center">4M</TableCell>
              <TableCell className="lg:table-cell hidden text-end">
                <div className="w-full flex justify-end">
                  <ShieldCheck className="text-green-600" />
                </div>
              </TableCell>
            </TableRow>
          )) : (
            Array.from({ length: 6 }, (_v, i) => (
              <TableRow className="cursor-pointer" key={i}>
                <TableCell>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-3 items-center">
                      <div className="flex-shrink-0">
                        <Skeleton className="w-8 h-8 rounded-full" />
                      </div>
                      <div className="space-y-1">
                        <Skeleton className="w-24 h-2" />
                        <Skeleton className="w-16 h-2" />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-end"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="text-end"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-end">
                  <div className="space-y-1.5">
                    <Skeleton className="w-10 h-2" />
                  </div>
                </TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-center"><Skeleton className="w-10 h-2" /></TableCell>
                <TableCell className="lg:table-cell hidden text-end">
                  <Skeleton className="w-10 h-2" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

      </Table>
    </div>
  )
}

const SearchTokens = ({ data }: { data: ApiV3Token[] }) => {
  const [sheetOpen, setSheetOpen] = useState(false)
  let [tokensDefault, setTokensDefault] = useState<ApiV3Token[]>(data.slice(0, 4))
  const [searchValue, setSearchValue] = useState('')

  const searchToken = async () => {
    try {
      const data = await token.getTokenInfo(searchValue)
      if (data) {
        setTokensDefault(data)
        console.log(data)
      } else {
        toast.error('Cannot get token token info!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (searchValue !== '' && searchValue.length === 44) {
      searchToken()
    } else {
      setTokensDefault(data.slice(0, 4))
    }
  }, [searchValue])

  useEffect(() => {
    if (!sheetOpen) {
      setTokensDefault(data.slice(0, 4))
      setSearchValue('')
    }
  }, [sheetOpen])

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <Button variant={'outline'} className="sm:w-80 justify-start" onClick={() => setSheetOpen(true)}>
        <span className="">
          <Search className="w-5" />
        </span>
        <p className="lg:block md:block hidden">Search token address</p>
      </Button>
      <SheetContent side="bottom" className="h-[50vh]">
        <div className="flex w-full mb-5 py-1 border-b-[0.5px] border-opacity-10 border-white items-center">
          <span className="ml-[8px] mr-3">
            <Search className="w-4" />
          </span>
          <input
            className="bg-transparent text-sm w-full focus:outline-none "
            type="search"
            name=""
            id=""
            placeholder="Search token address"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="mb-2">
          Top Search
        </div>
        <div className="max-h-[35vh] overflow-auto">
          <Table className="overflow-auto no-scrollbar">
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                {/* <TableHead className="lg:table-cell hidden"></TableHead> */}
                <TableHead className="font-light">Name</TableHead>
                <TableHead className="text-end"><TableSort label="Price" /></TableHead>
                <TableHead className="text-end"><TableSort label="Change (%)" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Txns" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Unique traders" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Holders" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Turnover" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Market cap" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Liquidity" /></TableHead>
                <TableHead className="lg:table-cell hidden text-end"><TableSort label="Token Age" /></TableHead>
                <TableHead className="font-light lg:table-cell hidden text-end">Auidit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokensDefault.filter(item => item.name !== '').map((item, index) => (
                <TableRow key={index} className="cursor-pointer" onClick={() => window.open(`/tokens/details/${item.address}`)}>
                  <TableCell>
                    <div className="flex gap-5 items-center">
                      <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0">
                          <img src={item.logoURI} alt={item.name} className="h-8 w-8 rounded-full" />
                        </div>
                        <div className=" space-y-0">
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm text-slate-600 flex gap-1 box-content items-center">
                            {item.address.slice(0, 5) + '...' + item.address.slice(-5)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-end">$123.25K</TableCell>
                  <TableCell className="text-end">-18.93%</TableCell>
                  <TableCell className="lg:table-cell hidden text-end">
                    <div className="space-y-1.5">
                      <p>155.49K</p>
                      <p className="text-xs"><span className="text-xs text-green-500">77.10K</span> / <span className="text-red-500">4.66K</span></p>
                    </div>
                  </TableCell>
                  <TableCell className="lg:table-cell hidden text-center">32.02K</TableCell>
                  <TableCell className="lg:table-cell hidden text-center">90.88K</TableCell>
                  <TableCell className="lg:table-cell hidden text-center">150.88M</TableCell>
                  <TableCell className="lg:table-cell hidden text-center">400.88M</TableCell>
                  <TableCell className="lg:table-cell hidden text-center">650.88M</TableCell>
                  <TableCell className="lg:table-cell hidden text-center">4M</TableCell>
                  <TableCell className="lg:table-cell hidden text-end">
                    <div className="w-full flex justify-end">
                      <ShieldCheck className="text-green-600" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface SortingProps {
  tabsValue: string,
  connected?: boolean
}

const Sorting = ({ tabsValue, connected }: SortingProps) => {
  const [drawOpen, setDrawOpen] = useState(false)
  const [drawerTrendsOpen, setDrawerTrendsOpen] = useState(false)

  return (
    <>

      {tabsValue === 'tokens' && (
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm gap-2">
            <div className="lg:flex hidden">
              <Button variant={'ghost'} size={'sm'}>1m</Button>
              <Button variant={'ghost'} size={'sm'}>1h</Button>
              <Button variant={'ghost'} size={'sm'}>4h</Button>
              <Button variant={'ghost'} size={'sm'}>24h</Button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <Drawer open={drawOpen} onOpenChange={setDrawOpen}>
                <Button variant={'ghost'} size={'sm'} onClick={() => setDrawOpen(true)}>24h</Button>
                <DrawerContent>
                  <DrawerHeader className="space-y-2">
                    <Button variant={'ghost'} onClick={() => {
                      setDrawOpen(false)
                    }}>1m</Button>
                    <Button variant={'ghost'} onClick={() => {
                      setDrawOpen(false)
                    }}>1h</Button>
                    <Button variant={'ghost'} onClick={() => {
                      setDrawOpen(false)
                    }}>4h</Button>
                    <Button variant={'ghost'} onClick={() => {
                      setDrawOpen(false)
                    }}>24h</Button>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
              <span className="lg:hidden block">|</span>
              <Drawer open={drawerTrendsOpen} onOpenChange={setDrawerTrendsOpen}>
                <Button variant={'secondary'} size={'sm'} onClick={() => setDrawerTrendsOpen(true)}>
                  <Flame />
                  <div>Trending</div>
                </Button>
                <DrawerContent>
                  <DrawerHeader className="space-y-2">
                    <Button variant="secondary" onClick={() => setDrawerTrendsOpen(false)}>
                      <Flame />
                      <div>Trending</div>
                    </Button>
                    <Button variant="ghost" onClick={() => setDrawerTrendsOpen(false)}>
                      <ChartNoAxesCombined />
                      <div>Top searches</div>
                    </Button>
                    <Button variant="ghost" onClick={() => setDrawerTrendsOpen(false)}>
                      <Sprout />
                      <div>Newest</div>
                    </Button>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </div>

            <span className="lg:block hidden">|</span>

            <Button variant="secondary" size={'sm'} className="lg:flex hidden">
              <Flame />
              <div>Trending</div>
            </Button>
            <Button variant="ghost" size={'sm'} className="lg:flex hidden">
              <ChartNoAxesCombined />
              <div>Top searches</div>
            </Button>
            <Button variant="ghost" size={'sm'} className="lg:flex hidden">
              <Sprout />
              <div>Newest</div>
            </Button>

            <span className="lg:block hidden">|</span>

            <div className="lg:block hidden">
              <Select >
                <SelectTrigger className="w-auto border-none hover:opacity-50 transition-opacity text-sm font-medium">
                  <SelectValue placeholder="Liquidity" className="text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-gray-600 mb-2">
                      Liquidity
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $10k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $50k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $100k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $500k
                      </Button>
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant={"destructive"} size={"icon"} className="rounded-full flex-shrink-0">
                        <Trash className="w-5 h-5" />
                      </Button>
                      <Button className="w-full rounded-full" variant={"outline"} size={'sm'}>Apply</Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="lg:block hidden">
              <Select>
                <SelectTrigger className="w-auto border-none hover:opacity-50 transition-opacity text-sm font-medium">
                  <SelectValue placeholder="Turnover" />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-gray-600 mb-2">
                      Turnover
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $10k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $50k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $100k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $500k
                      </Button>
                      <Input type="text" placeholder="Min" className="text-sm" />
                      <Input type="text" placeholder="Max" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant={"destructive"} size={'sm'} className="rounded-full flex-shrink-0">
                        <Trash className="w-5 h-5" />
                      </Button>
                      <Button className="w-full rounded-full" variant={"outline"} size={'sm'}>Apply</Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="lg:block hidden">
              <Select>
                <SelectTrigger className="w-auto border-none hover:opacity-50 transition-opacity text-sm font-medium">
                  <SelectValue placeholder="Market Cap" />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-gray-600 mb-2">
                      Market cap
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $10k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $50k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $100k
                      </Button>
                      <Button variant={"outline"} size={'sm'}>
                        ≥ $500k
                      </Button>
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant={"destructive"} size={"icon"} className="rounded-full flex-shrink-0">
                        <Trash className="w-5 h-5" />
                      </Button>
                      <Button className="w-full rounded-full" variant={"outline"} size={'sm'}>Apply</Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>

          </div>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'ghost'}>
                  <span className="box-content">
                    <Filter className="w-5 h-5" />
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
                    <div className="flex items-center gap-2">
                      <Button variant={'outline'} size={'sm'}>1m</Button>
                      <Button variant={'outline'} size={'sm'}>1h</Button>
                      <Button variant={'outline'} size={'sm'}>4h</Button>
                      <Button variant={'outline'} size={'sm'}>24</Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Charge (%)
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Transactions
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Unique traders
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Trading volume
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Holders
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Turnover ($)
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Market cap ($)
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      FDV ($)
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Liquidity ($)
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      Token age
                    </div>
                    <div className="flex gap-2 w-2/3">
                      <Input type="text" placeholder="Min" />
                      <Input type="text" placeholder="Max" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Periode" />
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
                        <CircleAlert className="w-4 h-4" />
                      </span>
                    </label>
                    <Switch id="riskTokens" />
                  </div>

                  <div className="flex justify-between">
                    <label htmlFor="riskTokens" className="flex gap-2 items-center">
                      Hide stablecoins
                      <span>
                        <CircleAlert className="w-4 h-4" />
                      </span>
                    </label>
                    <Switch id="riskTokens" />
                  </div>
                </div>

                <SheetFooter>
                  <div className="w-full flex items-center gap-2">
                    <Button variant={"outline"} size={"icon"} className="rounded-full flex-shrink-0">
                      <Trash className="w-5 h-5" />
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
      )}

      {tabsValue === 'watchlist' && (
        <div className="flex items-center justify-between">
          <div>
            <Button variant={'ghost'} size={'sm'}>1m</Button>
            <Button variant={'ghost'} size={'sm'}>1h</Button>
            <Button variant={'ghost'} size={'sm'}>4h</Button>
            <Button variant={'ghost'} size={'sm'}>24h</Button>
          </div>
          <Button disabled={connected ? false : true} variant={'secondary'} size={'sm'}>
            <Edit2Icon />
            Edit
          </Button>
        </div>
      )}

    </>

  )
}


const Tokens = () => {
  const { connected } = useWallet()
  const [tabsValue, setTabsValue] = useState("tokens")
  const [tokensData, setTokensData] = useState<ApiV3Token[]>([])

  const getTokenData = async () => {
    try {
      const data = await token.list(150)
      if (data) {
        setTokensData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTokenData()
  }, [])

  return (
    <div className="py-8">
      <Tabs defaultValue="tokens" className="space-y-6" value={tabsValue} onValueChange={setTabsValue}>
        <TabsList className="flex bg-transparent justify-between items-center">
          <div className="flex items-center gap-6">
            <TabsTrigger value="tokens" className=" pb-2 data-[state=active]:border-b-2 data-[state=active]:border-foreground px-0 font-semibold rounded-none text-xl">Tokens</TabsTrigger>
            <TabsTrigger value="watchlist" className=" pb-2 data-[state=active]:border-b-2 data-[state=active]:border-foreground px-0 font-semibold rounded-none text-xl">Watchlist</TabsTrigger>
          </div>
          <SearchTokens data={tokensData} />
        </TabsList>
        <TabsContent value="tokens">
          <div className="space-y-3">
            <Sorting tabsValue={tabsValue} connected={connected} />
            <TokensTable data={tokensData} />
          </div>
        </TabsContent>
        <TabsContent value="watchlist">
          <div className="w-full h-[50vh] space-y-3">
            <Sorting tabsValue={tabsValue} />
            {connected ? (
              ''
            ) : (
              <div className="w-full flex items-center justify-center flex-col gap-0">
                <picture>
                  <source srcSet="https://www.okx.com/cdn/assets/imgs/2411/E092133D49AEF647.png?x-oss-process=image/format,webp/resize,w_200,h_200,type_6/ignore-error,1" />
                  <img src="https://www.okx.com/cdn/assets/imgs/2411/E092133D49AEF647.png?x-oss-process=image/resize,w_200,h_200,type_6/ignore-error,1" />
                </picture>
                <p className="font-semibold">Watchlist empty</p>
                <p className="text-muted-foreground">Connect your wallet to manage Watchlist.</p>
                <div className="mt-5">
                  <ModalConnectWallet />
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>


  );
};


export default Tokens;