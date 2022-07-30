import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></Script>
    <Component {...pageProps} />
  </>)
}

export default MyApp
