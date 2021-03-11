import React from 'react'
import Layout from '../components/layout/layout'
import useWindowSize from '../hooks/useWindowSize'
import cst from '../constants'
import SideBar from '../components/layout/sidebar'
import Main from '../components/layout/main'
import Extra from '../components/layout/extra'
function HomePage() {
  const size = useWindowSize()
  console.log(
    `Flat in sidebar = Size: ${size.width} / DS: ${cst.DESKTOP_SIZE} `
  )
  return (
    <Layout>
      <SideBar flat={size.width < cst.DESKTOP_SIZE}>sidebar</SideBar>
      <Main>
        main {size.width}px / {size.height}px
      </Main>
      {size.width > cst.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}
export default HomePage
