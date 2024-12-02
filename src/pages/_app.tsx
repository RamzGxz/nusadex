import AppShell from "@/components/appshell";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, BitgetWalletAdapter, AlphaWalletAdapter, AvanaWalletAdapter, BitpieWalletAdapter, CloverWalletAdapter, Coin98WalletAdapter, CoinhubWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useEffect, useMemo } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter(), new PhantomWalletAdapter(), new SolflareWalletAdapter(), new BitgetWalletAdapter(), new AlphaWalletAdapter(), new BitpieWalletAdapter(), new AvanaWalletAdapter(), new CloverWalletAdapter(), new Coin98WalletAdapter(), new CoinhubWalletAdapter(), new TrustWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  )

  useEffect(() => {
    const handleError = (event: { preventDefault: () => void; error: any; }) => {
      event.preventDefault(); // Cegah error overlay
      console.error("Global error:", event.error);
    };

    const handleRejection = (event: { preventDefault: () => void; reason: any; }) => {
      event.preventDefault(); // Cegah unhandled promise overlay
      console.error("Unhandled promise rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={(error) => {
        if (error.name === 'WalletNotSelectedError') {
          return
        }
        toast.error(error.message)
        console.log({ error })
      }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <ToastContainer draggable theme="dark" />
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </ThemeProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
