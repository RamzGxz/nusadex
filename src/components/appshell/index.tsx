import React, { ReactElement, useEffect, useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { throttle } from "lodash"

const AppShell = ({ children }: { children: ReactElement }) => {
  const { pathname } = useRouter()
  const path = ['/404']
  const footerPath = ['/tokens/details/[id]', '/tokens']

  return (
    <>
      <Head>
        <title>Nusadex - Fast & Smart Exchange</title>
        <link rel="icon" href="/logo-nusadex-text.png" />
      </Head>
      {!path.includes(pathname) ? (
        <div className='relative'>
          <div className={`w-full py-3 ${pathname === '/tokens' ? 'sticky top-0' : 'sticky top-0'} backdrop-blur-3xl z-50`}>
            <Navbar />
          </div>
          <div className='w-full px-8'>
            {children}
          </div>
          {!footerPath.includes(pathname) && (
            <div className='py-3'>
              <Footer />
            </div>
          )}
        </div>
      ) : children}
    </>
  );
};

export default AppShell;