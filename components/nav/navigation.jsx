import React from 'react'
import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../text/text-title'
import * as menuItems from '../icons/menu'
let { Twitter } = menuItems
let navMenuItems = [
  { key: 'Home', notify: 0, selectedIcon: 'HomeFill' },
  { key: 'Explore', notify: false, selectedIcon: 'ExploreFill' },
  { key: 'Notification', notify: 3, selectedIcon: 'NotificationFill' },
  { key: 'Messages', notify: 44, selectedIcon: 'MessagesFill' },
  { key: 'Bookmark', notify: 6, selectedIcon: 'BookmarkFill' },
  { key: 'Lists', selectedIcon: 'ListsFill' },
  { key: 'Profile', notify: 1, selectedIcon: 'ProfileFill' },
  { key: 'More', selectedIcon: 'More' }
]
import styles from './navigation.module.css'

function Navigation({ selectedKey = 'home', flat = false }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      {navMenuItems.map((item) => {
        let _selected = selectedKey.toLowerCase() === item.key.toLowerCase()
        let MenuItem = _selected
          ? menuItems[item.selectedIcon]
          : menuItems[item.key]
        return (
          <NavigationButton
            key={item.key}
            notify={item.notify != null ? item.notify : false}
            selected={_selected}
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
