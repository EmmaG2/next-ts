import type { AppProps } from 'next/app'
import { Button, NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import { darkTheme, lightTheme } from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
