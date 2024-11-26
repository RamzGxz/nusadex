import AppShell from "@/components/appshell";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ThemeProvider>
  );
}
