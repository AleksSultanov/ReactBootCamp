import { Layout } from '@/components/Layout/Index'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )

}
