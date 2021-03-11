import React from 'react'
import '../styles/app.css'

//Bu sayfa global css eklemek icin kullanildi. _app dosya ismi next icin bu manaya geliyor.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
