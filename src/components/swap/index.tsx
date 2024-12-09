import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SwapInput from './input';
import { Button } from '../ui/button';
import { AlertCircle, ArrowUpDown, LoaderCircle, WavesIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { useWallet } from '@solana/wallet-adapter-react';
import ModalConnectWallet from '../modals/connectWallet';
import wallet from '@/lib/sdk/wallet';
import { toast } from 'react-toastify';

interface props {
  hasPriceDetails?: boolean
}

const SwapComponents = ({ hasPriceDetails = true }: props) => {
  const [mintA, setMintA] = useState('So11111111111111111111111111111111111111112')
  const [mintB, setMintB] = useState('GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma')
  const [tokenChange, setTokenChange] = useState(false)
  const { connected, publicKey } = useWallet()
  const [tokenAccountData, setTokenAccountData] = useState<{ address: string; balance: number; }[]>([])
  const [balanceA, setBalanceA] = useState(0)
  const [balanceB, setBalanceB] = useState(0)

  const getSolBalance = async (setBalance: Dispatch<SetStateAction<number>>) => {
    if (connected && publicKey) {
      try {
        const balance = await wallet.getBalance(publicKey.toBase58())
        setBalance(Number(balance))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const getTokenBalance = async () => {
    try {
      if (publicKey && connected) {
        const data = await wallet.getTokenAccountBalance(publicKey.toBase58())
        if (data) {
          setTokenAccountData(data)
        }
      }
    } catch (error) {
      toast.error('Failed to get Token balance, please check your network')
      console.log(error)
    }
  }

  useEffect(() => {
    if (connected && publicKey) {
      getTokenBalance()
    }
  }, [connected, publicKey])

  useEffect(() => {
    if (connected && publicKey) {
      if (tokenAccountData) {
        const mintAbalance = tokenAccountData.filter(item => item.address === mintA)
        console.log(tokenAccountData)
      }
    }
  }, [connected, publicKey, mintA, mintB])

  return (
    <div className='w-full flex flex-col gap-5 items-center'>

      <SwapInput mint={tokenChange ? mintB : mintA} setMint={tokenChange ? setMintB : setMintA} title='From' balance={balanceA} />

      <Button size={'icon'} onClick={() => setTokenChange(!tokenChange)}><ArrowUpDown /></Button>

      <SwapInput mint={tokenChange ? mintA : mintB} setMint={tokenChange ? setMintA : setMintB} title='To' balance={balanceB} />

      <div className={`w-full ${hasPriceDetails ? 'bg-muted/30 p-3' : ''}  rounded-md flex flex-col gap-5`}>
        {hasPriceDetails && (
          <>
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
          </>
        )}
        {connected ? (
          <Button className='mt-3' size={'lg'}>SWAP</Button>
        ) : (
          <ModalConnectWallet btnSize={'lg'} />
        )}
      </div>

    </div>
  );
};

export default SwapComponents;