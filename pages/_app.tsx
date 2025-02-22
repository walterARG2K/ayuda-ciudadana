import { Transition } from "../components/transition";
import type { AppProps } from "next/app";
import "/lib/base.css";
import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </RecoilRoot>
    </div>
  );
}
