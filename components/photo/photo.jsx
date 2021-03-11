import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

const SizeType = {
  profile: 39,
  tweet: 47,
  default: 47
}

export default function Photo({
  src = 'https://pbs.twimg.com/profile_images/1327546721027715075/fnlgz0wp_400x400.jpg',
  alt,
  sizeType = 'default'
}) {
  const size = SizeType[sizeType]
  console.log('Size: ' + size)
  return (
    <div className={cn([styles.photo])} style={{ height: size, width: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
