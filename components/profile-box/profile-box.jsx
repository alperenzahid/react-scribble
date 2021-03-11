import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'
import Photo from '../photo/photo'
import { ArrowBottom } from '../icons/common'
import Button from '../buttons/button'
import TextTitle from '../text/text-title'
import TextBody from '../text/text-body'

export default function ProfileBox({
  name = 'zahidalprn',
  slug = 'zahidalprn',
  flat = false
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo sizeType={'profile'} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}