import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useWallet, Wallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import wallet from '@/lib/sdk/wallet';


const ModalConnectWallet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { connect, connecting, select, wallets, connected, publicKey, disconnect } = useWallet();
  const [selectedWallet, setSelectedWallet] = useState<Wallet>({} as Wallet)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (connected) {
      setModalOpen(false)
    }
  }, [connected])

  const handleWalletSelect = async (walletName: WalletName, item: Wallet) => {
    try {
      setSelectedWallet(item)
      select(walletName)
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const getSolBalance = async () => {
    if (connected && publicKey) {
      try {
        const balance = await wallet.getBalance(publicKey.toBase58().toString())
        setBalance(Number(balance))
        console.log(balance)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getSolBalance()
  }, [connected])

  return (
    <>
      {connected ? (
        <TooltipProvider delayDuration={50}>
          <Tooltip open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <TooltipTrigger className='w-fit p-1 bg-foreground rounded-md text-xs text-background font-normal flex items-center gap-2'>
              <img src={selectedWallet.adapter.icon} alt="sol-logo" className='w5 h-5 object-cover' />
              {publicKey?.toBase58().slice(0, 5) + '...' + publicKey?.toBase58().slice(-5)}
            </TooltipTrigger>
            <TooltipContent className='w-full space-y-3'>
              <h1 className='font-semibold border-b text-center pb-1'>{balance.toFixed(5)} SOL</h1>
              <div className='flex items-center flex-col gap-2  px-1'>
                <button onClick={disconnect} className='px-2 hover:bg-background hover:text-foreground py-2 rounded-md transition-colors'>Disconnect</button>
                {/* <button>Disconnect</button> */}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <Dialog open={modalOpen} onOpenChange={(isOpen) => setModalOpen(isOpen)}>
          <DialogTrigger asChild>
            <Button size="sm">Connect Wallet</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="space-y-1 pb-5 border-b">
                  <h1 className="font-semibold text-4xl">Nusadex</h1>
                  <p className="text-sm italic font-normal text-muted-foreground">
                    Securely start your Web3 journey
                  </p>
                </div>
              </DialogTitle>
              <DialogDescription>
                <div className="w-full grid grid-cols-4 gap-3 pt-5">
                  {wallets.map((item, index) => (
                    <Button key={index} onClick={() => handleWalletSelect(item.adapter.name, item)} variant="outline" disabled={connecting} className='h-fit w-full p-3'>
                      <div className="flex items-center justify-center flex-col gap-1">
                        <img src={item.adapter.icon} alt={item.adapter.name} className="w-10 h-10 object-cover p-1 rounded-full border-2" />
                        <p className="text-xs font-normal text-wrap"> {item.adapter.name}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalConnectWallet;
