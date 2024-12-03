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
import { ChevronDown } from 'lucide-react';
import token from '@/lib/sdk/tokens';



interface props {
  setMint?: Dispatch<SetStateAction<string>>
  setTokenData?: Dispatch<SetStateAction<ApiV3Token>>
}

const ModalSelectToken = ({ setMint, setTokenData }: props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [mintList, setMintList] = useState<ApiV3Token[]>([])
  const [load, setLoad] = useState(false)
  const getDefaultMintList = async () => {
    try {
      const data = await token.list()
      if (data) {
        setMintList(data)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getDefaultMintList()

  }, [])

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <Button onClick={() => setModalOpen(true)} className='p-2 rounded-md h-fit bg-muted flex items-center justify-between hover:bg-muted-foreground/30 text-foreground'>
        <div className='flex items-center gap-2'>
          <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-7 h-7 object-cover' />
          <p className='font-semibold'>PVO</p>
        </div>
        <ChevronDown size={24} />
      </Button>
      <DialogContent className=''>
        <DialogTitle className='text-xl font-semibold'>Select a token</DialogTitle>
        <DialogDescription className='mt-3'>
          <div className='w-full space-y-5'>
            <div className='space-y-3'>
              <p className='text-xs'>Popular Tokens</p>
              <div className='flex w-full items-center gap-3'>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
                <Button className='h-fit p-1 flex items-center gap-1 px-2' variant={'outline'}>
                  <img src="https://img-v1.raydium.io/icon/GzY1KbkgbxaLCY52aQZ2JDk1ygE5V4wF7c9UdDVuvPma.png" alt='' className='w-6 h-6 object-cover' />
                  <p className='text-xs'>PVO</p>
                </Button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-xs'>Token</p>
              <p className='text-xs'>Balance/address</p>
            </div>
            <div className='space-y-3 max-h-[50vh] h-[50vh] overflow-auto pe-2'>
              {mintList.filter(item => item.name !== '').map((item, index) => (
                <Button key={index} className='h-fit p-2 bg-transparent border-0 justify-between flex w-full' variant={'outline'}>
                  <div className='flex items-start gap-3'>
                    <img src={item.logoURI} alt={item.symbol} className='w-8 h-8 object-cover' />
                    <div className="text-left space-y-0">
                      <p className='font-semibold'>{item.symbol}</p>
                      <p className='text-xs font-light'>{item.name}</p>
                    </div>
                  </div>
                  <div className='space-y-1 text-right'>
                    <p className='underline text-foreground'>0</p>
                    <p className='text-xs font-light'>{item.address.slice(0,5) + '...' + item.address.slice(-5)}</p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>

  );
};

export default ModalSelectToken;