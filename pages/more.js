import React, { useContext, useState } from 'react'
import Layout from '../components/layout/layout'
import styles from './more.module.css'
import StoreContext from '../store'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

function More() {
  const store = useContext(StoreContext)
  //console.log('Active: ' + store.theme.active)
  return (
    <Layout>
      <div className={styles.container}>
        {['light', 'dim', 'dark'].map((themeKey) => (
          <label key={themeKey} className={styles.label}>
            <input
              type="radio"
              value={themeKey}
              name="theme" //Name'leri ayni olan radio buttonlardan tek bir tanesi secilir.
              checked={themeKey === store.theme.active}
              onChange={(e) => store.changeTheme(e.target.value)}
            />
            {THEME[themeKey]}
          </label>
        ))}
      </div>
    </Layout>
  )
}
export default More
