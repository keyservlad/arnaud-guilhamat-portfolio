import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/public/styles/globals.css";
import 'react-toastify/dist/ReactToastify.min.css';
import Head from "next/head";
import AppProvider from "~/context/appContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <AppProvider>
      <SessionProvider session={session}>
        <Head>
          <title>Arnaud Guilhamat&#39;s portfolio</title>
          <meta name="description" content="Arnaud Guilhamat's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </AppProvider>
  );
};

export default api.withTRPC(MyApp);
