import Dropzone from '@/components/dropzone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { ChartAreaIcon, EarthIcon } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const TokenListingPage = () => {
  const [tokenAddress, setTokenAddress] = useState('')
  const [title, setTitle] = useState('')
  const [pitch, setPitch] = useState('')
  const [tokenImage, setTokenImage] = useState('')
  const [website, setWebsite] = useState('')
  const [x, setX] = useState('')
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')

  const handleOrder = async () => {
    try {

    } catch (error) {

    }
  }

  useEffect(() =>{
    console.log()
  }, [])


  return (
    <div className='max-w-screen-md lg:px-0 px-5 py-10 flex justify-center flex-col gap-8 items-center w-full mx-auto'>
      <h1 className='text-7xl text-center font-bold'>Token Listing</h1>
      <Separator className='w-full' />
      <form className='w-full space-y-8'>
        <div className='space-y-2.5'>
          <label className='font-semibold'>Token address</label>
          <Input placeholder='Place your token address here' />
        </div>
        
        <div className='space-y-2.5'>
          <label className='font-semibold'>Title</label>
          <Input />
        </div>
        <div className='space-y-2.5'>
          <div className='space-y-1'>
            <label className='font-semibold'>Pitch</label>
            <p className='text-muted-foreground text-sm'>A short description of your project to get people interested</p>
          </div>
          <div className='relative'>
            <Textarea placeholder='Place descriptions at least 80 character, max 120 character' className='h-24' />
            <p className='absolute top-2 right-2 text-xs text-muted-foreground'>0/120</p>
          </div>
        </div>
        <div className='space-y-5'>
          <div className='space-y-1'>
            <label className='font-semibold'>Token image</label>
            <ul className='list-disc text-sm ml-4 text-muted-foreground'>
              <li>1:1 aspect ratio (square, for example 500x500px)</li>
              <li>min. image width: 100px</li>
              <li>support formats: png, jpg and webp</li>
              <li>max. file size: 4.5MB</li>
            </ul>
          </div>
          <Dropzone />
        </div>
        <div className='space-y-5'>
          <label className='font-semibold'>Links</label>
          <div className='grid w-full  grid-cols-2 gap-5'>
            <Dialog>
              <DialogTrigger className='w-full text-sm py-6 hover:bg-secondary/80 hover:border-secondary/60 border rounded-md'>Add website</DialogTrigger>
              <DialogContent>
                <DialogHeader className='space-y-5'>
                  <DialogTitle>
                    <div className='space-y-3'>
                      <p className='font-semibold'>Website URL</p>
                      <p className='text-sm text-muted-foreground font-normal'>Link to the project's website. It should contain project address and links to socials.</p>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <div className='space-y-3 text-foreground'>
                      <label className='font-semibold'>URL</label>
                      <Input type='text' placeholder='https://' />
                    </div>
                  </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className='w-full text-sm py-6 hover:bg-secondary/80 hover:border-secondary/60 border rounded-md'>Add X</DialogTrigger>
              <DialogContent>
                <DialogHeader className='space-y-5'>
                  <DialogTitle>
                    <div className='space-y-3'>
                      <p className='font-semibold'>X URL</p>
                      <p className='text-sm text-muted-foreground font-normal'>Link to the project's X profile (Twitter)</p>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <div className='space-y-3 text-foreground'>
                      <label className='font-semibold'>URL</label>
                      <Input type='text' placeholder='https://' />
                    </div>
                  </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className='w-full text-sm py-6 hover:bg-secondary/80 hover:border-secondary/60 border rounded-md'>Add telegram</DialogTrigger>
              <DialogContent>
                <DialogHeader className='space-y-5'>
                  <DialogTitle>
                    <div className='space-y-3'>
                      <p className='font-semibold'>Telegram URL</p>
                      <p className='text-sm text-muted-foreground font-normal'>Link to the project's Telegram profile</p>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <div className='space-y-3 text-foreground'>
                      <label className='font-semibold'>URL</label>
                      <Input type='text' placeholder='https://' />
                    </div>
                  </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className='w-full text-sm py-6 hover:bg-secondary/80 hover:border-secondary/60 border rounded-md'>Add Discord</DialogTrigger>
              <DialogContent>
                <DialogHeader className='space-y-5'>
                  <DialogTitle>
                    <div className='space-y-3'>
                      <p className='font-semibold'>Discord URL</p>
                      <p className='text-sm text-muted-foreground font-normal'>Link to the project's Discord server / invitation</p>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <div className='space-y-3 text-foreground'>
                      <label className='font-semibold'>URL</label>
                      <Input type='text' placeholder='https://' />
                    </div>
                  </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className='space-y-3'>
          <div className='flex items-start gap-4'>
            <Checkbox />
            <p className='text-sm font-medium'>I understand that all supplied data must be verifiable through official channels such as website and socials.</p>
          </div>
          <div className='flex items-start gap-4'>
            <Checkbox />
            <p className='text-sm font-medium'>I understand and accept that Nusadex reserves the right to reject or modify the provided information</p>
          </div>
        </div>
        
        <Separator />
        <p className='text-sm'>By completing this purchase, I confirm that I've read and agree to the <Link href={'#'} className='hover:underline'>Refund Policy.</Link></p>
        <Button variant={'default'} size={'lg'} className='w-full'>Order Now</Button>
      </form>
    </div>
  );
};

export default TokenListingPage;