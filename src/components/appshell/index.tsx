import React, { ReactElement } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Head from 'next/head';

const AppShell = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Nusadex - Fast & Smart Exchange</title>
      </Head>
      <div>
        <div className='w-full py-3'>
          <Navbar />
        </div>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm lg:px-3 px-6'>
          {children}
        </div>
        <div className='py-3'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppShell;