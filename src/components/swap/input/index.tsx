import { ArrowUpDown, Wallet } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import ModalSelectToken from '../../modals/selectToken';
import { Input } from '../../ui/input';
import token from '@/lib/sdk/tokens';
import { ApiV3Token } from '@raydium-io/raydium-sdk-v2';
import { toast } from 'react-toastify';
import { useWallet } from '@solana/wallet-adapter-react';
import wallet from '@/lib/sdk/wallet';

interface props {
  mint: string,
  setMint: Dispatch<SetStateAction<string>>
  title: string,
  balance: number
}


const SwapInput = ({ mint, setMint, title, balance }: props) => {
  const [tokenData, setTokenData] = useState<ApiV3Token>({} as ApiV3Token)
  const getTokenInfo = async () => {
    try {
      const data = await token.getTokenInfo(mint)
      if (data) {
        setTokenData(data[0])
      }
    } catch (error) {
      console.log(error)
      toast.error('Failed to get token info, please check your network!')
    }
  }

  useEffect(() => {
    getTokenInfo()
  }, [mint])

  return (
    <div className={`w-full h-full flex flex-col justify-between gap-3 ${title === 'From' && 'bg-muted/25'} rounded-md p-2`}>
      <div className='pb-3 border-b flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <Wallet className='w-5 h-5' strokeWidth={1.5} />
            <p className='underline font-normal border-foreground'>{balance}</p>
          </div>
          <Button className='h-6 text-xs w-fit' variant={'outline'}>MAX</Button>
          <Button className='h-6 text-xs w-fit' variant={'outline'}>50%</Button>
        </div>
      </div>
      <div className='flex items-center justify-between w-full bg-muted/40 p-2 rounded-md'>
        <ModalSelectToken setMint={setMint} tokenData={tokenData} mint={mint} />
        <Input className='text-right border-0 focus-visible:ring-0 font-semibold lg:text-2xl w-fit h-fit appearance-none' defaultValue={0} type='number' />
      </div>
    </div>
  );
};

export default SwapInput;