import "@/styles/globals.css";
import { configureChains, sepolia, WagmiConfig, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { FC } from "react";

interface AppProps {
  Component: FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const { provider, webSocketProvider } = configureChains(
    [sepolia],
    [publicProvider()]
  );

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}