import React from 'react'

import useWindowSize from '../../hooks/useWindowSize'
import styles from './layout.module.css'

import cn from 'classnames'
import SideBar from './sidebar'
import cst from '../../constants'
import Main from './main'
import Extra from './extra'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn([styles.layout])}>
      <SideBar flat={size.width < cst.DESKTOP_SIZE}>sidebar</SideBar>

      <Main>{children}</Main>

      {size.width > cst.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
