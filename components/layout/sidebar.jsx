import React from 'react'

import cn from 'classnames'
import styles from './sidebar.module.css'
import Navigation from '../nav/navigation'
import ThemeButton from '../buttons/theme-button'
import ProfileBox from '../profile-box/profile-box'

function SideBar({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default SideBar
