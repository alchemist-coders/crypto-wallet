import Head from "next/head";

import Web3Provider from "../utils/Web3Provider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="description" content="Just a Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <title>Cryplet</title>
      </Head>

      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </>
  );
}

export default MyApp;
