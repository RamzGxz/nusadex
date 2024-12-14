import AppShell from "@/components/appshell";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, BitgetWalletAdapter, AlphaWalletAdapter, AvanaWalletAdapter, BitpieWalletAdapter, CloverWalletAdapter, Coin98WalletAdapter, CoinhubWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new BitgetWalletAdapter(), new AlphaWalletAdapter(), new BitpieWalletAdapter(), new AvanaWalletAdapter(), new CloverWalletAdapter(), new Coin98WalletAdapter(), new CoinhubWalletAdapter(), new TrustWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  )


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange>
      <SessionProvider session={session}>
        <ToastContainer draggable theme="dark" />
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect localStorageKey="wadaw">
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          </WalletProvider>
        </ConnectionProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
