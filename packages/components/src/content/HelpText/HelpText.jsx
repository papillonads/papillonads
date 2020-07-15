import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './HelpText.prop'
import styles from './HelpText.scss'

export function HelpText({ className, children, ...otherProps }) {
  const classNames = cx(styles.HelpText, className)

  return (
    <p {...otherProps} className={classNames}>
      {children}
    </p>
  )
}

HelpText.propTypes = propTypes

HelpText.defaultProps = defaultProps
