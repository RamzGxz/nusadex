import ModalConnectWallet from "@/components/modals/connectWallet";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TableSkeleton from "@/components/ui/tableSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import formatNumber from "@/lib/formatNumber";
import formatRelativeTime from "@/lib/formatRelativeDate";
import { TokenListDataType } from "@/types/tokenListDataTypes";
import { TokenSearchDataTypes } from "@/types/tokenSearchDataTypes";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { ChartNoAxesCombined, ChevronDown, ChevronUp, CircleAlert, Edit2Icon, Filter, Flame, Search, ShieldCheck, Sprout, Trash } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface TableSortProps {
  label: string,
  sortView?: boolean,
  rankBy?: number,
  rank?: number,
  desc?: boolean,
  setRankBy?: Dispatch<SetStateAction<number>>
  setDesc?: Dispatch<SetStateAction<boolean>>
  setTokensData?: Dispatch<SetStateAction<TokenListDataType[]>>
}

const TableSort = ({ label, sortView = true, rankBy, desc, setDesc, setRankBy, rank, setTokensData }: TableSortProps) => {

  const handler = () => {
    setDesc && setDesc(!desc)
    setRankBy && setRankBy(Number(rank))
    setTokensData && setTokensData([])
  }

  return (
    <>
      <Button onClick={handler} variant={"ghost"} className="hover:bg-transparent hover:text-muted-foreground/80 p-0 w-fit [&_svg]:size-[16px]">
        <div className="flex items-center gap-2">
          <div className="font-medium text-xs">
            {label}
          </div>
          {sortView && sortView === true && (
            <div className="-space-y-1.5">
              <ChevronUp strokeWidth={2} className={`${rank === rankBy && !desc && 'text-foreground'}`} />
              <ChevronDown strokeWidth={2} className={`${rank === rankBy && desc && 'text-foreground'}`} />
            </div>
          )}
        </div>
      </Button>
    </>
  )
}

const SearchTokens = () => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const [tokensDefault, setTokensDefault] = useState<TokenSearchDataTypes[]>([])
  const [searchValue, setSearchValue] = useState('')


  const getHotSearch = async () => {
    try {
      const resp = await axios('/api/token/search/trending')
      setTokensDefault(resp.data)
    } catch (error) {

    }
  }

  useEffect(() => () => {
    getHotSearch()

  }, [])

  useEffect(() => {
    if (!sheetOpen) {
      // setTokensDefault(data.slice(0, 4))
      setSearchValue('')
    }
  }, [sheetOpen])

  return (
    <Dialog open={sheetOpen} onOpenChange={setSheetOpen}>
      <Button variant={'outline'} className="sm:w-80 justify-start" onClick={() => setSheetOpen(true)}>
        <span className="">
          <Search className="w-5" />
        </span>
        <p className="lg:block md:block hidden">Search token name or address</p>
      </Button>
      <DialogContent className="max-w-screen-md">
        <div className="flex w-full mb-5 py-1 border-b-[0.5px] border-opacity-10 border-white items-center">
          <span className="ml-[8px] mr-3">
            <Search className="w-4" />
          </span>
          <input
            className="bg-transparent text-sm w-full focus:outline-none "
            type="search"
            name=""
            id=""
            placeholder="Search token name or address"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="mb-2 text-sm text-muted-foreground">
          {searchValue !== '' ? (
            'Results'
          ) : 'Top Searches'}
        </div>
        <div className="max-h-[65vh] overflow-auto">
          <Table className="overflow-auto no-scrollbar">
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                {/* <TableHead className="lg:table-cell hidden"></TableHead> */}
                <TableHead className="font-medium text-xs">Name</TableHead>
                <TableHead className=""><TableSort label="Price" sortView={false} /></TableHead>
                <TableHead className=""><TableSort label="24h Change" sortView={false} /></TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {tokensDefault.filter(item => item.tokenSymbol !== '' && !item.tokenContractAddress.includes('0x')).map((item, index) => (
                <TableRow key={index} className="cursor-pointer border-b-0" onClick={() => location.href = `/tokens/details/${item.tokenContractAddress}`}>
                  <TableCell className="rounded-s-md">
                    <div className="flex gap-5 items-center">
                      <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0">
                          <img src={item.tokenLogoUrl} alt={item.tokenSymbol} className="h-8 w-8 rounded-full" />
                        </div>
                        <div className=" space-y-0">
                          <div className="font-bold text-sm">{item.tokenSymbol}</div>
                          <div className="text-xs font-medium text-muted-foreground/80 flex gap-1 box-content items-center">
                            {item.tokenContractAddress.slice(0, 5) + '...' + item.tokenContractAddress.slice(-5)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className=" text-sm font-medium">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 7 }).format(Number(item.price))}</TableCell>
                  {item.change24H && (
                    <TableCell className=" text-sm font-medium">
                      {Number(item.change24H) > 1 ? (
                        <span className="text-[#25a750]">{formatNumber(Number(item.change24H))}%</span>
                      ) : (
                        <span className="text-[#ca3f64]">{item.change24H}%</span>
                      )}
                    </TableCell>
                  )}
                  {item.change && (
                    <TableCell className=" text-sm font-medium">
                      {Number(item.change) > 1 ? (
                        <span className="text-[#25a750]">{formatNumber(Number(item.change))}%</span>
                      ) : (
                        <span className="text-[#ca3f64]">{item.change}%</span>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface SortingProps {
  tabsValue: string,
  connected?: boolean,
  setRankBy: Dispatch<SetStateAction<number>>,
  periodType: number
  setPeriodType: Dispatch<SetStateAction<number>>,
  setTradeNumPeriod: Dispatch<SetStateAction<number>>,
  setChangePeriod: Dispatch<SetStateAction<number>>,
  setVolumePeriod: Dispatch<SetStateAction<number>>,
  setTxsPeriod: Dispatch<SetStateAction<number>>,
  setTokensData: Dispatch<SetStateAction<TokenListDataType[]>>,
  rankBy: number,
  setDesc: Dispatch<SetStateAction<boolean>>,
  setLiquidityMin: Dispatch<SetStateAction<number>>,
  liquidtyMin: number,
  volumeMin: number,
  setVolumeMin: Dispatch<SetStateAction<number>>
}

const Sorting = ({ tabsValue, connected, setRankBy, periodType, setPeriodType, setChangePeriod, setTradeNumPeriod, setTxsPeriod, setVolumePeriod, setTokensData, rankBy, setDesc, setLiquidityMin, liquidtyMin, volumeMin, setVolumeMin }: SortingProps) => {
  const [drawOpen, setDrawOpen] = useState(false)
  const [drawerTrendsOpen, setDrawerTrendsOpen] = useState(false)
  const [liqOpen, setLiqOpen] = useState(false)
  const [turnOpen, setTurnOpen] = useState(false)

  const handler = (value: number) => {
    setTokensData([])
    setPeriodType(value)
    setChangePeriod(value)
    setTradeNumPeriod(value)
    setTxsPeriod(value)
    setVolumePeriod(value)
    setLiquidityMin(5000)
  }

  const handlerRankBy = (value: number) => {
    if (rankBy !== value) {
      setTokensData([])
      setRankBy(value)
      setDesc(true)
      setLiquidityMin(5000)
    }
  }

  return (
    <>
      {tabsValue === 'tokens' && (
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm gap-2">
            <div className="lg:flex hidden">

            </div>

            <Button onClick={() => handler(1)} variant={periodType === 1 ? 'secondary' : 'ghost'} size={'sm'}>5m</Button>
            <Button onClick={() => handler(2)} variant={periodType === 2 ? 'secondary' : 'ghost'} size={'sm'}>1h</Button>
            <Button onClick={() => handler(3)} variant={periodType === 3 ? 'secondary' : 'ghost'} size={'sm'}>4h</Button>
            <Button onClick={() => handler(4)} variant={periodType === 4 ? 'secondary' : 'ghost'} size={'sm'}>24h</Button>

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

            <Button onClick={() => handlerRankBy(5)} variant={rankBy === 5 ? 'secondary' : 'ghost'} size={'sm'} className="lg:flex hidden">
              <Flame />
              <div>Trending</div>
            </Button>
            <Button onClick={() => handlerRankBy(9)} variant={rankBy === 9 ? 'secondary' : 'ghost'} size={'sm'} className="lg:flex hidden">
              <ChartNoAxesCombined />
              <div>Top searches</div>
            </Button>
            <Button onClick={() => {
              handlerRankBy(8)
              setDesc(false)
            }} variant={rankBy === 8 ? 'secondary' : 'ghost'} size={'sm'} className="lg:flex hidden">
              <Sprout />
              <div>Newest</div>
            </Button>

            <span className="lg:block hidden">|</span>

            <div className="lg:block hidden">
              <Select open={liqOpen} onOpenChange={setLiqOpen}>
                <SelectTrigger className="w-auto border-none hover:opacity-80 transition-opacity gap-1 text-xs font-medium focus:ring-0">
                  <SelectValue placeholder={`Liquidity ≥ ${formatNumber(liquidtyMin)}`} />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-muted-foreground font-semibold mb-2">
                      Liquidity
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                      <Button onClick={() => {
                        setLiquidityMin(10000)
                        setTokensData([])
                        setLiqOpen(false)
                        setDesc(false)
                        setRankBy(7)
                      }} disabled={liquidtyMin === 10000} variant={"outline"} size={'sm'}>
                        ≥ $10k
                      </Button>
                      <Button onClick={() => {
                        setLiquidityMin(50000)
                        setTokensData([])
                        setLiqOpen(false)
                        setDesc(false)
                        setRankBy(7)
                      }} disabled={liquidtyMin === 50000} variant={"outline"} size={'sm'}>
                        ≥ $50k
                      </Button>
                      <Button onClick={() => {
                        setLiquidityMin(100000)
                        setTokensData([])
                        setLiqOpen(false)
                        setDesc(false)
                        setRankBy(7)
                      }} disabled={liquidtyMin === 100000} variant={"outline"} size={'sm'}>
                        ≥ $100k
                      </Button>
                      <Button onClick={() => {
                        setLiquidityMin(500000)
                        setTokensData([])
                        setLiqOpen(false)
                        setDesc(false)
                        setRankBy(7)
                      }} disabled={liquidtyMin === 500000} variant={"outline"} size={'sm'}>
                        ≥ $500k
                      </Button>
                      {/* <Input type="number" placeholder="Min" className="md:text-xs h-8" onChange={(e) => (setLiqMinValue(Number(e.target.value)))} />
                      <Input type="number" placeholder="Max" className="md:text-xs h-8" onChange={(e) => (setLiqMaxValue(Number(e.target.value)))} /> */}
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <Button variant={"destructive"} size={"icon"} className="rounded-full flex-shrink-0">
                        <Trash className="w-5 h-5" />
                      </Button>
                      <Button onClick={hanlderApplyLiq} className="w-full rounded-full" variant={"outline"} size={'sm'}>Apply</Button>
                    </div> */}
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="lg:block hidden">
              <Select open={turnOpen} onOpenChange={setTurnOpen}>
                <SelectTrigger className="w-auto border-none hover:opacity-50 transition-opacity gap-1 text-xs font-medium focus:ring-0">
                  <SelectValue placeholder={`Turnover ≥ ${formatNumber(volumeMin)}`} />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-muted-foreground font-semibold mb-2">
                      Turnover
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                      <Button onClick={() => {
                        setVolumeMin(10000)
                        setTokensData([])
                        setTurnOpen(false)
                        setDesc(false)
                        setRankBy(5)
                      }} disabled={volumeMin === 10000} variant={"outline"} size={'sm'}>
                        ≥ $10k
                      </Button>
                      <Button onClick={() => {
                        setVolumeMin(50000)
                        setTokensData([])
                        setTurnOpen(false)
                        setDesc(false)
                        setRankBy(5)
                      }} disabled={volumeMin === 50000} variant={"outline"} size={'sm'}>
                        ≥ $50k
                      </Button>
                      <Button onClick={() => {
                        setVolumeMin(100000)
                        setTokensData([])
                        setTurnOpen(false)
                        setDesc(false)
                        setRankBy(5)
                      }} disabled={volumeMin === 100000} variant={"outline"} size={'sm'}>
                        ≥ $100k
                      </Button>
                      <Button onClick={() => {
                        setVolumeMin(500000)
                        setTokensData([])
                        setTurnOpen(false)
                        setDesc(false)
                        setRankBy(5)
                      }} disabled={volumeMin === 500000} variant={"outline"} size={'sm'}>
                        ≥ $500k
                      </Button>

                    </div>

                  </div>
                </SelectContent>
              </Select>
            </div>

            {/* <div className="lg:block hidden">
              <Select>
                <SelectTrigger className="w-auto border-none hover:opacity-50 transition-opacity gap-1 text-xs font-medium">
                  <SelectValue placeholder="Market Cap" />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col p-2">
                    <div className="text-xs text-muted-foreground font-semibold mb-2">
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
                    </div>

                  </div>
                </SelectContent>
              </Select>
            </div> */}

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
                  <SheetTitle className="mb-6 text-lg">
                    Custom filters
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-3 mb-3 text-sm">
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


const TokensPage = () => {
  const { connected } = useWallet()
  const [tabsValue, setTabsValue] = useState("tokens")

  // data state
  const [tokensData, setTokensData] = useState<TokenListDataType[]>([])


  // query state for api
  const [changeMax, setChangeMax] = useState('')
  const [changeMin, setChangeMin] = useState('')
  const [changePeriod, setChangePeriod] = useState(4)
  const [desc, setDesc] = useState(true)
  const [fdvMax, setFdvMax] = useState(0)
  const [fdvMin, setFdvMin] = useState(0)
  const [holdersMax, setHoldersMax] = useState(0)
  const [holdersMin, setHoldersMin] = useState(0)
  const [liquidityMax, setLiquidityMax] = useState(0)
  const [liquidityMin, setLiquidityMin] = useState(5000)
  const [marketCapMin, setMarketCapMin] = useState(0)
  const [marketCapMax, setMarketCapMax] = useState(0)
  const [periodType, setPeriodType] = useState(4)
  const [rankBy, setRankBy] = useState(5)
  const [riskFilter, setRiskFilter] = useState(true)
  const [stableTokenFilter, setStableTokenFilter] = useState(true)
  const [tokenAgeMax, setTokenAgeMax] = useState(0)
  const [tokenAgeMin, setTokenAgeMin] = useState(0)
  const [tokenAgeType, setTokenAgeType] = useState(2)
  const [tradeNumMax, setTradeNumMax] = useState(0)
  const [tradeNumMin, setTradeNumMin] = useState(0)
  const [tradeNumPeriod, setTradeNumPeriod] = useState(4)
  const [txsMax, setTxsMax] = useState(0)
  const [txsMin, setTxsMin] = useState(0)
  const [txsPeriod, setTxsPeriod] = useState(0)
  const [uniqueTraderMax, setUniqueTraderMax] = useState(0)
  const [uniqueTraderMin, setUniqueTraderMin] = useState(0)
  const [uniqueTraderPeriod, setUniqueTraderPeriod] = useState(4)
  const [volumeMax, setVolumeMax] = useState(0)
  const [volumeMin, setVolumeMin] = useState(10000)
  const [volumePeriod, setVolumePeriod] = useState(4)


  const getTokenData = async () => {
    try {
      const resp = await axios(`/api/token/list`, {
        params: {
          chainIds: '501',
          changePeriod,
          desc,
          liquidityMin,
          periodType,
          rankBy,
          riskFilter,
          stableTokenFilter,
          tags: '0',
          tokenAgeType,
          tradeNumPeriod,
          txsPeriod,
          volumeMin,
          volumePeriod,
          liquidityMax,
        }
      })
      setTokensData(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const interval = setInterval(() =>{
      getTokenData()
    }, 3000)
    return clearInterval(interval)
  }, [
    changeMax,
    changeMin,
    changePeriod,
    desc,
    fdvMax,
    fdvMin,
    holdersMax,
    holdersMin,
    liquidityMax,
    liquidityMin,
    marketCapMax,
    marketCapMin,
    periodType,
    rankBy,
    riskFilter,
    stableTokenFilter,
    tokenAgeMax,
    tokenAgeMin,
    tokenAgeType,
    tradeNumMax,
    tradeNumMin,
    tradeNumPeriod,
    txsMax,
    txsMin,
    uniqueTraderMax,
    uniqueTraderMin,
    uniqueTraderPeriod,
    volumeMax,
    volumeMin,
    volumePeriod,
  ])

  return (
    <div className="py-8">
      <Tabs defaultValue="tokens" className="lg:space-y-6 space-y-3 h-full" value={tabsValue} onValueChange={setTabsValue}>
        <TabsList className="flex justify-between items-center bg-transparent">
          <div className="flex items-center gap-6 bg-background w-full">
            <TabsTrigger value="tokens" className=" pb-1 data-[state=active]:border-b-2 data-[state=active]:border-foreground px-0 font-semibold rounded-none text-xl">Tokens</TabsTrigger>
            <TabsTrigger value="watchlist" className=" pb-1 data-[state=active]:border-b-2 data-[state=active]:border-foreground px-0 font-semibold rounded-none text-xl">Watchlist</TabsTrigger>
          </div>
          <SearchTokens />
        </TabsList>
        <TabsContent value="tokens">
          <div className="space-y-3">
            <Sorting tabsValue={tabsValue} connected={connected} setRankBy={setRankBy} periodType={periodType} setPeriodType={setPeriodType} setChangePeriod={setChangePeriod} setTradeNumPeriod={setTradeNumPeriod} setTxsPeriod={setTxsPeriod} setVolumePeriod={setVolumePeriod} setTokensData={setTokensData} rankBy={rankBy} setDesc={setDesc} liquidtyMin={liquidityMin} setLiquidityMin={setLiquidityMin} volumeMin={volumeMin} setVolumeMin={setVolumeMin} />
            <div className="lg:max-h-full max-h-[70vh] overflow-auto">
              <Table className="">
                <TableHeader className="sticky top-0 bg-background">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-medium text-xs">Name</TableHead>
                    <TableHead className="text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={1} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Price" />
                    </TableHead>
                    <TableHead className="text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={2} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Change (%)" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={3} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Txns" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={4} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Unique traders" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={10} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Holders" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end">
                      <TableSort rankBy={rankBy} desc={desc} rank={5} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Turnover" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={6} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Market cap" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={7} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Liquidity" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">
                      <TableSort rankBy={rankBy} desc={desc} rank={8} setDesc={setDesc} setRankBy={setRankBy} setTokensData={setTokensData} label="Token Age" />
                    </TableHead>
                    <TableHead className="lg:table-cell hidden text-end text-xs font-semibold">Auidit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokensData && tokensData.length > 0 ? (
                    tokensData.filter(item => item.tokenSymbol !== '').map((item, index) => (
                      <TableRow key={index} className="cursor-pointer border-b-0" onClick={() => location.href = `/tokens/details/${item.tokenContractAddress}`}>
                        <TableCell className="rounded-s-md">
                          <div className="flex gap-5 items-center">
                            <div className="flex gap-3 items-center">
                              <div className="flex-shrink-0">
                                <img src={item.tokenLogoUrl} alt={item.tokenSymbol} className="h-8 w-8 rounded-full" />
                              </div>
                              <div className=" space-y-0">
                                <div className="font-bold text-sm">{item.tokenSymbol}</div>
                                <div className="text-xs font-medium text-muted-foreground/80 flex gap-1 box-content items-center">
                                  {item.tokenContractAddress.slice(0, 5) + '...' + item.tokenContractAddress.slice(-5)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-end text-sm font-medium">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 7 }).format(Number(item.price))}</TableCell>
                        <TableCell className="text-center text-sm font-medium">
                          {Number(item.change) > 1 ? (
                            <span className="text-[#25a750]">{formatNumber(Number(item.change))}%</span>
                          ) : (
                            <span className="text-[#ca3f64]">{item.change}%</span>
                          )}
                        </TableCell>
                        <TableCell className="lg:table-cell hidden text-end">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">{formatNumber(Number(item.txs))}</p>
                            <p className="text-xs"><span className="text-xs text-[#25a750]">{formatNumber(Number(item.txsBuy))}</span> / <span className="text-[#ca3f64]">{formatNumber(Number(item.txsSell))}</span></p>
                          </div>
                        </TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium">{formatNumber(Number(item.uniqueTraders))}</TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium">{formatNumber(Number(item.holders))}</TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium">
                          {formatNumber(Number(item.volume))}
                        </TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium">{formatNumber(Number(item.marketCap))}</TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium">{formatNumber(Number(item.liquidity))}</TableCell>
                        <TableCell className="lg:table-cell hidden text-center text-sm font-medium capitalize">{formatRelativeTime(new Date(Number(item.firstPriceTime)))}</TableCell>
                        <TableCell className="lg:table-cell hidden text-end rounded-e-md">
                          <div className="w-full flex justify-end">
                            {Number(item.riskLevel) > 3 ? (
                              <ShieldCheck className="text-yellow-500" />
                            ) : <ShieldCheck className="text-[#25a750]" />}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableSkeleton length={10} />
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="watchlist">
          <div className="w-full h-[50vh] space-y-3">
            <Sorting tabsValue={tabsValue} setRankBy={setRankBy} periodType={periodType} setPeriodType={setPeriodType} setChangePeriod={setChangePeriod} setTradeNumPeriod={setTradeNumPeriod} setTxsPeriod={setTxsPeriod} setVolumePeriod={setVolumePeriod} setTokensData={setTokensData} rankBy={rankBy} setDesc={setDesc} liquidtyMin={liquidityMin} setLiquidityMin={setLiquidityMin} volumeMin={volumeMin} setVolumeMin={setVolumeMin} />
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


  )
};


export default TokensPage;