import React, { useEffect, useState } from 'react'
import '../styles/app.css'
import StoreContext from '../store'

//Bu sayfa global css eklemek icin kullanildi. _app dosya ismi next icin bu manaya geliyor.
export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(() => {
    const defaultTheme = { previous: '', active: 'light' }
    try {
      const t = localStorage.getItem('THEME')
      if (t == null) {
        return defaultTheme
      }
      return JSON.parse(t)
    } catch (e) {
      console.log('Error: ' + e.message)
      return defaultTheme
    }
  })
  const changeTheme = (newTheme) => {
    if (theme.active === newTheme) {
      return
    }
    //Eğer yeni bir JSON oluşturmayıp mevcut JSON değerlerini set edersem setState tetiklenmiyor.
    const tToSet = { previous: theme.active, active: newTheme }
    themeSet(tToSet)
    localStorage.setItem('THEME', JSON.stringify(tToSet))
  }

  //UseLayoutEffect ise virtual dom olustuktan hemen sonra calisir. UseEffect'den once calisir.
  //UseEffect sayfa load olduktan sonra çalışır
  useEffect(() => {
    const $html = document.querySelector('html')
    console.log(`Old theme: ${theme.previous}, New theme: ${theme.active}`)
    if (theme.previous !== '') $html.classList.remove(theme.previous)
    $html.classList.add(theme.active)
  }, [theme])
  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
