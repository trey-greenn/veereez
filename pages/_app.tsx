import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VERECCE - Content Creation Tools</title>
        <meta name="description" content="Suite of tools for YouTube and social media content creation" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
