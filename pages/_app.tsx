import { NextPage } from 'next'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps}></Component>)
}

export default MyApp;
