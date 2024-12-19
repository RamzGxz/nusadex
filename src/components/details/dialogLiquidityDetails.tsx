import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight, Copy } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import formatNumber from '@/lib/formatNumber';

interface props {
  image?: string,
  name?: string,
  liq?: string
}

const DialogLiquidityDetails = ({ image, name, liq }: props) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button className=" flex items-center gap-1 group" onClick={() => setOpen(true)}>
        <p className="text-xs">${formatNumber(Number(liq))}</p>
        <ChevronRight size={14} className='opacity-50 group-hover:opacity-100' />
      </button>
      <DialogContent className='max-w-screen-md'>
        <DialogHeader className='space-y-8'>
          <DialogTitle>Liquidity pool</DialogTitle>
          <DialogDescription>
            <div className='space-y-5'>
              <div className="flex items-center gap-2  border-t pt-2">
                <img src={image} alt="" className="w-14 h-14 object-cover rounded-full p-1" />
                <div className="space-y-0 leading-snug">
                  <p className="text-foreground font-semibold">{name}</p>
                  <p className="text-muted-foreground text-sm">This token is available in the following liquidity pools.</p>
                </div>
              </div>
              <div className='w-full pt-2 border-t max-h-[50vh] overflow-auto'>
                <Table>
                  <TableHeader className='sticky top-0 bg-background'>
                    <TableRow>
                      <TableHead className='text-xs'>Pool</TableHead>
                      <TableHead className='text-xs'>Liquidity</TableHead>
                      <TableHead className='text-xs'>Amount/Token</TableHead>
                      <TableHead className="text-xs">Pool address</TableHead>
                      <TableHead className="text-xs">Creaor/Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 50 }, (_v, i) => (
                      <TableRow className='border-b-0 text-foreground'>
                        <TableCell className="font-medium">
                          <div className='flex items-center gap-3'>
                            <img src={'https://static.coinall.ltd/cdn/explorer/dex/logo/Raydium.png'} className='w-8 h-8 object-cover' />
                            <div>
                              <p>PYUSD/wSOL</p>
                              <p className='text-muted-foreground'>Raydium</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>$4.55M</TableCell>
                        <TableCell>
                          <div className='space-y-0'>
                            <p>20.87M <span className='text-muted-foreground'>PYUSD</span></p>
                            <p>20.87M <span className='text-muted-foreground'>wSOL</span></p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className='flex items-center gap-2'>
                            HQWsAX...fgZq <button><Copy size={14} /></button>
                          </div>
                        </TableCell>
                        <TableCell className="">
                          <div>
                            <div className='flex items-center gap-2'>
                              HQWsAX...fgZq <button><Copy size={14} /></button>
                            </div>
                            <p className='text-muted-foreground'>11/12/2024, 10:00</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLiquidityDetails;