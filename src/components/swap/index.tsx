import { Wallet } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import ModalSelectToken from '../modals/selectToken';
import { Input } from '../ui/input';

const SwapComponents = () => {

  let [inputValueMin1, setInputValueMint1] = useState(0)

  return (
    <div className='w-full h-full flex flex-col justify-between gap-3'>
      <div className='pb-3 border-b flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>From</h1>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <Wallet className='w-5 h-5' strokeWidth={1.5} />
            <p className='underline font-normal border-foreground'>0</p>
          </div>
          <Button className='h-6 text-xs w-fit' variant={'outline'}>MAX</Button>
          <Button className='h-6 text-xs w-fit' variant={'outline'}>50%</Button>
        </div>
      </div>
      <div className='flex items-center justify-between w-full bg-muted/30 p-2 rounded-md'>
        <ModalSelectToken />
        <Input className='text-right border-0 focus-visible:ring-0 font-semibold text-xl w-fit h-fit appearance-none' defaultValue={0} type='number'/>
      </div>
    </div>
  );
};

export default SwapComponents;