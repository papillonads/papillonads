import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './TabFocusTrap.prop'
import styles from './TabFocusTrap.scss'

export function TabFocusTrap({ className, children, ...otherProps }) {
  const classNames = cx(styles.TabFocusTrap, className)

  return (
    <span tabIndex={-1} className={classNames} {...otherProps}>
      {children}
    </span>
  )
}

TabFocusTrap.propTypes = propTypes

TabFocusTrap.defaultProps = defaultProps
