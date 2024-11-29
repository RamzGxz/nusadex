import { ChartNoAxesCombined, Filter, Flame, Search, Sprout, Trash } from 'lucide-react';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Tokens = () => {
    return (
        <>
            <div className='flex w-full justify-between'>
            <div className='flex gap-4 text-xl'>
                <a href="">Tokens</a>
                <a href="">Watchlist</a>
            </div>
            <div className='flex border-2 border-white rounded-full items-center'>
                <span className='mx-1'>
                    <Search/>
                </span>
                <input className='bg-transparent text-sm w-60 focus:outline-none' type="search" name="" id="" placeholder='Search token name or address'/>
            </div>
            </div>
            <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='flex'>
                    <div className='px-4 py-2'>1m</div>
                    <div className='px-4 py-2'>1h</div>
                    <div className='px-4 py-2'>4h</div>
                    <div className='px-4 py-2'>24h</div>
                </div>
                <div className='flex gap-1'>
                    <div className='flex px-4 py-2'>
                        <span>
                            <Flame/>
                        </span>
                        <div>Trending</div>
                    </div>
                    <div className='flex px-4 py-2'>
                        <span>
                            <ChartNoAxesCombined/>
                        </span>
                        <div>Top searches</div>
                    </div>
                    <div className='flex px-4 py-2'>
                        <span>
                            <Sprout/>
                        </span>
                        <div>Newest</div>
                    </div>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-[140px] border-none">
                            <SelectValue placeholder="Liquidity ≥ $5K" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="flex flex-col p-2">
                                <div className='text-xs text-gray-600 mb-2'>Liquidity $10k</div>
                                <div className="grid grid-cols-2 gap-2 w-56 text-sm mb-3">
                                    <div className='border-white border-[0.7px] bg-none rounded-sm text-center py-1'>$10k</div>
                                    <div className='border-white border-[0.7px] bg-none rounded-sm text-center py-1'>$50k</div>
                                    <div className='border-white border-[0.7px] bg-none rounded-sm text-center py-1'>$100k</div>
                                    <div className='border-white border-[0.7px] bg-none rounded-sm text-center py-1'>$500k</div>
                                    <div>
                                        <input className='focus:outline-none w-full py-1 px-2 rounded-sm' type="text" name="" id="" placeholder='Min'/>
                                    </div>
                                    <div>
                                        <input className='focus:outline-none w-full py-1 px-2 rounded-sm' type="text" name="" id="" placeholder='Max'/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className='box-content p-1 border-[1px] rounded-full flex justify-center items-center'>
                                        <Trash className='w-5 h-5'/>
                                    </div>
                                    <button className='flex justify-center items-center w-full border border-white rounded-full'>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex gap-1'>
                <span>
                    <Filter/>
                </span>
                <div>Filter</div>
            </div>
            </div>
            <div>
                table
            </div>
        </>
    );
};

export default Tokens;