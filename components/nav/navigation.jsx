import React from 'react'
import { useRouter } from 'next/router'

import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../text/text-title'
import * as menuIconItems from '../icons/menu'
let { Twitter } = menuIconItems
import { NAV_MENU_ITEM } from '../../constants'
import cn from 'classnames'

import styles from './navigation.module.css'

function Navigation({ flat = false }) {
  const router = useRouter()
  const selectedKey =
    router.pathname !== '/' ? router.pathname.replace('/', '') : 'home'
  return (
    <nav className={styles.nav}>
      <NavigationButton className="navtwitter">
        <Twitter style={{ fontSize: 30 }} />
      </NavigationButton>

      {NAV_MENU_ITEM.map((item) => {
        let _selected = selectedKey.toLowerCase() === item.key.toLowerCase()
        let MenuItem = _selected
          ? menuIconItems[item.selectedIcon]
          : menuIconItems[item.key]
        return (
          <NavigationButton
            key={item.key}
            notify={item.notify != null ? item.notify : false}
            selected={_selected}
            href={item.path}
            className={cn(styles.navButton, 'nav' + item.key.toLowerCase())}
          >
            <MenuItem />
            {!flat && <TextTitle>{item.key}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
