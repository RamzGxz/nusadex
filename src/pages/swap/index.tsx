import SwapComponents from '@/components/swap';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { AlertCircle, ArrowLeftRight, ArrowUpDown, ChartArea, DollarSign, LoaderCircle, Settings2Icon, Wallet, WavesIcon } from 'lucide-react';
import React, { useState } from 'react';

const SwapPages = () => {

  const [sideChange, setSizeChange] = useState(false)

  return (
    <div className='w-full lg:h-[90vh] flex justify-center items-center flex-col gap-2'>
      <div className='w-full flex items-end justify-end'>
        <div className='flex items-center gap-2'>
          <Button className='w-fit h-fit p-2 text-xs' variant={'outline'}>
            <DollarSign />
          </Button>
          <Button className='w-fit h-fit p-2 text-xs' variant={'outline'}>
            <Settings2Icon />
            <p>0.1%</p>
          </Button>
          <Button className='w-fit h-fit p-2 text-xs' variant={'outline'}>
            <ArrowLeftRight />
          </Button>
          <Button className='w-fit h-fit p-2 text-xs' variant={'outline'}>
            <ChartArea />
          </Button>
        </div>
      </div>
      <div className='w-full flex items-start justify-between gap-5'>
        <div className='flex items-center justify-center lg:w-3/4 w-full border p-5 rounded-md h-[70vh]'>

        </div>

        <div className='flex items-center justify-end lg:w-1/2 w-full border h-fit rounded-md p-5 flex-col gap-5'>
          <SwapComponents />
          <Button size={'icon'}><ArrowUpDown /></Button>
          <SwapComponents />
          <div className='w-full bg-muted/30 p-3 rounded-md flex flex-col gap-5'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 font-semibold'>
                  <h1 >1 PVO</h1>
                  <WavesIcon className='w-4 h-4' />
                  <h1>0.00005 SOL</h1>
                </div>
              </div>
              <Button size={'icon'} variant={'outline'} title='refresh' className='bg-transparent p-0 border-0 hover:bg-transparent hover:opacity-50 transition-opacity w-fit h-fit'><LoaderCircle /></Button>
            </div>

            <div className='flex w-full justify-between'>
              <div className='text-sm flex items-center gap-1'>
                <p className='font-light'>Minimum recieved</p>
                <TooltipProvider delayDuration={50} >
                  <Tooltip >
                    <TooltipTrigger><AlertCircle className='w-4 h-4' /></TooltipTrigger>
                    <TooltipContent >
                      <div className='bg-foreground max-w-32 text-background p-1 rounded-md text-center text-sm m-1'>
                        This is determined by your slippage tolerance.
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className='text-sm font-semibold'>0.00002 SOL</p>
            </div>
            <Button className='mt-3'>SWAP</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SwapPages;