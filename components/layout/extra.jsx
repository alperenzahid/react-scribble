import React from 'react'

import cn from 'classnames'
import styles from './extra.module.css'

function Extra({ children }) {
  return <div className={cn([styles.extra])}>{children}</div>
}

export default Extra
