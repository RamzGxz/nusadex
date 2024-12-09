import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const ModalLoginReg = () => {
  const [modalOPen, setModalOpen] = useState(false)
  const [tabsValue, setTabsValue] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { data: session, status }: any = useSession()
  const [load, setLoad] = useState(false)

  const handleSignInUser = async () => {
    setLoad(true)
    try {
      const resp = await signIn('user', { email, password, redirect: false })
      if(resp?.status === 401) {
        toast.error('Failed to logged in! wrong credentials')
        setLoad(false)
      } else if(resp?.error) {
        toast.error('Failed fo fetch! please contact de developer')
        setLoad(false)
      } else {
        toast.success('Login succesfully!')
        setModalOpen(false)
        setLoad(false)
        console.log(session)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog onOpenChange={setModalOpen} open={modalOPen}>
      <Button onClick={() => setModalOpen(true)} size={'sm'}>Login & Register</Button>
      <DialogContent className='xl:max-w-screen-lg md:max-w-screen-md lg:max-w-screen-lg sm:max-w-screen-sm'>
        <DialogHeader className='flex justify-between items-start gap-16 flex-row mt-3'>
          <DialogTitle className='w-1/2 text-center lg:flex hidden flex-col gap-3 items-center'>
            <h1 className='text-3xl font-semibold'>Unlock rewards exclusively for new users</h1>
            <img src="https://www.okx.com/cdn/assets/plugins/contentful/a0gcvrswkr1o/4GexLcXKBCbjakXDa0uvPR/eb59807f353f0bfb0a4e56483c9faf53/Global_Join_Page_Icon.png?x-oss-process=image/format,webp/format,webp" alt="banners" />
          </DialogTitle>
          <DialogDescription className='lg:w-1/2 w-full'>
            <div className='w-full'>
              <Tabs className="w-full" defaultValue='login' value={tabsValue} onValueChange={setTabsValue}>
                <TabsList className='w-full'>
                  <TabsTrigger value="login" className='w-full'>Login</TabsTrigger>
                  <TabsTrigger value="register" className='w-full'>Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <div className='w-full p-3 space-y-5 text-start'>
                    <p className='text-muted-foreground italic'>Please fill this field</p>
                    <div className='w-full flex items-start flex-col gap-3'>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="email" className='font-medium text-foreground'>Email</label>
                        <Input className='w-full' type='text' placeholder='type your email here...' value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="password" className='font-medium text-foreground'>Password</label>
                        <Input className='w-full' type='password' placeholder='type your password here...' onChange={(e) => setPassword(e.target.value)} value={password} />
                      </div>
                    </div>
                    <p className='text-center w-full'>Don't have an account? <button onClick={() => setTabsValue('register')} className='underline hover:text-foreground'>Register</button> here</p>
                    <Button className='w-full font-semibold' size={'lg'} onClick={handleSignInUser}>Login</Button>
                    <div className='flex items-center justify-center w-full'>
                      <div className='flex items-center gap-3'>

                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="register"></TabsContent>
              </Tabs>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalLoginReg;