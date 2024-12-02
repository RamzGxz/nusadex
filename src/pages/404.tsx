import React from 'react';
import errorAnimations from '../../public/errorAnimations.json'
import Lottie from "lottie-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-0'>
      <Lottie animationData={errorAnimations} className='w-[30%]' />
      <div className='text-center space-y-2'>
        <h1 className='text-2xl font-semibold'>Opps</h1>
        <p className='max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas architecto quas dignissimos praesentium laudantium ut.</p>
        <div>
          <Link href={'/'}>
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;