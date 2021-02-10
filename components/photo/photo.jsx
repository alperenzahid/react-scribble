import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

export default function Photo({
  src = 'https://pbs.twimg.com/profile_images/1327546721027715075/fnlgz0wp_400x400.jpg',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
