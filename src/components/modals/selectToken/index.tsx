import { ApiV3Token } from '@raydium-io/raydium-sdk-v2';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { ChevronDown, LoaderCircle } from 'lucide-react';
import token from '@/lib/sdk/tokens';
import { Input } from '@/components/ui/input';



interface props {
  setMint: Dispatch<SetStateAction<string>>
  tokenData: ApiV3Token,
  mint: string,
  disabled: boolean,
  mintA: string
}

const ModalSelectToken = ({ setMint, tokenData, mint, disabled = false, mintA }: props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [mintList, setMintList] = useState<ApiV3Token[]>([])
  const [searchValue, setSearchValue] = useState('')

  const getDefaultMintList = async () => {
    try {
      const data = await token.list()
      if (data) {
        setMintList(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTokenInfo = async () => {
    try {
      const data = await token.getTokenInfo(searchValue)
      if (data) {
        setMintList(data)

      }
    } catch (error) {
      console.log(error)
    }

  }


  // useEffect(() => {
  //   getDefaultMintList()
  // }, [])

  useEffect(() => {
    if (searchValue !== '' && searchValue.length === 44) {
      getTokenInfo()
    } else {
      getDefaultMintList()
    }
  }, [searchValue])

  const handleSetMint = (mint: string) => {
    setMint(mint)
    setModalOpen(false)
  }

  useEffect(() =>{
    if(!modalOpen) {
      setSearchValue('')
    }
  }, [modalOpen])

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <Button disabled={disabled} onClick={() => setModalOpen(true)} className='p-2 disabled:px-4 disabled:opacity-100 disabled:bg-muted-foreground/20 rounded-md h-fit bg-muted flex items-center justify-between hover:bg-muted-foreground/30 text-foreground'>
        {tokenData.address ? (
          <div className='flex items-center gap-2'>
            <img src={tokenData.logoURI} alt='' className='w-7 h-7 object-cover rounded-full' />
            <p className='font-semibold'>{tokenData.symbol === 'WSOL' ? 'SOL' : tokenData.symbol}</p>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <LoaderCircle size={28} className='animate-spin' />
          </div>
        )}
        {!disabled && <ChevronDown size={24} />}
      </Button>
      {!disabled && (
        <DialogContent>
          <DialogTitle className='text-xl font-semibold'>Select a token</DialogTitle>
          <DialogDescription className='mt-3'>
            <div className='w-full space-y-5'>
              <Input type='search' className='h-9' placeholder='Input token address here' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <div className='space-y-3'>
                <p className='text-xs'>Popular Tokens</p>
                <div className='w-full grid grid-cols-5 lg:gap-3 gap-2'>
                  
                  <Button disabled={mint === 'BQzggkomEhe4fUZmHEUMG7JpM9eioFcQinFshWYPnxp9'} onClick={() => handleSetMint('BQzggkomEhe4fUZmHEUMG7JpM9eioFcQinFshWYPnxp9')} className='h-fit p-1 flex items-center gap-1 px-3 w-full' variant={'outline'}>
                    <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover rounded-full' />
                    <p className='text-xs'>MUDA</p>
                  </Button>
                  <Button disabled={mint === '5QzVU4pd7apoXVhoAn97xYvgxdSARncgchLaH53E7U3e'} onClick={() => handleSetMint('5QzVU4pd7apoXVhoAn97xYvgxdSARncgchLaH53E7U3e')} className='h-fit p-1 flex items-center gap-1 px-3 w-full' variant={'outline'}>
                    <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover rounded-full' />
                    <p className='text-xs'>GASVIN</p>
                  </Button>
                  <Button disabled={mint === '2qS8F4yMFHbVMY7KKCir4A4iireWDorRrpku9qVnWSFo'} onClick={() => handleSetMint('2qS8F4yMFHbVMY7KKCir4A4iireWDorRrpku9qVnWSFo')} className='h-fit p-1 flex items-center gap-1 px-3 w-full' variant={'outline'}>
                    <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover rounded-full' />
                    <p className='text-xs'>KERIS</p>
                  </Button>
                  <Button disabled={mint === '5uuVHm3GDZXqxEeFa7JKyve4HVifhjaSpAWHfz2Bb8aY'} onClick={() => handleSetMint('5uuVHm3GDZXqxEeFa7JKyve4HVifhjaSpAWHfz2Bb8aY')} className='h-fit p-1 flex items-center gap-1 px-3 w-full' variant={'outline'}>
                    <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover rounded-full' />
                    <p className='text-xs'>UTR</p>
                  </Button>
                  <Button disabled={mint === 'GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma'} onClick={() => handleSetMint('GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma')} className='h-fit p-1 flex items-center gap-1 px-3 w-full' variant={'outline'}>
                    <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover rounded-full' />
                    <p className='text-xs'>PVO</p>
                  </Button>
                </div>
              </div>
              <div className='flex justify-between items-center pe-2'>
                <p className='text-xs'>Token</p>
                <p className='text-xs'>Balance/address</p>
              </div>
              <div className='space-y-3 max-h-[50vh] h-[45vh] overflow-auto pe-2'>
                {mintList && mintList.length > 0 ? (
                  mintList.filter(item => item.name !== '').map((item, index) => (
                    <Button disabled={item.address === mint} key={index} onClick={() => {
                      setMint(item.address)
                      setModalOpen(false)
                    }} className='h-fit p-2 bg-transparent border-0 justify-between flex w-full' variant={'outline'}>
                      <div className='flex items-start gap-3'>
                        <img src={item.logoURI} alt={item.symbol} className='w-8 h-8 object-cover' />
                        <div className="text-left space-y-0">
                          <p className='font-semibold'>{item.symbol}</p>
                          <p className='text-xs font-light'>{item.name}</p>
                        </div>
                      </div>
                      <div className='space-y-1 text-right'>
                        <p className='underline text-foreground'>0</p>
                        <p className='text-xs font-light'>{item.address.slice(0, 5) + '...' + item.address.slice(-5)}</p>
                      </div>
                    </Button>
                  ))
                ) : (
                  ''
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      )}
    </Dialog>

  );
};

export default ModalSelectToken;