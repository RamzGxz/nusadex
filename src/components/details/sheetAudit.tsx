import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CheckCircle2, ChevronRight, ShieldAlertIcon } from 'lucide-react';
import { Tooltip, TooltipProvider } from '../ui/tooltip';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';

const SheetAudit = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button className="flex items-center gap-1 group" onClick={() => setOpen(true)}>
        <ShieldAlertIcon size={14} />
        <p className="text-xs">1 Issue</p>
        <ChevronRight size={14} className="opacity-50 group-hover:opacity-100" />
      </button>
      <SheetContent className='!w-[500px] !max-w-full'>
        <SheetHeader className='space-y-8'>
          <SheetTitle className='pb-2 border-b'>Token Audit</SheetTitle>
          <SheetDescription>
            <div className='space-y-8 max-h-[85vh] overflow-auto pe-3'>
              <p className='text-sm'>This security review is solely for evaluating token safety. Its accuracy isn’t 100% guaranteed. It doesn’t constitute an endorsement or recommendation.</p>
              <div className='flex items-center gap-3'>
                <div className='bg-secondary p-2 rounded-md'>
                  <ShieldAlertIcon size={28} />
                </div>
                <p className='text-center font-semibold text-foreground'>1 <br /> Cautions</p>
              </div>
              <div className='w-full space-y-8'>
                <div className='space-y-3'>
                  <p className='font-medium text-xs'>Swap analysis</p>
                  <div className='space-y-5 text-foreground'>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Honeypot</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If a token contains malicious code, it’s a honeypot token and can’t be traded.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>Yes</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can steal fees</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there are fee-stealing functions, they can steal fees during approvals or transfers, causing unsuccessful transactions or asset loss.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-3'>
                  <p className='font-medium text-xs'>Contract analysis</p>
                  <div className='space-y-5 text-foreground'>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can issue additional tokens</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there are unspecified additional issuance functions, they can lead to an increase in the token’s circulating supply, affecting its price.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>Yes</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can modify transaction tax</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If the contract owner can modify the transaction tax and raise it to over 50%, the token could be untradable as a result.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Has cooling mechanism</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there are cooling mechanisms, users wouldn’t be able to sell the token in a certain period of time or within a certain block after buying the token.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Has allowlist</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there’s an allowlist, it may prevent certain addresses from trading this token.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can modify max transaction amount</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If the maximum number of transactions or holding amount are modifiable, on rare occasions, it’d prevent users from trading this token.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can terminate transactions</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If the contract owner can and does terminate a transaction, the affected assets will no longer be available for trading or transfer.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Can self-destruct</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If a self-destruct function exists and is triggered, it will destroy the contract, disable all token functions, and erase all related assets.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Has proxy functions</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If the contract contains proxy functions, the contract owner can replace the token’s logic with proxy contracts, affecting the token’s price and functions.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Has blocklist</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there’s a blocklist, it may prevent certain addresses from trading this token.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Limits transactions</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there’s a blocklist, it may prevent certain addresses from trading this token.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger><p className='font-medium text-foreground border-b'>Has calculation exploits</p></TooltipTrigger>
                          <TooltipContent className='max-w-40 rounded-md text-xs p-1 bg-secondary text-foreground'>
                            If there are such exploits in the contract’s code, the token would be susceptible to attacks, which may result in risky events such as additional token issuance, causing asset loss.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='text-green-500 w-5 h-5' />
                        <p className='text-sm'>No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  );
};

export default SheetAudit;