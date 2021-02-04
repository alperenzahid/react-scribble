import React from 'react'
import NavigationButton from './buttons/navigation-button'
import TitleBold from './title-bold'
import * as menuItems from './icons/menu'
let { Twitter } = menuItems
let navMenuItems = [
  'Home',
  'Explore',
  'Notification',
  'Messages',
  'Bookmark',
  'Lists',
  'Profile',
  'More'
]
import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      {navMenuItems.map((item) => {
        let MenuItem = menuItems[item]
        return (
          <NavigationButton
            selected={selectedKey.toLowerCase() === item.toLowerCase()}
            notify={item.toLowerCase() === 'notification' ? 4 : false}
          >
            <MenuItem />
            <TitleBold>{item}</TitleBold>
          </NavigationButton>
        )
      })}
      {/*<NavigationButton>*/}
      {/*  <Home />*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Explore />*/}
      {/*  <TitleBold>Explore</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Notification />*/}
      {/*  <TitleBold>Notification</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Messages />*/}
      {/*  <TitleBold>Messages</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Bookmark />*/}
      {/*  <TitleBold>Bookmark</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Lists />*/}
      {/*  <TitleBold>Lists</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <Profile />*/}
      {/*  <TitleBold>Profile</TitleBold>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton>*/}
      {/*  <More />*/}
      {/*  <TitleBold>More</TitleBold>*/}
      {/*</NavigationButton>*/}
    </nav>
  )
}

export default Navigation
