import React from 'react'
import cn from 'classnames'

import styles from './navigation-button.module.css'
import Button from './button'

function NavigationButton({ notify, selected, children, className, ...props }) {
  const showNotifier = notify !== null && notify > 0
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      {...props}
    >
      {showNotifier && <span className={styles.notify}> {notify} </span>}
      {children}
    </Button>
  )
}

export default NavigationButton
